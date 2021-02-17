const fs = require('fs');

function logout(UserInfo) {
    // let UserInfo = JSON.parse(a)



    let AllUsers = (JSON.parse(fs.readFileSync("./tools/UserData.json", "utf8")));

    let allinfo = []
    for (let i = 0; i < AllUsers.length; i++) {

        if (AllUsers[i].username == UserInfo.username) {

            if (AllUsers[i].isLoggedIn == true) {

                AllUsers[i].isLoggedIn = false

                allinfo.push(AllUsers[i])
            }
        }
    }
    let data = JSON.stringify(AllUsers)
    fs.writeFile("./tools/UserData.json", data, function(err) {
        if (err) return "400"
        console.log("seved");
    })

    return allinfo;

}


module.exports = logout;