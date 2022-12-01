/* JavaScript Code taken from Web Dev Developed tutorial as linked in README.md */

const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("nav_list")[0]

toggleButton.addEventListener("click" , ()  => {
    navbarLinks.classList.toggle("active")
})