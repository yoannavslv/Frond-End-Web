function register(username, email, password){
    window.auth.register(email.value, password.value, (isDone, errCode, msg) => {
        if(isDone){
            location.replace("./posts.html")
        }
        else {
            alert(msg);
        }
    })
}

var submButton = document.getElementsById("btn");
submButton.addEventListener("click", validData);

function validData() {
    var error = document.getElementById("errors");
    var validEmail = document.getElementsByName("text")[0];

    var validPassword = document.getElementsByName("password")[0];
    var username = document.getElementsByName("username")[0];

    if(!validEmail.value){
        error.textContent = "Email is mandatory!";
        return;
    }

    if(!validEmail.value.includes("@")){
        error.textContent = "Email should have @!";
        return;
    }

    if(validPassword.value.length < 6){
        error.textContent = "Password should contain at least 6 symbols long.";
        return;
    }

    if(!validPassword.value.match(/[A-Z]/)) {
        error.textContent = "Password must contain at least one capital letter!";
        return;
    }

    if(!validPassword.value.match(/\d/)) {
        error.textContent = "Password must contain at least one digit!";
        return;
    }

    if(!validPassword.value.match(/[!@#$%^&])/)){
        error.textContent = "Password must contain at least one specia character from the list: !@#$%^&";
        return;
    }

    if(validEmail.value.length < 5){
        error.textContent = "Email must be at least5 symbols long.";
        return;
    }

    var startOfDomain = validEmail.value.lastInedxOf("@");
    var indexDot = validEmail.value.lastInedxOf(".");

    if(indexDot <= startOfDomain || indexDot === -1){
        error.textContent = "Email must contains . in domain!";
        return;
    }

    if(username === undefined || username === null){
        alert("You have successfully registrated!");
        register(email,password);
    }
}

