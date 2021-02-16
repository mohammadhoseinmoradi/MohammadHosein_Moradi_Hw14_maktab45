// ------------------------------
// -------- requires -----------
const express = require('express');
const SingUpUser = express();
const path = require('path');
const bodyParser = require('body-parser')
const checkUser = require('../tools/chechSingUpUser')
const fs = require('fs');
const { send } = require('process');

SingUpUser.use("/public", express.static('public'))

// SingUpUser.get('/', (req, res) => {
//     res.render('pages/SingUpUser')
// })
SingUpUser.post('/', (req, res) => {
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
                res.render("pages/profile")
            } else if (check == 400) {
                res.status("400")
                res.end();
            }
        }

    })
    // SingUpUser.get('/:id', (req, res) => {
    //     console.log(req.params.id);
    //     // let data = checkUser(req.params.id)
    //     res.render('pages/profile')
    // })

module.exports = SingUpUser;