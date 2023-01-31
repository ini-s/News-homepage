const menu = document.querySelector(".menu")
const list = document.querySelector("ul")
const overlay = document.querySelector(".overlay")
const openMenu = document.querySelector(".open")
const closeMenu = document.querySelector(".close")

openMenu.addEventListener("click", () => {
    list.classList.add("active")
    overlay.classList.add("active")
    openMenu.classList.add("inactive")
    closeMenu.classList.add("active")
})

closeMenu.addEventListener("click", ()=>{
    // alert("hello")
    list.classList.remove("active")
    overlay.classList.remove("active")
    openMenu.classList.remove("inactive")
    closeMenu.classList.remove("active")
})