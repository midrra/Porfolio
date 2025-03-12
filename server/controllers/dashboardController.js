import Porto from "../models/Porto.js";
import path from "path";
import fs from "fs";

export const newProject = async (req, res, next) => {
  try {
    const normalizedPath = req.file.path.replace(/\\/g, "/");

    await Porto.create({
      name: req.body.name,
      url: req.body.url,
      section: req.body.section,
      image: normalizedPath,
    });

    res.json({ message: "File uploaded successfully", file: req.file });
  } catch (err) {
    if (err.code === 11000) {
      console.log("Image already exists!");
    } else {
      console.error(err);
    }
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
      image: `${req.protocol}://${req.get("host")}/${p.image.replace(
        /\\/g,
        "/"
      )}`,
    }));

    return res.status(200).json({ message: "All projcts", fullProjects });
  } catch (err) {
    return res.status(500).json("Inalid projects");
  }
};

export const removeProject = async (req, res) => {
  try {
    const project = await Porto.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    const imagePath = path.join(project.image);
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error("Error deleting image:", err.message);
      } else {
        console.log("Image deleted successfully:", imagePath);
      }
    });

    await Porto.findByIdAndDelete(req.params.id);
    return res.status(200).json("Project deleted successfully");
  } catch (err) {
    return res.status(500).json({ message: "something we wrong" });
  }
};
