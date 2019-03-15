function validator(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var reason = document.getElementById("reason").value;
    var name_err = "";
    var name_success = "";
    var email_err = "";
    var email_success = "";
    var phone_err = "";
    var phone_success = "";
    var reason_err = "";
    var reason_success = "";
    if(name == ""){
        name_err = "Name is required"
    }
    else{
        name_success = "Thank you"
    }
    if(email == ""){
        email_err = "Email is required"
    }
    else{
        email_success = "Thank you"
    }
    if(phone == ""){
        phone_err = "Phone number is required"
    }
    else if(phone.length != 10){
        phone_err = "Phone number is invalid(no () or -)"
    }
    else{
        phone_success = "Thank you"
    }
    if(reason == ""){
        reason_err = "Reason for inquiry is required"
    }
    else{
        reason_success = "Thank you"
    }
    document.getElementById("name_err").innerHTML = name_err
    document.getElementById("name_success").innerHTML = name_success
    document.getElementById("email_err").innerHTML = email_err
    document.getElementById("email_success").innerHTML = email_success
    document.getElementById("phone_err").innerHTML = phone_err
    document.getElementById("phone_success").innerHTML = phone_success
    document.getElementById("reason_err").innerHTML = reason_err
    document.getElementById("reason_success").innerHTML = reason_success
}