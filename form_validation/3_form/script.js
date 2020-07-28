// Grad the form using DOM method
const form = document.getElementById('form');

// Grab the input boxes using DOM methods
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

// Event Listener

form.addEventListener('submit', function(e){

    e.preventDefault();

    validateInput([username, email, password, confirm-password]);

})

function validateInput(inputArr){
    
    // Make sure each input is completed
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, `${capitalizeFirstLetter(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

function capitalizeFirstLetter(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}



// validate email
function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

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

