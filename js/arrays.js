"use strict"
/*Excercise N° 3 : Arrays */
//3.a //
var months =["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
console.log(months[ 4],months[10]);
//3.b//
console.log(months.sort());
//3.c//
months.unshift("Inicio");
months.push("Final");
console.log(months.sort());
//3.d//
months.shift();
months.pop();
console.log(months);
//3.e//
months.reverse();
console.log(months);
//3.f//
console.log(months.join("-"));
//3.g//
var monthsCopy = months.slice(5,12);
console.log(monthsCopy);
