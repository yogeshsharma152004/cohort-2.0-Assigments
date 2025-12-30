let menu = document.querySelector(".micro");
let start = document.querySelector(".start-menu");


menu.addEventListener("click", function () {

start.classList.toggle("active");
  
});


let main = document.querySelector("main");
let rightClick = document.querySelector(".right-click");

main.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  let x = event.clientX;
  let y = event.clientY;

  rightClick.style.top = y + "px";
  rightClick.style.left = x + "px";

  rightClick.style.opacity = "1";
});

document.addEventListener("click", function () {
  rightClick.style.opacity = "0";
  
});

let yt = document.querySelector(".youtube")
let spotify = document.querySelector(".spotify");
let link = document.querySelector(".linked")
let folder = document.querySelector(".folder")
let git = document.querySelector(".github")

yt.addEventListener("click" , function(){
    window.open("https://www.youtube.com/")
})

spotify.addEventListener('click' , function(){
    window.open("https://open.spotify.com/")
})

link.addEventListener('click' , function(){
    window.open("https://www.linkedin.com/in/yogesh-sharma-4367b7388/")
} )

folder.addEventListener("click" , function(){
    window.open("C:\Users\Admin")
})

git.addEventListener("click" , function(){
    window.open("https://github.com/yogeshsharma152004")
} )
