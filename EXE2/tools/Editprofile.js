const fs = require('fs');

function Editprofile(UserInfo) {

    let AllUsers = (JSON.parse(fs.readFileSync("./tools/UserData.json", "utf8")));
    let flag = true;
    if (UserInfo.username == UserInfo.usernamebefor[0]) {
        for (let i = 0; i < AllUsers.length; i++) {
            if (UserInfo.username == AllUsers[i].username) {
                AllUsers[i].email = UserInfo.email;
                if (AllUsers[i].password == UserInfo.password) {
                    AllUsers[i].password = UserInfo.password;
                    AllUsers[i].isLoggedIn = false;
                } else if (AllUsers[i].password != UserInfo.password) {
                    AllUsers[i].password = UserInfo.password;

                }
                AllUsers[i].gender = UserInfo.gender;
                flag = false;
            }

        }

    } else {
        let exited = false;
        for (let i = 0; i < AllUsers.length; i++) {
            if (AllUsers[i].username == UserInfo.username) {
                exited = true;
                // return "400";
            }
        }
        if (!exited) {
            for (let i = 0; i < AllUsers.length; i++) {
                if (UserInfo.usernamebefor == AllUsers[i].username) {
                    AllUsers[i].username = UserInfo.username;
                    AllUsers[i].email = UserInfo.email;
                    if (AllUsers[i].password == UserInfo.password) {
                        AllUsers[i].password = UserInfo.password;
                        AllUsers[i].isLoggedIn = false;
                    } else if (AllUsers[i].password != UserInfo.password) {
                        AllUsers[i].password = UserInfo.password;

                    }
                    AllUsers[i].gender = UserInfo.gender;
                    flag = false;
                }

            }
            // return "200"
        }
    }
    if (flag) {
        return "400"
    } else {
        let data = JSON.stringify(AllUsers)
        fs.writeFile("./tools/UserData.json", data, function(err) {
            if (err) return "400"
            console.log("seved");
        })
        console.log(AllUsers, "cccccccccccccccccccccccccccccccccccccccccccccccc");
        return "200"
    }
}

module.exports = Editprofile;