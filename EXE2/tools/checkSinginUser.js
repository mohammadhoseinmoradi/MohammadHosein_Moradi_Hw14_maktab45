const fs = require('fs');

function checkSinginUser(UserInfo) {
    // let UserInfo = JSON.parse(a)
    console.log(UserInfo);
    let AllUsers = (JSON.parse(fs.readFileSync("./tools/UserData.json", "utf8")));
    console.log(UserInfo, AllUsers, "---------------------------");
    let flag = true;
    for (let i = 0; i < AllUsers.length; i++) {
        if (AllUsers[i].username == UserInfo.username) {
            flag = false;
        }
    }
    if (!flag) {
        return "400"
    } else {
        AllUsers.push(UserInfo)
        console.log(AllUsers);
        let data = JSON.stringify(AllUsers)
        fs.writeFile("./tools/UserData.json", data, function(err) {
            if (err) return "400"
            console.log("seved");
        })
        return "200"
    }


}


module.exports = checkSinginUser;