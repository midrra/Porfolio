import { Router } from "express";
import {newProject,projects, removeProject} from '../controllers/dashboardController.js'
import { verifyToken,requireRole } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/newproject",verifyToken,requireRole("admin"),newProject);
router.get("/projects",verifyToken,requireRole("admin"),projects)
router.delete("/remove/:id",verifyToken,requireRole("admin"),removeProject)

export default router;