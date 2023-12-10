import express from 'express';
import summitRoutes from "./api/summit.routes.js";
const app = express();
import cors from "cors";
const corsOrigin ={
    origin:true,          
    optionSuccessStatus:200
}
app.use(cors(corsOrigin));

app.use(express.json());

app.use("/summit", summitRoutes);
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

export default app;