const mongoose=require('mongoose');

const Schema=mongoose.Schema;
const newsletterSchema=new Schema({
    title:String,
    author:String,
    summary:String
});

const newsletter=mongoose.model('Newsletteraddition',newsletterSchema);

module.exports=newsletter;