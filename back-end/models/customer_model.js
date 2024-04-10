const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const generatedUrl = () =>{
    var  UserSchema = new Schema({ 
        url :{ type : String, required : true},
        userId: {type: String, required: true},
        expiretime: { type: Number, required : true},
        timestamp: { type: String, required : true},
        isExpired: { type: Boolean, required : true},
        isOpened: {type: Boolean, default: false},
        createdAt : {type : String, default : Date.now },
        service: {type: String, default: 'Laser'},
    });
    return mongoose.model('generated_urls', UserSchema)
}

const consentform = () => {
    var  UserSchema = new Schema({ 
        contactInfo :{ type : Object, required : true},
        signInfo: { type: Object, required : true},
        pdf_url: { type: String, required : true},
        createdAt : {type : String, default : Date.now },
        service: {type: String, default: 'Laser'},
    });
    return mongoose.model('consentforms', UserSchema)
}

const customers = () =>{
    var  UserSchema = new Schema({ 
        name :{ type : String, required : true},
        email: { type: String, required : true},
        phone: { type: String, default: ''},
        city: { type: String, default : ''},
        fsession: { type: String, default : ''},
        lsession: { type: String, default : ''},
        referredby: { type: String, default : ''},
        userId: {type: String, required: true},
        consentId: {type: String, required: true},
        pdf: {type: String, required: true},
        date: {type: String, required: true},
        createdAt : {type : String, default : Date.now },
        service: {type: String, default: 'Laser'},
    });
    return mongoose.model('customers', UserSchema)
}

const sessions = () =>{
    var  UserSchema = new Schema({ 
        date :{ type : Date, required : true},
        area: [{type:mongoose.Schema.ObjectId, ref: 'bodyareas'}],
        skintype: { type: String, default: ''},
        kj: { type: Number, default : 0},
        cost: { type: Number, default : 0},
        comments: { type: String, default : ''},
        
        color_used : { type: String, default: ''},
        technique : { type: String, default: ''},
        pigment_used : { type: String, default: ''},
        session_duration : { type: Number, default : 0},
        type_of_pigmentation : { type: String, default: ''},
        ink_used : { type: String, default: ''},
        type_of_peel : { type: String, default: ''},
        duration : { type: Number, default : 0},
        needle_depth : { type: Number, default : 0},
        serum_used : { type: String, default: ''},
        products_used : { type: String, default: ''},
        sclerosing_agent_used : { type: String, default: ''},
        pulses : { type: Number, default : 0}, //kj
        units_used : { type: Number, default : 0},
        product_used : { type: String, default: ''},
        amount_used : { type: String, default: ''},
        type_of_crystals_used : { type: String, default: ''},
        procedure : { type: String, default: ''},

        customer_id: {type: String, required: true},
        createdAt : {type : String, default : Date.now },
        service: {type: String, default: 'Laser'},
    });
    return mongoose.model('sessions', UserSchema)
}

module.exports  = {
    generatedUrl : generatedUrl(),
    consentform : consentform(),
    customers: customers(),
    sessions: sessions()
}