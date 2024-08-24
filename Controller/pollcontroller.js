const SampleModel = require('../Model/pollmodel');

exports.create = async(req,res,next)=>{
    try
    {
    
    const {poll_title,question,options,createBy,end_date,winner,likes,total_likes,votes,total_votes,comments,reply,total_comments} = req.body;

    const Doc = new SampleModel({poll_title,question,options,createBy,end_date,winner,likes,total_likes,votes,total_votes,comments,reply,total_comments});
    await Doc.save();
    
    return res.status(201).json({Message:"Document created successfully",data:Doc})
    }
    catch(err)
    {
    return res.status(400).json({Message:err.message})
    }

}

exports.getall = async(req,res,next)=> {
    try{
        const SampleDoc = await SampleModel.find({},{_id:0});
        return res.status(200).json({data:SampleDoc})
    }
    catch(err){
        return res.status(404).json({message:err.message})
    }
}

exports.update = async (req,res,next)=>{
    try{
        const {id} = req.params;
        const{poll_title,question,options,createBy,end_date,winner,likes,total_likes,votes,total_votes,comments,reply,total_Comments} = req.body;

        const updatedObject = {};

        if(poll_title) updatedObject.poll_title = poll_title;
        if(question) updatedObject.question = question;
        if(options) updatedObject.options = options;
        if(createBy) updatedObject.createBy = createBy;
        if(winner) updatedObject.winner = winner;
        if(likes) updatedObject.likes = likes;
        if(total_likes) updatedObject.total_likes = total_likes;
        if(votes) updatedObject.votes = votes;
        if(total_votes) updatedObject.total_votes = total_votes;
        if(comments) updatedObject.comments = comments;
        if(reply) updatedObject.reply = reply;
        // if(total_Comments) updatedObject.total_Comments = total_Comments;
        const updatedRecord = await SampleModel.findByIdAndUpdate(id,updatedObject, {new:true});

        if(!updatedRecord){
            return res.status(400).json({error:'Record not found'});
        }
        
        res.status(200).json({message:"Record Updated Successfully", data : updatedRecord})
        
    }
    catch(err){
        return res.status(400).json({message:err.message});
    }
}

exports.getbyid = async(req,res)=>{
    try{
    const {id} = req.params;

    const data = await SampleModel.findById(id);
    return res.status(200).json({data});       

    }
    catch(err){
        return res.status(400).json({message:err.message});
    }    
}

exports.remove = async(req,res)=>{
    try{
    const {id} = req.params;

    const data = await SampleModel.findByIdAndDelete(id);
    return res.status(200).json({Message:"Document deleted successfully"});       

    }
    catch(err){
        return res.status(400).json({message:err.message});
    }    
}