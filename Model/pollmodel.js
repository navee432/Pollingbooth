const {Schema,model} = require('mongoose')

const sampleSchema = new Schema({

    poll_title:{type:String},
    question:{type:String},
    options: [{
        pic: { type: String },
        option: { type: String},
        count: { type: Number },
        voters:{type:String}
    }],
    createBy:{type:String},
    end_date:{type:Number},
    winner:{type:String},
    likes:{type:Number},
    total_likes:{type:Number},
    votes:{type:Number},
    total_votes:{type:Number},
    comments:[
        {user_id:{type:String}},
        {comment:[{String}]},
        {likes:[{user_id:String}]},
        {total_likes:[{Number}]},
        {reply:[{user_id:String}]}
    ],
    total_comments:{type:Number},
  

}) 

module.exports = model('PollCollection',sampleSchema)