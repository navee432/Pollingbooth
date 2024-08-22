
const {Schema,model} = require('mongoose')
const { stringify } = require('querystring')

const sampleSchema = new Schema({

    name:{type:String},
    district:{type:String}    

})

module.exports = model('mongocollection',sampleSchema)