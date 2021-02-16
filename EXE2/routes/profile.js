// ------------------------------
// -------- requires -----------
const express = require('express');
const profile = express();
const path = require('path');
const bodyParser = require('body-parser')
const fs = require('fs');
const checkprofile = require('../tools/profile')
    // const Meno = require('../tools/Meno')
profile.use("/public", express.static('public'))
    // ---------------------------------------------------------

// console.log(data)
profile.get('/:id', (req, res) => {
    let data = JSON.parse(req.params.id)
    let UserInfo = checkprofile(data)
    console.log(UserInfo, "999999999999999999999999999999999999999999999999999999999999");
    res.render('pages/profile', { UserInfo })
})

module.exports = profile;