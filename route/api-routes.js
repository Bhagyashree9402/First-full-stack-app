const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/api/test", (req, res) => {
    //console.log("api has been hit");
    //res.send("<h1>hello from api</h1>");
    res.json({ res: "hello from the api" });

});

router.get("/api/test2", (req, res) => {
    res.json({ res: "hellooooo from the api" });

});


module.exports = router;