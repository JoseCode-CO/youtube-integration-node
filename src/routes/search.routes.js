import { Router } from "express";
import { getData } from "../controllers/searchs.controller.js";

const router = Router();

router.get('/api/youtube', getData);

export default router;