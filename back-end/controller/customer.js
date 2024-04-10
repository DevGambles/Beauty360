const express = require('express');
var fs = require('fs');
const router = express.Router();
const { jsPDF } = require("jspdf");

const BASECONTROL = require("./basecontroller");
const CUSTOMER = require("../models/customer_model");
const SETTINGS = require("../models/settings_model");
const { basicQuestion } = require('../models/settings_model');
const config = require('../db');
const sysConf = require('../config');
var nodemailer = require('nodemailer');
const multer = require('multer');
const imageToBase64 = require('image-to-base64');
var ObjectId = require('mongodb').ObjectID;
const mailConfig = require('../config/mail');

router.post("/generate_url", async (req, res, next) => {
    var sessionTime = req.body.session_time;
    var service = req.body.service;
    var currTimeStamp = new Date();
    currTimeStamp = currTimeStamp.getTime();
    randomUrl = BASECONTROL.AesEncrypt(currTimeStamp.toString());
    // var url = req.protocol + '://localhost:3333/request/:' + randomUrl;
    var url = req.protocol + '://' + mailConfig.domain + '/request/:' + randomUrl;
    //save to db
    BASECONTROL.data_save({ url: randomUrl, expiretime: sessionTime, timestamp: currTimeStamp, service: service, isExpired: false, userId: req.session.userId }, CUSTOMER.generatedUrl);
    res.json({
        status: true,
        url: url
    })
    return next();
});

router.post("/isopened", async (req, res, next) => {
    var url = req.body.url;
    await CUSTOMER.generatedUrl.findOne({ url: url }, function (err, urlModel) {
        if (err) {
            res.json({
                status: false,
                msg: 'This url does not exist.'
            })
            return next();
        }
        else {
            if (urlModel.isOpened) {
                res.json({
                    status: true,
                    url: url
                })
                return next();
            }
            else {
                res.json({
                    status: false,
                    msg: 'This url is still not opened.'
                })
                return next();
            }
        }
    });
});

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}

router.post("/timeleft", async (req, res, next) => {
    var url = req.body.url;
    await CUSTOMER.generatedUrl.findOne({ url: url }, function (err, urlModel) {
        if (err) {
            res.json({
                status: false,
                msg: 'This url does not exist.'
            })
            return next();
        }
        else {
            var currTimeStamp = new Date();
            currTimeStamp = currTimeStamp.getTime();

            var expireTime = urlModel.expiretime;
            var createdTimestamp = urlModel.timestamp;

            if (expireTime * 60 * 1000 < (currTimeStamp - parseInt(createdTimestamp))) {
                res.json({
                    status: false,
                    msg: 'This url is already expired.'
                })
                return next();
            }
            else {
                let timeLeft = expireTime * 60 * 1000 - (currTimeStamp - parseInt(createdTimestamp));

                res.json({
                    status: true,
                    msg: 'Time Left: ' + msToTime(timeLeft)
                })
                return next();
            }
        }
    });
});

/*Data Structure
    -1: Internal Server Error
    -2: No url
    -3: Expired Url
    1: success
*/
async function checkUrl(url) {
    // try {
    urlModel = await CUSTOMER.generatedUrl.findOne({ url: url });
    if (!urlModel) {
        return -2;
    }

    if (urlModel.isOpened) {
        return -4;
    }

    var currTimeStamp = new Date();
    currTimeStamp = currTimeStamp.getTime();

    var expireTime = urlModel.expiretime;
    var createdTimestamp = urlModel.timestamp;
    console.log(expireTime, createdTimestamp);
    console.log(currTimeStamp - parseInt(createdTimestamp));
    if (expireTime * 60 * 1000 < (currTimeStamp - parseInt(createdTimestamp))) {
        return -3;
    }
    else {
        urlModel.isOpened = true;
        urlModel.save();
        return 1;
    }
}

async function getServiceByUrl(url) {
    // try {
    urlModel = await CUSTOMER.generatedUrl.findOne({ url: url });
    if (!urlModel) {
        return "Laser";
    }

    return urlModel.service;
}

async function getUserIdByUrl(url) {
    // try {
    urlModel = await CUSTOMER.generatedUrl.findOne({ url: url });
    if (!urlModel) {
        customerModel = await CUSTOMER.customers.find({})[0];
        return customerModel._id;
    }
    else 
        return urlModel.userId;
}

sendMail = async (to, file) => {

    var transporter = nodemailer.createTransport({
        host: mailConfig.host,
        port: mailConfig.port,
        secure: mailConfig.secure,
        auth: {
            user: mailConfig.auth.user,
            pass: mailConfig.auth.pass
        }
    });

    //   const mail = {
    //     from: data.from,
    //     to: data.email,
    //     subject: data.subject,
    //     html: data.html
    //   };


    //   transporter.sendMail(mail, function(err, info) {
    //     if (err) {
    //         console.log(err);
    //         res.json({status : false , data : err})
    //         transporter.close();
    //         return next();
    //     }else {
    //       res.json({status : true , data : info})
    //       transporter.close();
    //       return next();
    //     }
    //   });


    // var transporter = await nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //         user: sysConf.gmail.gmail,
    //         pass: sysConf.gmail.password
    //     }
    //     });

    var html = mailConfig.mail;

    var mailOptions = {
        from: mailConfig.from,
        to: to,
        subject: mailConfig.subject,
        html: html,
        attachments: [
            { path: file }
        ]
    };
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log('Email ERROR: ', error);
                resolve(false)
            } else {
                console.log('Email sent: ' + info.response);
                resolve(true)
            }
        });
    })
}

router.post("/submit_consent_form", multer({ dest: config.BASEURL }).any(), async (req, res, next) => {
    console.log(req.files);

    if (req.files.length > 1) {
        var page1 = req.files[0].path;
        var page2 = req.files[1].path;
        await fs.rename(page1, page1 + ".jpg", () => {

        });
        await fs.rename(page2, page2 + ".jpg", () => {

        });
        imageToBase64(page1 + ".jpg").then(
            (page1Base64) => {
                imageToBase64(page2 + ".jpg").then(async (page2Base64) => {
                    fs.unlinkSync(page1 + ".jpg");
                    fs.unlinkSync(page2 + ".jpg");

                    let formData = req.body;
                    let fileName = (new Date()).getTime() + ".pdf";

                    const doc = new jsPDF('p', 'px', 'a4');
                    formData['margin1'] = JSON.parse(formData['margin1']);
                    formData['margin2'] = JSON.parse(formData['margin2']);
                    formData['contactInfo'] = JSON.parse(formData['contactInfo']);
                    formData['signInfo'] = JSON.parse(formData['signInfo']);
                    formData['service'] = formData['service'];
                    doc.addImage("data:image/jpeg;base64," + page1Base64, 'JPEG', formData['margin1']['mx'], formData['margin1']['my'], formData['margin1']['w'], formData['margin1']['h']);
                    doc.addPage()
                    doc.addImage("data:image/jpeg;base64," + page2Base64, 'JPEG', formData['margin2']['mx'], formData['margin2']['my'], formData['margin2']['w'], formData['margin2']['h']);
                    doc.save(config.BASEURL + 'consentforms/' + fileName);

                    //send email
                    
                    // let mailResult = await sendMail(formData['contactInfo']['email'], config.BASEURL + 'consentforms/' + fileName);
                    console.log("Sending email...");
                    sendMail(formData['contactInfo']['email'], config.BASEURL + 'consentforms/' + fileName);
                    console.log("done");
                    formData.pdf_url = fileName;
                    let result = await BASECONTROL.data_save(formData, CUSTOMER.consentform);
                    console.log(result);
                    if (result) {
                        //Save to customers list
                        let customerInfo = {};
                        customerInfo['service'] = formData.service;
                        customerInfo['name'] = formData.contactInfo.name;
                        customerInfo['email'] = formData.contactInfo.email;
                        customerInfo['phone'] = formData.contactInfo.phone;
                        customerInfo['city'] = formData.contactInfo.city;
                        customerInfo['date'] = result.contactInfo.topdate;
                        customerInfo['referredby'] = formData.contactInfo.referredby;
                        customerInfo['consentId'] = result._id;
                        customerInfo['pdf'] = result.pdf_url;
                        customerInfo['userId'] = (formData.userId ? formData.userId : req.session.userId);

                        await BASECONTROL.data_save(customerInfo, CUSTOMER.customers);
                        res.json({
                            status: true,
                            emailSent: true//mailResult
                        })
                        return next();
                    }
                    else {
                        res.json({
                            status: false,
                            msg: 'Internal Server Error'
                        })
                        return next();
                    }
                }).catch((error) => {
                    console.log(error); // Logs an error if there was one
                    res.json({
                        status: false,
                        msg: 'Internal Server Error'
                    })
                    return next();
                });
            }
        )
            .catch(
                (error) => {
                    console.log(error); // Logs an error if there was one
                    res.json({
                        status: false,
                        msg: 'Internal Server Error'
                    })
                    return next();
                }
            );



    }
    else {
        res.json({
            status: false,
            msg: 'Internal Server Error'
        })
        return next();
    }


    // await fs.writeFile(config.BASEURL+'consentforms/'+fileName, bin, async function (err) {
    //     if (err) throw err;
    // });

});

router.post("/get_consent_form", async (req, res, next) => {
    switch (await checkUrl(req.body.url)) {
        case -1:
            res.json({ status: false, msg: 'Internal Server Error!' })
            return next();
        case -2:
            res.json({ status: false, msg: 'Not valid url.' })
            return next();
        case -3:
            res.json({ status: false, msg: 'This url is expired. Contact to us again.' })
            return next();
        case -4:
            res.json({ status: false, msg: 'This url is already opened on another browser. Contact to us again.' })
            return next();
        default:
            break;
    }
    const service = await getServiceByUrl(req.body.url);
    const userId = await getUserIdByUrl(req.body.url);
    console.log("venus-userId:", userId);
    //get basic questions
    const basicQuestion = await SETTINGS.basicQuestion.find({ activate: 'Visible' });
    const mediaHistory = await SETTINGS.mediaQuestion.find({ activate: 'Visible' });
    const bodyArea = await SETTINGS.bodyArea.find({});
    areaSelectFormat = [];
    bodyArea.forEach(element => {
        areaSelectFormat.push({ value: element['_id'], label: element['name'] });
    });

    var currTimeStamp = new Date();
    currTimeStamp = currTimeStamp.getTime();
    randomUrl = BASECONTROL.AesEncrypt(currTimeStamp.toString());
    var url = req.protocol + '://' + req.get('host') + '/request/:' + randomUrl;
    //save to db
    // BASECONTROL.data_save({url: randomUrl, timestamp: currTimeStamp, isExpired: false}, CUSTOMER.generatedUrl);
    res.json({
        status: true,
        basicquestions: basicQuestion,
        mediahistory: mediaHistory,
        bodyarea: areaSelectFormat,
        service: service,
        userId: userId,
    })
    return next();
});

router.get("/customers", async (req, res, next) => {
    const bodyArea = await SETTINGS.bodyArea.find({});
    areaSelectFormat = [];
    bodyArea.forEach(element => {
        areaSelectFormat.push({ value: element['_id'], label: element['name'] });
    });
    let condition = req.session.userId ? { userId: req.session.userId } : {};
    condition.service = req.query.service ? req.query.service : "Laser";
    let customers = await CUSTOMER.customers.find(condition).sort({ 'createdAt': -1 })
    if (!customers)
        customers = [];
    //save to db
    res.json({
        status: true,
        data: customers,
        bodyarea: areaSelectFormat,
        msg: 'Success'
    })
    return next();
});

router.post("/init_session_data", async (req, res, next) => {
    const bodyArea = await SETTINGS.bodyArea.find({});
    areaSelectFormat = [];
    bodyArea.forEach(element => {
        areaSelectFormat.push({ value: element['_id'], label: element['name'] });
    });
    let condition = req.session.userId ? { userId: req.session.userId } : {};
    condition.service = req.body.service ? req.body.service : "Laser";
    //save to db
    res.json({
        status: true,
        data: { 'customers': await BASECONTROL.Bfind(CUSTOMER.customers, condition), 'bodyarea': areaSelectFormat },
        msg: 'Success'
    })

    return next();
});

// router.post("/add",async(req,res,next)=>{
//     //save to db
//     result = await BASECONTROL.data_save({question:req.body.question, category:req.body.category, activate:req.body.activate}, SETTINGS.basicQuestion);
//     if(!result){
//         res.json({status : false, msg : 'Internal Sever Error!'})
//         return next();
//     }
//     else{
//         res.json({status : true,data : result})
//         return next();
//     }
// });

router.post("/update", async (req, res, next) => {
    CUSTOMER.customers.findByIdAndUpdate({ '_id': req.body._id }, req.body, function (err, result) {
        if (err) {
            res.json({ status: false, msg: err })
            return next();
        }
        else {
            res.json({ status: true, data: result })
            return next();
        }

    })
});

router.post("/delete", async (req, res, next) => {
    //save to db
    await CUSTOMER.customers.findOne({ '_id': req.body._id }).then(customer => {
        if (customer) {
            console.log("CUSTOMER: ", customer);
            let pdfName = customer.pdf;
            try {
                fs.unlinkSync(config.BASEURL + 'consentforms/' + pdfName)
                //file removed
            } catch (err) {
                console.log(err)
            }
            let consentId = customer.consentId;
            console.log("CONSENT_ID:", consentId);
            CUSTOMER.consentform.findByIdAndDelete({ '_id': consentId }, function (err, result) {
                console.log("ERROR:", err);
            })
            //delete session table
            CUSTOMER.sessions.findByIdAndDelete({ 'customer_id': req.body._id })
        }
    });

    CUSTOMER.customers.findByIdAndDelete({ '_id': req.body._id }, function (err, result) {
        if (err) {
            res.json({ status: false, msg: err })
            return next();
        }
        else {
            res.json({ status: true, data: result })
            return next();
        }
    })
});


router.post("/sessions", async (req, res, next) => {
    let customerId = req.body.customer_id;
    CUSTOMER.sessions.aggregate([
        { $match: { customer_id: { $eq: customerId } } },
        {
            $lookup:
            {
                from: 'bodyareas',
                localField: 'area',
                foreignField: '_id',
                as: 'areas'
            }
        }
    ], function (err, session) {
        session.forEach(element => {
            var areanames = [];
            var areas = [];
            element.areas.forEach(area => {
                areanames.push(area.name);
                areas.push({ value: area._id, label: area.name });
            });
            element.areas = areas;
            element.areanames = areanames.toString();

            const date = new Date(element.date);
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            element.date = `${year}-${month}-${day}`;
        });
        console.log(err, session);
        if (err) {
            res.json({
                status: false,
                msg: 'Internal Server Error'
            })
            return next();
        }
        else {
            res.json({
                status: true,
                data: session,
                msg: 'Success'
            })
            return next();
        }
    });
    //save to db
});

router.post("/session_add", async (req, res, next) => {
    //save to db
    result = await BASECONTROL.data_save({
        date: new Date(req.body.date),
        area: req.body.area,
        skintype: req.body.skintype,
        kj: parseInt(req.body.kj), 
        cost: parseInt(req.body.cost), 
        comments: req.body.comments, 
        customer_id: req.body.customer_id, 
        service: req.body.service,
        color_used: req.body.color_used,
        technique: req.body.technique,
        pigment_used: req.body.pigment_used,
        session_duration: parseInt(req.body.session_duration),
        type_of_pigmentation: req.body.type_of_pigmentation,
        ink_used: req.body.ink_used,
        type_of_peel: req.body.type_of_peel,
        duration: parseInt(req.body.duration),
        needle_depth: parseInt(req.body.needle_depth),
        serum_used: req.body.serum_used,
        products_used: req.body.products_used,
        sclerosing_agent_used: req.body.sclerosing_agent_used,
        pulses: req.body.pulses,
        units_used: parseInt(req.body.units_used),
        product_used: req.body.product_used,
        amount_used: req.body.amount_used,
        type_of_crystals_used: req.body.type_of_crystals_used,
        procedure: req.body.procedure

    }, CUSTOMER.sessions);
    if (!result) {
        res.json({ status: false, msg: 'Internal Sever Error!' })
        return next();
    }
    else {
        res.json({ status: true, data: result })
        return next();
    }
});

router.post("/session_update", async (req, res, next) => {
    CUSTOMER.sessions.findByIdAndUpdate({ '_id': req.body._id }, req.body, function (err, result) {
        if (err) {
            res.json({ status: false, msg: err })
            return next();
        }
        else {
            res.json({ status: true, data: result })
            return next();
        }

    })
});

router.post("/session_delete", async (req, res, next) => {

    CUSTOMER.sessions.findByIdAndDelete({ '_id': req.body._id }, function (err, result) {
        if (err) {
            res.json({ status: false, msg: err })
            return next();
        }
        else {
            res.json({ status: true, data: result })
            return next();
        }
    })
});

module.exports = router;