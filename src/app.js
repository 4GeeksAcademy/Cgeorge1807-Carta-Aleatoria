/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "K", "Q"];
  let numAleatorio = numeros[Math.floor(Math.random() * numeros.length)];
  console.log(numAleatorio);
  let palos = ["♦", "♥", "♠", "♣"];
  let palosAleatorio = palos[Math.floor(Math.random() * palos.length)];
  console.log(palosAleatorio);
  document.getElementById("palo").innerHTML = palosAleatorio;
  document.getElementById("palo-abajo").innerHTML = palosAleatorio;
  document.getElementById("numero").innerHTML = numAleatorio;
  if (palosAleatorio == "♥" || palosAleatorio == "♦") {
    document.getElementById("palo").style.color = "red";
    document.getElementById("palo-abajo").style.color = "red";
  }
};
// window.onload = function() {
//   let numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "K", "Q"];
//   let numAleatorio = numeros[Math.floor(Math.random() * numeros.length)];
//   let palos = ["♦", "♥", "♠", "♣"];
//   let palosAleatorio = palos[Math.floor(Math.random() * palos.length)];
//   document.getElementById("palo").innerHTML = palosAleatorio;
//   document.getElementById("palo-abajo").innerHTML = palosAleatorio;
//   document.getElementById("numero").innerHTML = numAleatorio;
//   if (palosAleatorio == "♥" || palosAleatorio == "♦") {
//     document.getElementById("palo").style.color = "red";
//     document.getElementById("palo-abajo").style.color = "red";
//   }
// };
