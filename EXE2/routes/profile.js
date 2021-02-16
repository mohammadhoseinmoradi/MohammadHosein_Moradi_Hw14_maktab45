// ------------------------------
// -------- requires -----------
const express = require('express');
const profile = express();
const path = require('path');
const bodyParser = require('body-parser')
const fs = require('fs');
// const Meno = require('../tools/Meno')
profile.use("/public", express.static('public'))
    // ---------------------------------------------------------
    // let data = JSON.parse(fs.readFileSync("./tools/file.json", 'utf-8'))
    // console.log(data)
profile.get('/:id', (req, res) => {
    res.render('pages/profile')
})

module.exports = profile;