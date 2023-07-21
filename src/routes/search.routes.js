import { Router } from "express";
import { getData } from "../controllers/searchs.controller.js";

const router = Router();

router.get('/test', getData);

export default router;