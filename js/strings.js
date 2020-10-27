"use sctrict"
/*Excercise 2 : Work with strings*/
/*2.a-*/
var fullName ="RolandoAlfredo"
var newFS = fullName.toUpperCase();
console.log( newFS);
/*2.b*/
var factA ="AprendiendoJavascript"
var factB =factA.substring(0,5);
console.log(factB);
/*2.c*/
var newFactA ="MiprimerCodigo"
var newFactB =newFactA.substring(11,14);
console.log(newFactB);
/*2.d*/
var newVarA ="aprendiendo"
var newVarB =(newVarA.substring(0,1));
var newVarC = (newVarA.substring(1,11));
console.log(newVarB.toLocaleUpperCase() + newVarC.toLowerCase());
/*2.e*/
var formA ="Formualrio A"
var formB =(formA.indexOf(" "));
console.log(formB);
/*2.f*/
var wordA ="expresiones regulares"
var wordB =(wordA.substring(0,1))
var wordC =(wordA.substring(1,12));
var wordD =(wordA.substring(12,13))
var wordE =(wordA.substring(13,21))
console.log(wordB.toUpperCase()+wordC.toLowerCase()+" "+wordD.toUpperCase()+wordE.toLowerCase());


