const express = require('express');
const router = express.Router();

const BASECONTROL = require("./basecontroller");
const SETTINGS = require("../models/settings_model");

const CONFIG = require("../config");
const jwt = require('jsonwebtoken');
const request = require("request");

router.get("/getdata",async(req,res,next)=>{
    //save to db
    res.json({
        status : true,
        data: await BASECONTROL.Bfind(SETTINGS.bodyArea, {}),
        msg : 'Success'
    }) 
    return next();
});

router.post("/add",async(req,res,next)=>{
    //save to db
    result = await BASECONTROL.data_save({name:req.body.name, time:req.body.time}, SETTINGS.bodyArea);
    if(!result){
        res.json({status : false, msg : 'Internal Sever Error!'})
        return next();
    }
    else{
        res.json({status : true,data : result})
        return next();
    }
});

router.post("/update",async(req,res,next)=>{
    SETTINGS.bodyArea.findByIdAndUpdate({'_id': req.body._id}, req.body, function(err, result){
        if(err){
            res.json({ status : false, msg : err })
            return next();
        }
        else{
            res.json({ status : true, data : result })
            return next();
        }

    })
});

router.post("/delete",async(req,res,next)=>{
    //save to db
    SETTINGS.bodyArea.findByIdAndDelete({'_id': req.body._id}, function(err, result){
        if(err){
            res.json({ status : false, msg : err })
            return next();
        }
        else{
            res.json({ status : true, data : result })
            return next();
        }
    })
});

router.get("/get_basic_data",async(req,res,next)=>{
    //save to db
    res.json({
        status : true,
        data: await BASECONTROL.Bfind(SETTINGS.basicQuestion, {}),
        msg : 'Success'
    }) 
    return next();
});

router.post("/basic_add",async(req,res,next)=>{
    //save to db
    result = await BASECONTROL.data_save({question:req.body.question, category:req.body.category, activate:req.body.activate}, SETTINGS.basicQuestion);
    if(!result){
        res.json({status : false, msg : 'Internal Sever Error!'})
        return next();
    }
    else{
        res.json({status : true,data : result})
        return next();
    }
});

router.post("/basic_update",async(req,res,next)=>{
    SETTINGS.basicQuestion.findByIdAndUpdate({'_id': req.body._id}, req.body, function(err, result){
        if(err){
            res.json({ status : false, msg : err })
            return next();
        }
        else{
            res.json({ status : true, data : result })
            return next();
        }

    })
});

router.post("/basic_delete",async(req,res,next)=>{
    //save to db
    SETTINGS.basicQuestion.findByIdAndDelete({'_id': req.body._id}, function(err, result){
        if(err){
            res.json({ status : false, msg : err })
            return next();
        }
        else{
            res.json({ status : true, data : result })
            return next();
        }
    })
});

router.get("/get_media_data",async(req,res,next)=>{
    //save to db
    res.json({
        status : true,
        data: await BASECONTROL.Bfind(SETTINGS.mediaQuestion, {}),
        msg : 'Success'
    }) 
    return next();
});

router.post("/media_add",async(req,res,next)=>{
    //save to db
    result = await BASECONTROL.data_save({question:req.body.question, category:req.body.category, activate:req.body.activate}, SETTINGS.mediaQuestion);
    if(!result){
        res.json({status : false, msg : 'Internal Sever Error!'})
        return next();
    }
    else{
        res.json({status : true,data : result})
        return next();
    }
});

router.post("/media_update",async(req,res,next)=>{
    SETTINGS.mediaQuestion.findByIdAndUpdate({'_id': req.body._id}, req.body, function(err, result){
        if(err){
            res.json({ status : false, msg : err })
            return next();
        }
        else{
            res.json({ status : true, data : result })
            return next();
        }

    })
});

router.post("/media_delete",async(req,res,next)=>{
    //save to db
    SETTINGS.mediaQuestion.findByIdAndDelete({'_id': req.body._id}, function(err, result){
        if(err){
            res.json({ status : false, msg : err })
            return next();
        }
        else{
            res.json({ status : true, data : result })
            return next();
        }
    })
});

router.post("/main_config", async (req, res, next)=>{
    const {title, consent1, consent2, service} = req.body;
    const filter = { service: req.body.service }; 
    const update = { title, consent1, consent2, service };
    const options = { new: true, upsert: true };

    try {
        const result = await SETTINGS.mainSetting.findOneAndUpdate(filter, update, options);
        res.json({ status: true, data: result });
    } catch (error) {
        console.error('Error in main_config:', error);
        res.status(500).json({ status: false, msg: 'Internal Server Error!' });
    }

});

router.get('/getSettings', async (req, res, next) => {
    try {
        var result = await SETTINGS.mainSetting.findOne({service: req.query.service ? req.query.service : "Laser"});
        if (!result)
            result = { title: req.query.service, consent1: "", consent2: ""};
        res.json({ status: true, data: result });
    } catch(err) {
        console.error('Error in main_config:', error);
        res.status(500).json({ status: false, msg: 'Internal Server Error!' });
    }
})

module.exports = router;