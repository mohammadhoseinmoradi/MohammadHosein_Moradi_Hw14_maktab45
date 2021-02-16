// ------------------------------
// -------- requires -----------
const express = require('express');
const SinginUser = express();
const path = require('path');
const bodyParser = require('body-parser')
const checkUser = require('../tools/checkSinginUser')
const fs = require('fs');
const { send } = require('process');

// SinginUser.use("/public", express.static('public'))

// SinginUser.get('/', (req, res) => {
//     res.render('pages/SinginUser')
// })
SinginUser.post('/', (req, res, next) => {
    console.log("data")
    req.on('data', function(data) {
        console.log(JSON.parse(data));
        let UserInfo = JSON.parse(data)
        let check = checkUser(UserInfo)
        console.log(check);
        send(check)
    })

    function send(check) {
        if (check == 200) {
            res.status("200")
            next(),
                res.end();
        } else if (check == 400) {
            res.status("400")
            res.end();
        }
    }

})
SinginUser.post('/', (req, res) => {
    console.log("1111111111");
    res.render('pages/profile')
})

module.exports = SinginUser;