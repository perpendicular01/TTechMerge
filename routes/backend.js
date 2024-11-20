const express = require("express");
const path = require("path");

const fetchData = require("../controllers/fetchData");



const router = express.Router();

const rootDir = path.resolve(__dirname, "..");


router.post("/fetchMonitorData", fetchData.fetchMonitorData);



router.post("/fetchGPUData", fetchData.fetchGPUData);



module.exports = router;
