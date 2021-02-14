// ------------------------------
// -------- requires -----------
const express = require('express');
const search = express();
const path = require('path');
const bodyParser = require('body-parser')
const fs = require('fs');
// ------------------------------------
search.get("/", (req, res) => {
    console.log(req.data)
})

module.exports = search;