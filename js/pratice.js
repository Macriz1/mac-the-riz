
// javascript validation for error on email input

let inputEmail = document.querySelector('.email');
let errorMessage = document.querySelector('.error');

inputEmail.addEventListener('keyup', cError);

function cError(e){
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(inputEmail.value === ""){
      return console.log('email is empty')
    }if(inputEmail.value.match(pattern)){
        errorMessage.innerHTML='';
        inputEmail.style.borderColor = '#fff'
        return true;
    }errorMessage.innerHTML = 'please check your email';
    errorMessage.style.color = "#ff0000";
    inputEmail.style.borderColor = "#ff0000"
    return false
}