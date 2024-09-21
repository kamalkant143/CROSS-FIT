const login=document.querySelector(".login");
const openLogin=document.querySelector(".contact-section");
const close=document.querySelector(".close");

//  ******** nav bar open and close *********
const navIteam=document.querySelector(".nav-iteam");
const navLine=document.querySelector(".nav-line");
const closeNavBar=document.querySelector(".close-navbar");



//  ******** preloader open and close *********
const preloader =document.getElementById("preloader");

window.addEventListener("load",function(){
    this.setTimeout(function(){
        preloader.style.display="none"
    },2000)
})



//  ******** login page open and close *********
login.addEventListener("click",function(){
   openLogin.classList.add("open-login")
   document.body.classList.add('no-scroll');
})

close.addEventListener("click",function(){
    openLogin.classList.remove("open-login")
    document.body.classList.remove('no-scroll');
 })



//  ******** nav bar open and close *********
 navLine.addEventListener("click",()=>{
    navIteam.classList.add("open-nav-bar")
})
closeNavBar.addEventListener("click",()=>{
    navIteam.classList.remove("open-nav-bar")
})