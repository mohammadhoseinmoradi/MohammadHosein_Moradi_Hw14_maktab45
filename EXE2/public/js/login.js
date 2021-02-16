const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");


});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
// ----------------------------------
function SingUp() {
    let username = $("#username").val();
    let email = $("#email").val();
    let password = $("#password").val();
    let male = $("#rb1").prop("checked");
    let female = $("#rb2").prop("checked");
    let gender = "gender";
    if (male) {
        gender = "male"
    } else if (female) {
        gender = "female"
    }
    if (username == "" && email == "" && password == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: ' please pull inputs ',
            footer: '<a href>Why do I have this issue?</a>'

        })
        $("#username").css("border", "2px solid red");
        $("#email").css("border", "2px solid red");
        $("#password").css("border", "2px solid red");

    } else if (username == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'please check user name',
            footer: '<a href>Why do I have this issue?</a>'
        })
        $("#username").css("border", "2px solid red");
    } else if (email == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'please check email address',
            footer: '<a href>Why do I have this issue?</a>'
        })
        $("#email").css("border", "2px solid red");
        $("#password").css("border", "2px solid red");
    } else if (password == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'The check password',
            footer: '<a href>Why do I have this issue?</a>'
        })
        $("#password").css("border", "2px solid red");
    } else if (gender == "gender") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'The please select gender',
            footer: '<a href>Why do I have this issue?</a>'
        })
    } else {
        let UserInfo = {
            username: username,
            email: email,
            password: password,
            gender: gender,
            isLoggedIn: false,
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
            } else if (this.readyState == 4 && this.status == 400) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'The User Name Not found',
                    footer: '<a href>Why do I have this issue?</a>'
                })
            }
        };
        requestHttp.open("POST", "/SinginUser");
        requestHttp.setRequestHeader("Content-type", "application/json");
        requestHttp.send(JSON.stringify(UserInfo));

    }
    $("#username").on("click", function() {
        $("#username").css("border", "none");
    })
    $("#email").on("click", function() {
        $("#email").css("border", "none");
    })
    $("#password").on("click", function() {
            $("#password").css("border", "none");
        })
        // $("#linkSinging").attr("href", `/SinginUser/${data}`)
}

function btnSingIn() {
    let username = $("#UserNameSingIn").val()
    let password = $("#passwordSingin").val()

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
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
                // window.location.replace(`/profile/${Datauser}`);
        } else if (this.readyState == 4 && this.status == 400) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'The User Name Not Valid',
                footer: '<a href>Why do I have this issue?</a>'
            })
        }
    };
    requestHttp.open("POST", "/SingUpUser");
    requestHttp.setRequestHeader("Content-type", "application/json");
    requestHttp.send(JSON.stringify(Datauser));
    // $("#linkSingIn").attr("href", `/SingUpUser/${data}`)
}

function btnprof(Datauser) {

}