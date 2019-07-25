/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = () => {
  let excuse = "";
  let arrayNumbers = [
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
    "K",
    "A"
  ];
  let arraySuite = ["\u2660", "\u2665", "\u2666", "\u2663"];
  let randomValue1 =
    arrayNumbers[Math.floor(Math.random() * arrayNumbers.length)];
  let randomValue2 = arraySuite[Math.floor(Math.random() * arraySuite.length)];

  if (randomValue2 === "\u2665" || randomValue2 === "\u2666") {
    document.querySelector(".top-suit").className = "top-suit red";
    document.querySelector(".bottom-suit").className = "bottom-suit red";
  }

  console.log(randomValue2);
  console.log(randomValue1);
  //excuse = randomValue1 + " " + randomValue2;
  document.querySelector("#number").innerHTML = randomValue1;
  document.querySelector(".top-suit").innerHTML = randomValue2;
  document.querySelector(".bottom-suit").innerHTML = randomValue2;
};
