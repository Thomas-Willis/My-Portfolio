var moonIcon = document.getElementById("moon-icon");

moonIcon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        moonIcon.src = "images/sun.png";
    }
    else{
        moonIcon.src = "images/moon.png";
    }
    
}