/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let cartas = ["♦", "♥", "♠", "♣"];
let numeros = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
window.onload = function() {
  //write your code here
  let picas = cartas[Math.floor(Math.random() * cartas.length)];
  let num = numeros[Math.floor(Math.random() * numeros.length)];
  document.getElementById("prueba").innerHTML = picas;
  document.getElementById("prueba2").innerHTML = picas;
  document.getElementById("numero").innerHTML = num;
};
