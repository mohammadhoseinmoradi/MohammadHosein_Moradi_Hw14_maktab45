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

    // $.post("/SinginUser", {
    //         username: username,
    //         email: email,
    //         password: password,
    //         gender: gender,
    //         isLoggedIn: false,
    //     },
    //     function(data, status) {
    //         console.log(status, "0000000000000000000000000000000000000000");
    //         if (status) {
    //             alert("sucsecc")
    //         } else {
    //             alert("norfound")
    //         }
    //     });

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
                text: 'The User Name Not Valid',
                footer: '<a href>Why do I have this issue?</a>'
            })
        }
    };
    requestHttp.open("POST", "/SinginUser");
    requestHttp.setRequestHeader("Content-type", "application/json");
    requestHttp.send(JSON.stringify(UserInfo));

    // $("#linkSinging").attr("href", `/SinginUser/${data}`)
}