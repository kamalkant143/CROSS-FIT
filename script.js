const preloader =document.getElementById("preloader");

window.addEventListener("load",function(){
    this.setTimeout(function(){
        preloader.style.display="none"
    },2000)
})