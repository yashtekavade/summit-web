// Importing necessary modules
import express from "express";
import summitCtrl from "./summit.controller.js";
// import multer from 'multer'
// const upload = multer()

// Creating a new router
const router = express.Router();

router.route("/register").post(summitCtrl.apiRegister);

export default router;