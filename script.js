const preloader =document.getElementById("preloader");

window.addEventListener("load",function(){
    this.setTimeout(function(){
        preloader.style.display="none"
    },2000)
})

const login=document.querySelector(".login");
const openLogin=document.querySelector(".contact-section");
const close=document.querySelector(".fa-xmark");

login.addEventListener("click",function(){
   openLogin.classList.add("open-login")
   document.body.classList.add('no-scroll');
})

close.addEventListener("click",function(){
    openLogin.classList.remove("open-login")
    document.body.classList.remove('no-scroll');
 })