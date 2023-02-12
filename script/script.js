//* declaring variables
const logInButton = document.getElementById("btn-submit");
const getEmail = document.getElementById("user-email");
const getPassword = document.getElementById("user-password");

// * Login Function Created
function userLogin(){
    const userEmail = getEmail.value;
    const userPassword = getPassword.value;
    const url = "/bank.html";

    console.log(userEmail);
    console.log(userPassword);
    if (userEmail === "user@email.com" && userPassword === "userpassword"){
        console.log("Valid email and password");
        window.location.assign(url);
    }
    else {
        console.log("Invalid email and password");
        alert("invalid email or password")
    }
}

// ! if the login button exists then we keep the code for execution
if (logInButton){
    logInButton.addEventListener('click', userLogin);
}