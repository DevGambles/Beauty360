const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bodyArea = () =>{
    var  UserSchema = new Schema({ 
        name :{ type : String, required : true},
        time: { type: Number, default : 10},
        createdAt : {type : String, default : Date.now }
    });
    return mongoose.model('bodyarea', UserSchema)
}

const basicQuestion = () =>{
    var  UserSchema = new Schema({ 
        question :{ type : String, required : true},
        category: { type: String, required : true},
        activate: { type: String, required : true},
        createdAt : {type : String, default : Date.now }
    });
    return mongoose.model('basic_questions', UserSchema)
}

const mediaQuestion = () =>{
    var  UserSchema = new Schema({ 
        question :{ type : String, required : true},
        activate: { type: String, required : true},
        createdAt : {type : String, default : Date.now }
    });
    return mongoose.model('media_questions', UserSchema)
}

const mainSetting = () => {
    var UserSchema = new Schema({
        service: {type: String, default: 'Laser'},
        title: {type: String},
        consent1: {type: String},
        consent2: {type: String}
    });
    return mongoose.model('main_settings', UserSchema)
}


module.exports  = {
    bodyArea : bodyArea(),
    basicQuestion: basicQuestion(),
    mediaQuestion: mediaQuestion(),
    mainSetting: mainSetting(),
}