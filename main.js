let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river5 = document.getElementById("river5");
let boat6 = document.getElementById("boat6");
let nopel = document.querySelector(".nop");
window.onscroll = function(){
    let val  = scrollY;
    stars.style.left = val + "px";
    moon.style.top = 3 * val + "px";
    mountains3.style.top = 2* val +"px";
    mountains4.style.top = 1.5 * val +"px";
    river5.style.top =  val +"px";
    boat6.style.top = val +"px";
    boat6.style.left = 3*val +"px";
    nopel.style.fontSize = val + "px";
    if (scrollY >= 76) {
    nopel.style.fontSize = 75 + "px";
    nopel.style.position = 'fixed';    
    };
    if (scrollY >= 506) {
    nopel.style.display = 'none';
    }else{
    nopel.style.display = 'block';
    }
    if (scrollY >= 198) {
        document.querySelector(".main").style.background = "linear-gradient(#200016,#0054fa)";
    }else{
        document.querySelector(".main").style.background = "linear-gradient(#200016, #3d3147)";
    }
};
