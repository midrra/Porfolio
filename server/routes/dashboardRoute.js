import { Router } from "express";
import {newProject,projects, removeProject} from '../controllers/dashboardController.js'

const router = Router();

router.post("/newproject",newProject);
router.get("/projects",projects)
router.delete("/remove/:id",removeProject)

export default router;