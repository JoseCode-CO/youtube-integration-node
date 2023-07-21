import express from "express";
import searchRoutes from './routes/search.routes.js';

const app = express();

app.use(searchRoutes);

app.listen(3000);