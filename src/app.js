/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  const excuse = document.getElementById("excuse");

  excuse.innerHTML = generateExcuse();
};

function randomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function generateExcuse() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  const randomWhoPhrase = who[randomIndex(who)];
  const randomActionPhrase = action[randomIndex(action)];
  const randomWhatPhrase = what[randomIndex(what)];
  const randomWhenPhrase = when[randomIndex(when)];

  return `${randomWhoPhrase} ${randomActionPhrase} ${randomWhatPhrase} ${randomWhenPhrase}`;
}
