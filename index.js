const passwordInput = document.querySelector('#password')
const confirmPasswordInput = document.querySelector("#confirm_password")
const passNoMatchTxt = document.querySelector(".pass-nomatch")
const createAccountBtn = document.querySelector(".signup-btn")

createAccountBtn.addEventListener("click", (e) => {
    if (passwordInput.value !== confirmPasswordInput.value) {
        passwordInput.classList.add("error")
        confirmPasswordInput.classList.add("error")
        passNoMatchTxt.classList.remove("hidden")

        e.preventDefault()
    } else {
        passwordInput.classList.remove("error")
        confirmPasswordInput.classList.remove("error")
        passNoMatchTxt.classList.add("hidden")
    }
})