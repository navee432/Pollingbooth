const {Schema,model} = require('mongoose')

const sampleSchema = new Schema({

    category_name:{type:String},
    category_id:{type:String},
   
   
}) 

module.exports = model('categorycollection',sampleSchema)