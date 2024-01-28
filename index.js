const menu = document.querySelector("#menuBtn");
const headerMobile = document.querySelector(".mobile-header");
const cancel = document.querySelector (".fa-times");


menu.addEventListener("click" , function(){
     headerMobile.style.display ='block'
} );
cancel.addEventListener("click", function(){
 headerMobile.style.display = "none"
 headerMobile.style.backGroundColor = "black"
});
const toggle = document.getElementById('toggleDark');
const body = document.querySelector("body");

toggle.addEventListener('click',function(){
     this.classList.toggle("fa-moon");
     if(this.classList.toggle("fa-sun")){
          body.style.background = "white"
          body.style.color = "black";
          body.style.transition = "2s";
     }else{
          body.style.background = "black"
          body.style.color = "white";
          body.style.transition = "2s";
     };
   
})