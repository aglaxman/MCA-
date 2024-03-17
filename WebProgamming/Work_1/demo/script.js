function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    var phonePattern = /^\d{10}$/;

    if (username == "") {
        alert("Username cannot be empty");
        return false;
    }
    if (password == "") {
        alert("Password cannot be empty");
        return false;
    }
    if (email == "") {
        alert("Email cannot be empty");
        return false;
    }
    if (!phonePattern.test(phone)) {
        alert("Phone number must be 10 digits");
        return false;
    }

    return true;
}
