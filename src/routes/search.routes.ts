import { Router } from "express";
import { getData } from "../controllers/searchs.controller";

/* The code is creating a router object using the `Router` class from the Express framework. */
const router = Router();

router.get('/api/youtube', getData);

export default router;