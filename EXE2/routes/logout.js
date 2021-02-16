// ------------------------------
// -------- requires -----------
const express = require('express');
const logout = express();
const path = require('path');
const bodyParser = require('body-parser')
const fs = require('fs');
const checklogout = require('../tools/logout')
    // const Meno = require('../tools/Meno')
logout.use("/public", express.static('public'))
    // ---------------------------------------------------------

// console.log(data)
logout.get('/:id', (req, res) => {
    console.log(req.params.id);
    let data = req.params.id
    let UserInfo = checklogout(data)
    console.log(UserInfo, "999999999999999999999999999999999999999999999999999999999999");
    if (UserInfo[0].isLoggedIn == false) {
        res.redirect()
        res.render("pages/login")
    } else if (UserInfo[0].isLoggedIn == true) {
        res.render('pages/profile', { UserInfo })

    }


})

module.exports = logout;