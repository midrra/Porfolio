import { Router } from "express";
import {editProject,getEditProject, newProject,projects, removeProject} from '../controllers/dashboardController.js'
import { verifyToken,requireRole } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/newproject",verifyToken,requireRole("admin"),newProject);
router.get("/projects",projects)
router.delete("/remove/:id",verifyToken,requireRole("admin"),removeProject)
router.get("/edit/:id",verifyToken,requireRole("admin"),getEditProject)
router.put("/editing/:id",verifyToken,requireRole("admin"),editProject)

export default router;