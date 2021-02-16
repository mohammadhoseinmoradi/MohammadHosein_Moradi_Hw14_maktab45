// ------------------------------
// -------- requires -----------
const express = require('express');
const public = express();
const path = require('path');
const bodyParser = require('body-parser')
const fs = require('fs');
// ------------------------------------
public.get("/css/login.css", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/css/login.css'))
})
public.get("/css/profile.css", (req, res) => {
        res.sendFile(path.join(__dirname, '../public/css/profile.css'))
    })
    // public.get("/Css/home.css", (req, res) => {
    //     res.sendFile(path.join(__dirname, '../public/Css/home.css'))
    // })
    // public.get("/Css/body.css", (req, res) => {
    //     res.sendFile(path.join(__dirname, '../public/Css/body.css'))
    // })
    // public.get("/Css/product.css", (req, res) => {
    //         res.sendFile(path.join(__dirname, '../public/Css/product.css'))
    //     })
    // ------------------------------------------------------------------------------------
public.get("/js/login.js", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/js/login.js'))
})
public.get("/js/profile.js", (req, res) => {
        res.sendFile(path.join(__dirname, '../public/js/profile.js'))
    })
    // public.get("/Js/body.js", (req, res) => {
    //     res.sendFile(path.join(__dirname, '../public/Js/body.Js'))
    // })
    // public.get("/Js/home.js", (req, res) => {
    //     res.sendFile(path.join(__dirname, '../public/Js/home.Js'))
    // })
    // public.get("/Js/product.js", (req, res) => {
    //     res.sendFile(path.join(__dirname, '../public/Js/product.Js'))
    // })


module.exports = public;