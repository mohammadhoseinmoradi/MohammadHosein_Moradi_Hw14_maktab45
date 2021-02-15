const fs = require('fs');


function Meno(req, res, next) {
    let data = req.params.id;
    let id = data[7];
    let AllData = JSON.parse(fs.readFileSync("./tools/file.json", "utf8"));
    for (let i = 0; i < AllData.length; i++) {
        if (id == AllData[i].id) {
            var kala = [];
            kala.push(AllData[i]);
            console.log(kala)

        }
    }
    res.render("pages/product", { kala })
        // console.log(AllData[0].id, "--------------------------------------", id);
    next();
}





module.exports = Meno