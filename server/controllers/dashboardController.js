import Porto from "../models/Porto.js";

export const newProject = async(req,res,next)=>{
    console.log(req.file);
    console.log(req.body.name)
    
    try{
      const normalizedPath = req.file.path.replace(/\\/g, "/");

    await Porto.create({
      name:req.body.name,
      image:normalizedPath,
    })


    res.json({ message: "File uploaded successfully", file: req.file })
  }catch(err){
      if (err.code === 11000) {
    console.log("Image already exists!");
  } else {
    console.error(err);
  }
  }
}


export const projects = async(req,res)=>{
    const projects = await Porto.find();
try{
    const fullProjects = projects.map((p) => ({
      ...p._doc,
      image: `${req.protocol}://${req.get("host")}/${p.image.replace(/\\/g, "/")}`,
    }));

    return res.status(200).json({message:"All projcts",fullProjects})
  }catch(err){
    return res.status(500).json("Inalid projects")
  }
    
}

export const removeProject =async (req,res)=>{
  try{
 const project = await Porto.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    await Porto.findByIdAndDelete(req.params.id);
    return res.status(200).json("Project deleted successfully")
  }catch(err){
    return res.status(500).json({message:'something we wrong'})
  }

}