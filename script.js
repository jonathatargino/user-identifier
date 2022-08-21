const signUpForm = document.querySelector("#form")
const signUpWindow = document.querySelector("#sign-up")
const welcomeWindow = document.querySelector("#welcome")
const logoutBtn = document.querySelector("#logout")
const welcome = document.querySelector("#welcome-text");
const password = document.querySelector("#password");
const userIcon = document.querySelector(".signUp-icon");
const structure = document.querySelector(".structure");

const identify = () => {
    const name = localStorage.getItem("name");
    if(name){
        welcome.innerHTML = `Seja bem-vindo, ${name}` 
        signUpWindow.style.display = "none";
        welcomeWindow.style.display = "block"
        userIcon.style.display = "none"
        structure.style.gridTemplateAreas = '"img-nav img-nav"';
    } else{
        signUpWindow.style.display = "block";
        welcomeWindow.style.display = "none"
        userIcon.style.display = "block"
        structure.style.gridTemplateAreas = '"img-nav sign-up"';
        
    }
}

signUpForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.querySelector("#name")
    localStorage.setItem("name", nameInput.value)
    
    identify()
    signUpForm.reset()
})

logoutBtn.addEventListener("click", (event) => {
    localStorage.clear()
    identify()
})

identify()