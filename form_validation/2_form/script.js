const form = document.getElementById('form');

const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');


// ------ Event Listeners ----------
form.addEventListener('submit', function(e){
    // prevents from actually submitting the form
    e.preventDefault();

    
    if(username.value === ""){
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }


    if(!isValidEmail(email.value)){
        showError(email, 'email is not valid');
    }
    // if(email.value === ""){
    //     showError(email, 'Email is required');
    // // } else if (!isValidEmail(email.value)){
    // //     showError(email, 'Email is not valid.')
    // } else {
    //     showSuccess(email);
    // }

    if(password.value === ""){
        showError(password, 'Password is required');
    } else {
        showSuccess(password);
    }

    if(confirmPassword.value === ""){
        showError(confirmPassword, 'Please confirm password');
    } else {
        showSuccess(confirmPassword);
    }



});




// ------ Functions --------

// show input error message if field is blank
function showError(input, message){

    // access 
    const formControl = input.parentElement;

    // overwrite class
    formControl.className = 'form-control error';

    // grab error message <small> using DOM 
    const small = formControl.querySelector('small');
    
    // use DOM method to change text, if there is an error
    small.innerText = message;
}



function showSuccess (input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}


// validate email
function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}