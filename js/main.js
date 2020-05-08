const form = document.querySelector("form");
const small = document.querySelector(".error-small");
const email = document.querySelector(".email");

form.addEventListener("submit", event => {
    event.preventDefault();
    const emailVal = email.value;

    if(!validateEmail(emailVal)){
        form.classList.add("error");
        small.style.display = "block";
    } else {
        form.classList.remove("error");
        small.style.display = "none";
    }


    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});