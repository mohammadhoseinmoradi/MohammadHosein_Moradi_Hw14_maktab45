// ------------------------------
// -------- requires -----------
const express = require('express');
const public = express();
const path = require('path');
const bodyParser = require('body-parser')
const fs = require('fs');
// ------------------------------------
public.get("/Css/Meno.css", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/Css/Meno.css'))
})
public.get("/Css/home.css", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/Css/home.css'))
})
public.get("/Css/body.css", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/Css/body.css'))
})
public.get("/Css/product.css", (req, res) => {
        res.sendFile(path.join(__dirname, '../public/Css/product.css'))
    })
    // ------------------------------------------------------------------------------------
public.get("/Js/Meno.js", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/Js/Meno.Js'))
})
public.get("/Js/body.js", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/Js/body.Js'))
})
public.get("/Js/home.js", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/Js/home.Js'))
})
public.get("/Js/product.js", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/Js/product.Js'))
})


module.exports = public;