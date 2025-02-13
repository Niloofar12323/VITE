import { Router } from "express";
import fs from "fs";
import { randomUUID } from "crypto";

const tasksRouter = Router();

tasksRouter
    .get("/", (req, res)=>{
        console.log("uuid",randomUUID());
        try {
            const data = JSON.parse(fs.readFileSync("./data.json", "utf8"));
            res.status(200).json({data});
        } catch (error) {
            res.status(500).json({msg:"Serverfehler"})
        }
    })
    .post("/", (req, res) => {
        try {
          const { task } = req.body;
          
          const data = JSON.parse(fs.readFileSync("./data.json", "utf8"));
          const newTask = { id: randomUUID(), task };
          data.push(newTask);
          fs.writeFileSync("./data.json", JSON.stringify(data));
          res.status(201).json(newTask);
        } catch (error) {
          res.status(500).json({ msg: "Server error" });
        }
      })

export default tasksRouter;