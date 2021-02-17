var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    // ================================================================
let regex = /\w+/gm;
let first_gender_select = $("#selectgender").text();
let genderbefor = first_gender_select.match(regex)
if (genderbefor[2] == "male") {
    $("#rb1").prop("checked", true);
} else if (genderbefor[2] == "female") {
    $("#rb2").prop("checked", true);
}

function SubmitEdit() {
    let username = $("#username").val();
    let email = $("#email").val();
    let password = $("#password").val();
    let male = $("#rb1").prop("checked");
    let female = $("#rb2").prop("checked");
    let first_user_name = $("#firstUserName").text();
    let gender = "gender";
    if (male) {
        gender = "male"
    } else if (female) {
        gender = "female"
    }
    let regex = /\w+/gm;
    let usernamebefor = first_user_name.match(regex)
    console.log(username, email, password, male, female, gender, usernamebefor);
    if (usernamebefor[0] == username) {

    }
    let UserInfo = {
        username: username,
        email: email,
        password: password,
        gender: gender,
        isLoggedIn: false,
        usernamebefor: usernamebefor,
    }
    let Datauser = {
        username: username,
        password: password
    }
    let requestHttp = new XMLHttpRequest();
    requestHttp.onreadystatechange = function() {
        console.log(this.status);
        if (this.readyState == 4 && this.status == 200) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'success',
                text: 'the Sing in is successfully',
                footer: '<a href="/"><button>GO TO MY PROFILE</button></a>',

            })

            let data = JSON.stringify(Datauser)
            window.location.replace(`/profile/${data}`);
        } else if (this.readyState == 4 && this.status == 400) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'The User Name Not valid',
                footer: '<a href>Why do I have this issue?</a>'
            })
        }
    };
    requestHttp.open("POST", "/Editprofile");
    requestHttp.setRequestHeader("Content-type", "application/json");
    requestHttp.send(JSON.stringify(UserInfo));


    // $("#username").on("click", function() {
    //     $("#username").css("border", "none");
    // })
    // $("#email").on("click", function() {
    //     $("#email").css("border", "none");
    // })
    // $("#password").on("click", function() {
    //         $("#password").css("border", "none");
    //     })
    // $("#linkSinging").attr("href", `/SinginUser/${data}`)
}

function logout() {
    let username = $(".logout").attr("id");
    console.log(username);
    let Datauser = {
        username: username,
    }
    let requestHttp = new XMLHttpRequest();
    requestHttp.onreadystatechange = function() {
        console.log(this.status);
        if (this.readyState == 4 && this.status == 200) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'success',
                text: 'the Sing in is successfully',
                footer: '<a href="/"><button>GO TO MY PROFILE</button></a>',

            })

            // let data = JSON.stringify(Datauser)
            window.location.replace(`/`);
        } else if (this.readyState == 4 && this.status == 400) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'The User Name Not valid',
                footer: '<a href>Why do I have this issue?</a>'
            })
            window.location.replace(`/profile/${Datauser}`);
        }
    };
    requestHttp.open("POST", "/logout");
    requestHttp.setRequestHeader("Content-type", "application/json");
    requestHttp.send(JSON.stringify(Datauser));

}