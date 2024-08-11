var image_main = document.getElementById('main-image');

var image1 = document.getElementById('image-1');
var image2 = document.getElementById('image-2');
var image3 = document.getElementById('image-3');
var image4 = document.getElementById('image-4');
var image5 = document.getElementById('image-5');
var main = document.getElementById('main');

var name1 = document.getElementById('name');

image1.onclick = function() {
    name1.innerHTML = "UTLIMATE";
    image_main.src = image1.src;
    main.style.backgroundColor = "black";
};

image2.onclick = function() {
    name1.innerHTML = "SPICES";
    image_main.src = image2.src;
    main.style.backgroundColor = "blue";
};

image3.onclick = function() {
    name1.innerHTML = "DELICIOUS";
    image_main.src = image3.src;
    main.style.backgroundColor = "green";
};

image4.onclick = function() {
    name1.innerHTML = "TASTIEST";
    image_main.src = image4.src;
    main.style.backgroundColor = "red";
};

image5.onclick = function() {
    name1.innerHTML = "CHEESIEST";
    image_main.src = image5.src;
    main.style.backgroundColor = "orange";
};
