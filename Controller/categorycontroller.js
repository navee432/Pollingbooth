const SampleModel = require('../Model/categorymodel');

exports.create = async(req,res,next)=>{
    try
    {
    
    const {category_name,category_id} = req.body;

    const Doc = new SampleModel({category_name,category_id});
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
        const{category_name,category_id} = req.body;
        const updatedObject = {};

        if(category_name) updatedObject.category_name = category_name;
        if(category_id) updatedObject.category_id = category_id;
    
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