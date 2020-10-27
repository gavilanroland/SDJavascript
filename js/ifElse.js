"use strict"
//Excercise 4//
//4.a//
var numeroAleatorio = Math.random();
console.log(numeroAleatorio);
if (numeroAleatorio > 0.5) {
    console.log("Greater than 0,5")
}
else {
     console.log("Lower than 0,5")
       
}

//4.b//
var age =Math.random()*100;
console.log(age);
if (age =< 2) {
    console.log("Bebe")
    }
if (age >=2 && age =<12) {
        console.log("Nino")
}
if (age >=13 && age =<19) {
    console.log("Adolescente")
    }
if (age >= 20 && age=<30) {
    console.log("Joven")
}
if (age >= 31 && age=< 60) {
    console.log("Adulto")
}
if (age >= 31 && age=<65) {
    console.log("Adulto Mayor")
}
else (age> 75) {
    console.log("Anciano")
}
