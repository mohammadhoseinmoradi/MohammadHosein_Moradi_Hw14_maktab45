// ------------------------------
// -------- requires -----------
const express = require('express');
const search = express();
const path = require('path');
const bodyParser = require('body-parser')
const fs = require('fs');
const Search = require('../tools/search')
const Meno = require('../tools/Meno');
let AllData = JSON.parse(fs.readFileSync("./tools/file.json", 'utf-8'))

// ------------------------------------

search.get("/:id", (req, res) => {
    console.log(req.params.id);

    let data = req.params.id
    var kala = Search(AllData, data)
    console.log("ddddddddddddddddd");
    console.log(kala.length, "000000000000000000");
    if (kala.length == 0) {
        res.render("pages/home", { AllData })
    } else {
        res.render("pages/product", { kala })
    }

})
search.get("/product/:id", Meno, (req, res) => {
    console.log(req.params.id);
})
module.exports = search;