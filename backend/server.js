import express from "express";
import tasksRouter from "./routes/tasks.js";
// import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const PORT = process.env.PORT;

// app.use(cors());
app.use(express.json());

console.log("filename", __filename, "dirname", __dirname);
console.log("dirname + dist", path.join(__dirname, "/dist"));

app.use("/tasks", tasksRouter);
app.use("/", express.static(path.join(__dirname, "/dist"))); // dist folder in the backend main directory
app.get("/*", (req, res) => res.sendFile(__dirname + "/dist/index.html"));

app.listen(PORT, ()=>{
    console.log(`Der Server hört auf Port ${PORT}`);
});