const form = document.querySelector("form");
const small = document.querySelector(".error-small");
const email = document.querySelector(".email");


//ADDS EVENT LISTENER TO FORM WITH A TYPE "SUBMIT", LISTENER PREVENTS DEFAULT SUBMIT ACTION AND STORES EMAIL INPUT INTO VARIABLE
form.addEventListener("submit", event => {
    event.preventDefault();
    const emailVal = email.value;

    //ADDS CLASS TO FORM/SETS DISPLAY "BLOCK" IF EMAIL IS NOT VALID, ELSE REMOVES CLASS AND SETS DISPLAY TO NONE
    if(!validateEmail(emailVal)){
        form.classList.add("error");
        small.style.display = "block";
    } else {
        form.classList.remove("error");
        small.style.display = "none";
    }


    //CHECKS IF EMAIL ENTERED IS VALID
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});