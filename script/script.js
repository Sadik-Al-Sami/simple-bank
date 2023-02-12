//* declaring variables
const logInButton = document.getElementById("btn-submit");
const getEmail = document.getElementById("user-email");
const getPassword = document.getElementById("user-password");
let emailErrMsg = document.getElementById('emailMsg');
let passwordErrMsg = document.getElementById('pswMsg');

// * Login Function Created
function userLogin() {
    const userEmail = getEmail.value;
    const userPassword = getPassword.value;

    if (userEmail == '') {
        emailErrMsg.innerText = 'Please Fill The Email*';
    }
    else if (!isNaN(userEmail)) {
        emailErrMsg.innerText = 'Only Characters are allowed*';
    }
    else {
        emailErrMsg.innerText = '';
    }

    if (userPassword === '') {
        passwordErrMsg.innerText = 'Enter the password please!*';
    } 
    else {
        passwordErrMsg.innerText = '';
    }

    console.log(userEmail);
    console.log(userPassword);
    if (userEmail === "user@email.com" && userPassword === "userpassword") {
        console.log("Valid email and password");
        window.location.href = "/bank.html"
    }
    else {
        console.log("Invalid email and password");
        alert("invalid email or password")
    }
}


if (logInButton) {
    logInButton.addEventListener('click', userLogin);
}