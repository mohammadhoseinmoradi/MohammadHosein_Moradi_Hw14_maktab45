// ------------------------------
// -------- requires -----------
const express = require('express');
const product = express();
const path = require('path');
const bodyParser = require('body-parser')
const fs = require('fs');
const Meno = require('../tools/Meno');
product.use("/public", express.static('public'))
    // ---------------------------------------------------------

product.get("/:id", Meno, (req, res) => {

    res.render('pages/product')

})











// ----------------------------------------------------------
module.exports = product;