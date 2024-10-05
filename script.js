function validateForm(event){
    event.preventDefault();
    
    const name=document.getElementById("name").value;    
    const email=document.getElementById("email").value;    
    const password=document.getElementById("password").value;    
    const confirmPassword=document.getElementById("ConfirmPassword").value;    
    const error=document.getElementById("para");

    if(name.trim()==="" || email.trim()==="" || password.trim()==="" || confirmPassword.trim()===""){
        error.innerHTML="All fields are required";
        return;
    }
    if(password!==confirmPassword){
        error.innerHTML="Password do not match";
        return;
    }
    else{
        if(!isValidLength(password)){
            error.innerHTML="Password length must be 8 to 12 characters";
            return;
        }
        if(!(isContainAlpha(password) && isContainDigit(password) && isSpecialChar(password))){
            error.innerHTML="Password must contains one alphabet,digit ans special characters";
            return;
        }
    }
    
    document.getElementById("RForm").onsubmit();
}

function isValidLength(pwd){
    if(pwd.length>=8 && pwd.length<=12)
        return true;
    return false;
}

function isContainDigit(pwd){
    for(let i=0;i<pwd.length;i++){
        if(pwd.charAt(i)>='0' && pwd.charAt(i)<='9')
            return true;
    }
    return false;
}
function isContainAlpha(pwd){
    for(let i=0;i<pwd.length;i++){
        if(pwd.charAt(i)>='a' && pwd.charAt(i)<='z' || pwd.charAt(i)>='A' && pwd.charAt(i)<='Z')
            return true;
    }
    return false;
}
function isSpecialChar(){
    for(let i=0;i<pwd.length;i++){
        if(pwd.charAt(i)>='a' && pwd.charAt(i)<='z' || pwd.charAt(i)>='A' && pwd.charAt(i)<='Z' ||pwd.charAt(i)>='0' && pwd.charAt(i)<='9'){

        }
        else{
            return true;
        }
    }
    return false;
}