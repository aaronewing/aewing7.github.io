function checkEmail(){ //this actually checks email and password not just email
    const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
    const regexpass = new RegExp(/[0-9a-zA-Z]{6,}/)
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let form = document.getElementById('logform');
    if(regex.test(email) && regexpass.test(password)){
        form.action = 'home.html';
    } 

    else if((regex.test(email) && regexpass.test(password)) == false){
        document.getElementById("invalid").style.display = "block";
        document.getElementById("invalidpass").style.display = "block";
    }
    
    else if(regex.test(email) == false){
        document.getElementById("invalid").style.display = "block";
        
    }

    else if(regexpass.test(password) == false){
        document.getElementById("invalidpass").style.display = "block";

    }

    if(regex.test(email) == true){
        document.getElementById("invalid").style.display = "none";
    }

    if(regexpass.test(password) == true){
        document.getElementById("invalidpass").style.display = "none";
    }
}

function openForm(){
    document.getElementById("myForm").style.display = "block";
    document.getElementById("myVideo").style.filter = "blur(10px)";
    document.getElementById("content").style.filter = "blur(10px)";
}

function openFormUp(){
    document.getElementById("myFormsignup").style.display = "block";
    document.getElementById("myVideo").style.filter = "blur(10px)";
    document.getElementById("content").style.filter = "blur(10px)";
}

function closeForm(){
    document.getElementById("myForm").style.display = "none";
    document.getElementById("myVideo").style.filter = "blur(0)";
    document.getElementById("content").style.filter = "blur(0)";
    document.getElementById("invalid").style.display = "none";
    document.getElementById("logform").reset();
}
function closeFormUp(){
    document.getElementById("myFormsignup").style.display = "none";
    document.getElementById("myVideo").style.filter = "blur(0)";
    document.getElementById("content").style.filter = "blur(0)";
    document.getElementById("invalid").style.display = "none";
    document.getElementById("upform").reset();
    document.getElementById("invalidemail").style.display = "none";
    document.getElementById("invalidpass2").style.display = "none";
    document.getElementById("nocountry").style.display = "none";
}

function checkEmailUp(){ //this actually checks email and password not just email
    const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
    const regexpass = new RegExp(/[0-9a-zA-Z]{6,}/)
    let email = document.getElementById('newemail').value;
    let password = document.getElementById('newpassword').value;
    let password2 = document.getElementById('checkpassword').value;
    let country = getSelectedText('Country');
    console.log(country);
    let form = document.getElementById('upform');
    if(regex.test(email) && regexpass.test(password) && (password == password2) && country != "Select Country"){
        form.action = 'home.html';
    } 

    if(regex.test(email) == true){
        document.getElementById("invalidemail").style.display = "none";
    } else{
        document.getElementById("invalidemail").style.display = "block";
    }

    if(regexpass.test(password) == true){
        document.getElementById("invalidpass2").style.display = "none";
    } else{
        document.getElementById("invalidpass2").style.display = "block";
    }

    if(password == password2){
        document.getElementById("notmatch").style.display = "none";
    } else{
        document.getElementById("notmatch").style.display = "block";
    }

    if(country != "Select Country"){
        document.getElementById("nocountry").style.display = "none";
    } else{
        document.getElementById("nocountry").style.display = "block";
    }

    function getSelectedText(elementId) {
        var elt = document.getElementById(elementId);
    
        if (elt.selectedIndex == -1)
            return null;
    
        return elt.options[elt.selectedIndex].text;
    }
    
}