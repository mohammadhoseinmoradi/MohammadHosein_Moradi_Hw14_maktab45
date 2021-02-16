// ------------------------------------------------
// ---------------- require -----------------------
// ------------------------------------------------
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const fs = require('fs');
const Api = require('./routes/Api')
const public = require("./routes/public")
const SinginUser = require("./routes/SinginUser")
const SingUpUser = require("./routes/SingUpUser")
const profile = require("./routes/profile")
    // const Product = require("./routes/Product")
    // const search = require("./routes/search")
app.use("/public", express.static('public'))

// -------------------------------------------------

// -------------------------------------------------
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
    // app.get("/", (req, res) => {
    //     res.sendFile(path.join(__dirname, '/public/html/login.html'))
    // })

// --------------------------------------------------
// --------------- routers --------------------------
app.use("/", Api);
app.use("/public", public);
app.use("/SinginUser", SinginUser);
app.use("/SingUpUser", SingUpUser)
app.use("/profile", profile)
    // app.use("/product", Product)
    // app.use("/search", search)
    // -------------------------------------------------
    // --------------- listen server -------------------
app.listen(5005, () => {
    console.log(" the Server Has Been Run In Port 5005 !!");
})