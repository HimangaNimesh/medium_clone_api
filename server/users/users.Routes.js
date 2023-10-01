import express from "express"
import { singin, signup } from "./users.Controller.js"

const router = express.Router();

//CREATE A USER
router.post("/", signup)

//SIGN IN
router.post("/signin", singin)


export default router;