
function sumOf(){
let weight = document.getElementById('weight')
let height = document.getElementById('height')
let age = document.getElementById('age')
let bmassI = (weight/(height*height)*1000);

    document.getElementById('bmi').innerHTML = bmassI

    if (bmassI <= 24.9){
        document.getElementById('input').innerHTML = 'YOU ARE AN UNDERWEIGHT BESTIE'
    }else if (bmassI >= 25.00 && bmi <= 29.9)(
        document.getElementById.ById('input').innerHTML - 'YOU ARE A HEALTHY BESTIE'
    )
}