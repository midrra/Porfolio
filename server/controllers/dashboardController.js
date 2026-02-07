import { Porto } from "../models/Porto.js";
import path from "path";
import fs from "fs";
import { cloudinary } from "../middlewares/upload.js";

export const newProject = async (req, res, next) => {
  try {
    if (!req.file) {
  return res.status(400).json({ error: "No file uploaded" });
}
    await Porto.create({
      name: req.body.name,
      url: req.body.url,
      section: req.body.section,
      image: req.file.path,
      imagePublicId:req.file.filename
    });

    res.json({ message: "File uploaded successfully", file: req.file });
  } catch (err) {
    return res.status(500).json({ message: "something went wrong" });
  }
};

export const projects = async (req, res) => {
  let projects;
  if (req.query.section === "react") {
    projects = await Porto.find({ section: "react" }).sort({ createdAt: -1 });
  } else if (req.query.section === "vanilla") {
    projects = await Porto.find({ section: "vanilla" }).sort({ createdAt: -1 });
  } else {
    projects = await Porto.find().sort({ createdAt: -1 });
  }

  try {
    const fullProjects = projects.map((p) => ({
      ...p._doc,
      image:p.image
    }));

    return res.status(200).json({ message: "All projcts", fullProjects });
  } catch (err) {
    return res.status(500).json("Invalid projects");
  }
};

export const removeProject = async (req, res) => {
  try {
    const project = await Porto.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    // Delete image from Cloudinary
    if (project.imagePublicId) {
      try {
        const result = await cloudinary.uploader.destroy(project.imagePublicId);
      } catch (err) {
        console.error("Cloudinary delete failed:", err);
      }
    }

    await Porto.findByIdAndDelete(req.params.id);
    return res.status(200).json("Project deleted successfully");
  } catch (err) {
    return res.status(500).json({ message: "something went wrong" });
  }
};

export const getEditProject = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Porto.findById(id);

    return res.status(200).json({ message: "edit data", data });
  } catch (err) {
    return res.status(500).json({ message: "something went wrong" });
  }
};

export const editProject = async (req, res) => {
  try {
    const { id } = req.params;
    const checkImage = await Porto.findById(id);

     if (checkImage.imagePublicId) {
      try {
        const result = await cloudinary.uploader.destroy(checkImage.imagePublicId);
      } catch (err) {
        return res.status(500).json({message:"Cloudinary delete failed:", err});
      }
    }

    const data = await Porto.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
        url: req.body.url,
        section: req.body.section,
        image: req.file.path,
        imagePublicId:req.file.filename
      },
      { new: true }
    );
    return res.status(200).json({ message: "updated successfully", data });
  } catch (err) {
    return res.status(500).json({ message: "something went wrong" });
  }
};
