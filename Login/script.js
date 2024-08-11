var image = document.getElementById("image_main");
var username = document.getElementById('username');
var password = document.getElementById('password');
var login = document.getElementById('login');
var button = document.getElementById('button');

login.addEventListener("click", function () {
    image.classList.add("transition");
    image.src = "3d-fluency-monkey-face.png";
});

username.addEventListener("click", function () {
    image.classList.add("transition");
    image.src = "3d-fluency-hear-no-evil-monkey.png";
});

password.addEventListener("click", function () {
    image.classList.add("transition");
    image.src = "3d-fluency-see-no-evil-monkey.png";
});

button.addEventListener("click", function () {
    image.classList.add("transition");
    image.src = "3d-fluency-smiling-face-with-smiling-eyes-emoji.png";
});