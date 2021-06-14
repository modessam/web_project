window.onload = pageLoad;

function pageLoad() {
    var contactForm = document.getElementById("contactForm");
    contactForm.onsubmit = validate;
}

function validate() {
    var check = true;
    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var mail = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("pass").value;


    if (first == "") {
        alert('first name is required !');
        check = false;
    }
    if (last == "" && check == true) {
        alert('last name is required !');
        check = false;
    }
    if (mail == "" && check == true) {
        alert('E-mail is required !');
        check = false;
    }

    if (password == "" && check == true) {
        alert('Password is required !');
        check = false;
    }

    if (phone == "" && check == true) {

        alert('Phone is required !');
        check = false;
    }


    if (!first.match(/^[A-Za-z ]+$/) && check == true) { //space------------------------------
        alert("only letters or space allowed in first name field");
        check = false;
    }
    if (!last.match(/^[A-Za-z ]+$/) && check == true) { //space------------------------------
        alert("only letters or space allowed in last name field");
        check = false;
    }
    if (!mail.match(/^[a-zA-z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/) && check == true) {
        alert("Email is Not Valid");
        check = false;
    }

    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8}$/) && check == true) {
        alert("Password is Not Valid, It must contain 8 characters: 1 uppercase, one lowercase, one number and one special character at least");
        check = false;
    }

    if (!phone.match(/^[0-9]{11}$/) && check == true) {

        alert("Phone is not valid");
        check = false;
    }

    return check;
}