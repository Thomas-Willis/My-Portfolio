const sushiButton = document.getElementById("sushi-button")

sushiButton.addEventListener("click", function(){
    window.open("https://github.com/Thomas-Willis/Sushi", "_blank");
});

const todoButton = document.getElementById("todo-button")

todoButton.addEventListener("click", function(){
    window.open("https://github.com/Thomas-Willis/react-todo-list", "_blank");
});

const movieButton = document.getElementById("movie-button")

movieButton.addEventListener("click", function(){
    window.open("https://github.com/Thomas-Willis/react-movie-search-application", "_blank");
});

const cameraButton = document.getElementById("camera-button")

cameraButton.addEventListener("click", function(){
    window.open("https://www.figma.com/file/Eme3vl0KJpFru3otLb9Tqv/Camera-Assignment-(final-version)?type=design&node-id=0%3A1&mode=design&t=B03b78oEq8rpzBxA-1", "_blank");
});

document.getElementById("cv-button").onclick = function(){
    window.open("/images/cv.png", "_blank");
}

document.getElementById("contact-button").onclick = function(){
    window.location.href="mailto:thomas.willis99@btinternet.com";
}

