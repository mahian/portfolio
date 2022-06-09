let hamicon = document.getElementById("ham_icon");
hamicon.addEventListener("click", ()=>{
    let menubar = document.querySelector(".nav_menu");
    if (menubar.style.height === "0rem") {
      menubar.style.height = "22rem";
      } else {
        menubar.style.height = "0rem";
      }
});

let themebtn = document.querySelector(".theme_btn");
let btnIcon = document.querySelector(".theme_btn i");
let theme = document.querySelector("body");
let themeOut = document.getElementById("services");




themebtn.addEventListener("click", ()=>{

 if(btnIcon.style.top != "27px"){
  btnIcon.style.top = "27px";
  theme.style.background = "black";
  theme.style.color = "white";

  themeOut.style.background = "black";
  themeOut.style.color = "white";
 }
 else{
  btnIcon.style.top = "0px";

  theme.style.background = "white";
  theme.style.color = "black";

  themeOut.style.background = "#f5f5f5";
  themeOut.style.color = "black";
 }

});

window.addEventListener("scroll", ()=>{
  let nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 1);
});