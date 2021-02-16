const fs = require('fs');

function profile(UserInfo) {
    // let UserInfo = JSON.parse(a)
    console.log(UserInfo, "8888888888888888888888888888888");
    let AllUsers = (JSON.parse(fs.readFileSync("./tools/UserData.json", "utf8")));
    console.log(UserInfo, AllUsers, "---------------------------");
    let allinfo = []
    for (let i = 0; i < AllUsers.length; i++) {
        if (AllUsers[i].username == UserInfo.username) {
            AllUsers[i].isLoggedIn = true;
            allinfo.push(AllUsers[i])
        }
    }
    let data = JSON.stringify(AllUsers)
    fs.writeFile("./tools/UserData.json", data, function(err) {
        if (err) return "400"
        console.log("seved", AllUsers);
    })
    console.log(allinfo, "222222222222222222222222222222")
    return allinfo;

}


module.exports = profile;