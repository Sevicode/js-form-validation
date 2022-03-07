const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")

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

// Check required function
const checkRequired = (inputArr) => {
    inputArr.forEach((input) => {
        if(input.value.length === 0) {
            // if section also can be written if(input.value.trim()==='')
            // Also, ${input.id.charAt(0).toUpperCase()+input.id.slice(1)} can be written as a separate function
            showError(input, `${input.id.charAt(0).toUpperCase()+input.id.slice(1)} is required`)
        }else{
            showSuccess(input)
        }
    })
}


// Check length function
const checkLength = (input, min, max) => {
if(input.value.length < min) {
    showError(input, `${input.id.charAt(0).toUpperCase()+input.id.slice(1)} must be at least ${min} characters`)
}else if(input.value.length > max){
    showError(input, `${input.id.charAt(0).toUpperCase()+input.id.slice(1)} must be less than ${max} characters`)
}else{
    showSuccess(input)
}
}





// Event Listeners
form.addEventListener('submit', e => {
    e.preventDefault()
    checkRequired([username, email,password,password2 ])
    checkLength(username, 5, 8)
    checkLength(password, 6, 30)
    
})