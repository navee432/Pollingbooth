const {Schema,model} = require('mongoose')

const sampleSchema = new Schema({


  Comments:[
  {poll_id:{type:String}},
  {user_id:{type:String}},
  {reply_msg:{type:Number}},
  {likers:{type:Number}},
  {replies:{type:String}},

]}) 

module.exports = model('CommentsCollection',sampleSchema)




