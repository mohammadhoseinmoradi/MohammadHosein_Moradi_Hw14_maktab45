const fs = require('fs');

function profile(UserInfo) {

    let AllUsers = (JSON.parse(fs.readFileSync("./tools/UserData.json", "utf8")));

    let allinfo = []
    for (let i = 0; i < AllUsers.length; i++) {
        if (AllUsers[i].username == UserInfo.username) {
            if (AllUsers[i].isLoggedIn == false) {
                AllUsers[i].isLoggedIn = true;
            } else if (AllUsers[i].isLoggedIn == true) {
                AllUsers[i].isLoggedIn = false;
            }

            allinfo.push(AllUsers[i])
        }
    }
    let data = JSON.stringify(AllUsers)
    fs.writeFile("./tools/UserData.json", data, function(err) {
        if (err) return "400"
        console.log("seved");
    })

    return allinfo;

}


module.exports = profile;