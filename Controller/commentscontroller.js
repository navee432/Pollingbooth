const SampleModel = require('../Model/commentsmodel');

exports.create = async(req,res,next)=>{
    try
    {
    const {poll_id,user_id,reply_msg,likers,replies} = req.body;

    const Doc = new SampleModel({poll_id,user_id,reply_msg,likers,replies});
    await Doc.save();
    
    return res.status(201).json({Message:"Commented",data:Doc})
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
        const{poll_id,user_id,reply_msg,likers,replies} = req.body;

        const updatedObject = {};

        if(poll_id) updatedObject.poll_id = poll_id;
        if(user_id) updatedObject.user_id = user_id;
        if(reply_msg) updatedObject.reply_msg = reply_msg;
        if(likers) updatedObject.likers = likers;
        if(replies) updatedObject.replies = replies;
        const updatedRecord = await SampleModel.findByIdAndUpdate(id,updatedObject, {new:true});

        if(!updatedRecord){
            return res.status(400).json({error:'Record not found'});
        }
        
        res.status(200).json({message:"Comments Updated Successfully", data : updatedRecord})
        
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
    return res.status(200).json({Message:"Comments deleted successfully"});       

    }
    catch(err){
        return res.status(400).json({message:err.message});
    }    
}