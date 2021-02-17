const fs = require('fs');

function logout(UserInfo) {
    // let UserInfo = JSON.parse(a)


    console.log(UserInfo, "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    let AllUsers = (JSON.parse(fs.readFileSync("./tools/UserData.json", "utf8")));
    console.log(UserInfo, AllUsers, "---------------------------");
    console.log(typeof(UserInfo), typeof(AllUsers[0].username));
    let allinfo = []
    for (let i = 0; i < AllUsers.length; i++) {

        if (AllUsers[i].username == UserInfo.username) {
            console.log(AllUsers[i].username, UserInfo.username, AllUsers[i].isLoggedIn);
            if (AllUsers[i].isLoggedIn == true) {
                console.log(AllUsers[i], "'''''''''''''''''''''''''''''''''");
                AllUsers[i].isLoggedIn = false
                console.log(AllUsers[i], "'''''''''''''''''''''''''''''''''");
                allinfo.push(AllUsers[i])
            }
        }
    }
    let data = JSON.stringify(AllUsers)
    fs.writeFile("./tools/UserData.json", data, function(err) {
        if (err) return "400"
        console.log("seved");
    })
    console.log(allinfo, "222222222222222222222222222222")
    return allinfo;

}


module.exports = logout;