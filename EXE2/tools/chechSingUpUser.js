const fs = require('fs');

function checkSingUpUser(UserInfo) {
    // let UserInfo = JSON.parse(a)
    console.log(UserInfo);
    // let User = JSON.parse(UserInfo)
    let AllUsers = (JSON.parse(fs.readFileSync("./tools/UserData.json", "utf8")));
    let flag = true;
    console.log(UserInfo.username, "+++++++++++++++++", UserInfo.password, AllUsers, "---------------------------");
    for (let i = 0; i < AllUsers.length; i++) {
        if (UserInfo.username == AllUsers[i].username) {
            if (UserInfo.password == AllUsers[i].password) {
                flag = false;
            }
        }
    }
    if (flag) {
        return "400"
    } else {
        return "200"
    }

}


module.exports = checkSingUpUser;