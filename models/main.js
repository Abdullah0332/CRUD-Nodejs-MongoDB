const mongoose= require('mongoose');

const Schema= mongoose.Schema;

const mainSchema=new Schema({
    Name:{
        type: String,
        require:true
    },
    Email:{
        type: String,
        require:true
    },
    Phone_Number:{
        type: String,
        require:true
    },
    City:{
        type: String,
        require:true
    },
    Career:{
        type: String,
        require:true
    }
})

module.exports=mongoose.model('Crud',mainSchema);