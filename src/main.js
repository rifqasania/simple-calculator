//function
//1. declaration
//2. expression

//1. declaration
/*
function name(parameter){
  code block;
}
*/
function sayHello(){
  return "Hello world";
}
console.log(sayHello());

function sapaNama(name){
  return "My Name is " + name;
}
console.log(sapaNama("Rifqa"));
console.log(sapaNama("Tsaniya"));

//menghitung luas persegi panjang menggunakan function
//luas = panjang * lebar

function persegiPanjang(panjang, lebar){
  let luas = panjang * lebar;
  return "Luas persegi panjang adalah " + luas;
}
console.log(persegiPanjang(4, 5));
console.log(persegiPanjang(100, 27));

//menghitung luas segitiga menggunakan function
//luas = 1/2 * alas * tinggi

function segitiga(alas, tinggi){
  let luas = 1/2 * alas * tinggi;
  return "Luas segitiga adalah " + luas;
}
console.log(segitiga(20, 3));
console.log(segitiga(5, 4));

//konversi suhu dari fahrenheit menjadi celcius menggunakan function
// C = (5/9) * (f-32);

function konversiSuhu(f){
   let rumus =  (5/9)* (f-32);
  return f + "°F = " + rumus + " °C ";
}
console.log(konversiSuhu(50));
 
//2. function expression
const hello = function(){
  return "Hello World"
}
console.log(hello);
console.log(hello());

//1. sapanama
//2. luas persegi panjang
//3. luas segitiga
//4. konversi suhu

const sapaNama1 = function(name){
  return "My Name is " + name ;
}
console.log(sapaNama1("Rifqa"));

const persegiPanjang1 = function (panjang, lebar){
  let luas1 = panjang * lebar;
  return "Luas persegi panjang adalah " + luas1;
}
console.log(persegiPanjang(3, 8));
console.log(persegiPanjang(3, 5));

const segitiga1 = function (alas, tinggi){
  let luas2 = 1/2 * alas * tinggi;
  return "Luas segitiga adalah " + luas2;
}
console.log(segitiga(5, 5));
console.log(segitiga(6, 2));

const konversiSuhu1= function (f){
   let rumus =  (5/9)* (f-32);
  return f + "°F = " + rumus + " °C ";
}
console.log(konversiSuhu(65));

//Function Arrow;
const persegiPanjang2 = (panjang , lebar) => 
"Luas persegi panjang adalah" + panjang * lebar;
console.log(persegiPanjang2(5, 6));

//!. say hello
//2. sapa nama
//3. luas segitiga
//4. konversi suhu

//1.
const sayHello1 = () =>
"Hello"
console.log(sayHello1);
//2.
const sapaNama2 = (name) =>
"My Name is " + name ;
console.log(sapaNama2("Rifqa"));
//3.
const segitiga2 = (alas, tinggi) =>
"Luas segitiga adalah " + 1/2 * alas * tinggi;
console.log(segitiga(5, 5));
//4.
const konversiSuhu2= (f) =>
f + "°F = " + (5/9)* (f-32) + " °C ";
console.log(konversiSuhu2(65));