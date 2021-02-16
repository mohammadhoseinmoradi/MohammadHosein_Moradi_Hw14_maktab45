const fs = require('fs');

function profile(UserInfo) {
    // let UserInfo = JSON.parse(a)
    console.log(UserInfo, "8888888888888888888888888888888");
    let AllUsers = (JSON.parse(fs.readFileSync("./tools/UserData.json", "utf8")));
    console.log(UserInfo, AllUsers, "---------------------------");
    let allinfo = []
    for (let i = 0; i < AllUsers.length; i++) {
        if (AllUsers[i].username == UserInfo.username) {
            allinfo.push(AllUsers[i])
        }
    }
    console.log(allinfo, "222222222222222222222222222222")
    return allinfo;

}


module.exports = profile;