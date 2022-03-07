const form = document.getElementById("form")
const username = document.getElementById("name-id")
const email = document.getElementById("email-id")
const password = document.getElementById("password-id")
const password2 = document.getElementById("password2-id")

// always add the event listener to the form instead of submit button
// because at the end of the day this is the form which is being submitted

// Show Error message
const showError = (input, message) => {
// we want to show and attached the error class to the parent div
const formControl = input.parentElement;
// we have a error class in the CSS attached to form-control
// here we say if the error class is attached to form-control then show error color
formControl.className = "form-control error"
const small = formControl.querySelector('small')
small.innerText=message
}

// Show Success message
const showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}

// Check required 
const checkRequired = (inputArr) => {
    inputArr.forEach((input) => {
        console.log(input)
    })
}





// Event Listeners
form.addEventListener('submit', e => {
    e.preventDefault()
    checkRequired([username, email,password,password2 ])
    
})