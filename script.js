//variables stuffies


let weightbtn = document.querySelector(".weight");
let heightbtn = document.querySelector(".height");
let submitBtn = document.querySelector(".button");
let clearBtn = document.querySelector(".allClear");
let bMi = document.querySelector(".text");
let text = document.querySelector(".massp");

let BMI, weight, height;
//clickevent for btn
function calc() {
    ("click",() =>{
    weight = weightbtn.value;
    height = heightbtn.value;
    BMI = (weight/height*height);
    bMi.innerHTML = BMI;
    if(BMI < 18.5){
        text.innerText = "You are an underweight bestie";
    }else if((BMI > 18.5) && (BMI <= 24.9)){
        text.innerText = "Bestie, You are a Normie";
    }else if((BMI >= 25) && (BMI <= 29.9 )){
        text.innerText = "You are a chubby bestie";
    }else{
        text.innerText = "You enjoy sweeties too much, besties";
    }
})

}
//new function
