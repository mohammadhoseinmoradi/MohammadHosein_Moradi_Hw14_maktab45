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
logout.post('/', (req, res) => {

    req.on('data', function(data) {

        let UserInfo = JSON.parse(data)
        let check = checklogout(UserInfo)
        send(check)
    })

    function send(check) {
        if (check[0].isLoggedIn == false) {
            res.status("200")
            res.end();
        } else if (check[0].isLoggedIn == true) {
            res.status("400")
            res.end();
        }

    }


})

module.exports = logout;