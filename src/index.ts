import express,{Express}  from "express";
import searchRoutes from './routes/search.routes.js';

/* The code is creating an Express application, setting up the routes using the `searchRoutes`
middleware, and then starting the server to listen on port 3000. */
const app:Express = express();

app.use(searchRoutes);

app.listen(3000);