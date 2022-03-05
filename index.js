const form = document.querySelector("form")
const name = document.getElementById("name-id")
const email = document.getElementById("email-id")
const password = document.getElementById("password-id")
const password2 = document.getElementById("password2-id")

// always add the event listener to the form instead of submit button
// because at the end of the day this is the button which is being submitted

const showError = (input, message) => {
const formControl = input.parentElement;
formControl.className = "form-control error"
}

const showSuccess = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = "form-control success"

}

form.addEventListener('submit', e => {
    e.preventDefault()
    
})