// const silder = document.querySelectorAll(".images");

// var counter = 0;
// silder.forEach((slide , index) => {
//     slide.style.left = `${index * 100}%`
// })

// const sec1 = document.getElementsByClassName("section-1");
// const sec2 = document.getElementsByClassName("section-2");

// window.addEventListener("scroll",() => {
//     let scrolly = window.scrollY;

//     sec1.style.marginLeft = value * -1.5 +'px';

// })

const randomNum = document.getElementById("random-number");
const button = document.getElementById("button");
// var num=0;
const result = document.getElementById("result");

var count = 0;
const getValue=()=>{
    
    var num = document.getElementById("num").value;

    if(num === "" || isNaN(num)){
        alert("Please Enter number");
    }else{

            let ran = Math.floor(Math.random() * 10)+1;
            randomNum.innerHTML = ran;
            count++;
            if(parseInt(num) === ran){
                result.innerHTML = "You Won";
                
            }else{
                result.innerHTML = "Try Again";
            }
           
        }

    
}

// button.addEventListener("click",()=>{
    
// })