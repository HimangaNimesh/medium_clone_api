import express from "express"
import { singin, singup } from "./auth.Controller.js"

const router = express.Router();

//CREATE A USER
router.post("/signup", singup)

//SIGN IN
router.post("/signin", singin)


export default router;