const preloader =document.getElementById("preloader");

window.addEventListener("load",function(){
    this.setTimeout(function(){
        preloader.style.display="none"
    },2000)
})

const login=document.querySelector(".login");
const openLogin=document.querySelector(".contact-section");


login.addEventListener("click",function(){
   openLogin.classList.add("open-login")
    
})