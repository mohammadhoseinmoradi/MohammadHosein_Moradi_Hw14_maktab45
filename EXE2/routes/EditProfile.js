// ------------------------------
// -------- requires -----------
const express = require('express');
const Editprofile = express();
const path = require('path');
const bodyParser = require('body-parser')
const checkUser = require('../tools/Editprofile')
const fs = require('fs');
const { send } = require('process');
Editprofile.post('/', (req, res, next) => {

    req.on('data', function(data) {
        let UserInfo = JSON.parse(data)
        let check = checkUser(UserInfo)
        send(check)
    })

    function send(check) {
        if (check == 200) {
            res.status("200")
            res.end();
        } else if (check == 400) {
            res.status("400")
            res.end();
        }
    }

})


module.exports = Editprofile;