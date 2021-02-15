// ------------------------------
// -------- requires -----------
const express = require('express');
const Api = express();
const path = require('path');
const bodyParser = require('body-parser')
const fs = require('fs');
// const Meno = require('../tools/Meno')
Api.use("/public", express.static('public'))
    // ---------------------------------------------------------
    // let data = JSON.parse(fs.readFileSync("./tools/file.json", 'utf-8'))
    // console.log(data)
Api.get('/', (req, res) => {
    res.render('pages/login')
})

module.exports = Api;