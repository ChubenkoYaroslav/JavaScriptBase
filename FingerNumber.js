const FingerN = parseInt(prompt("Enter your finger number"), 10);
console.log(FingerN);
if (FingerN === 1) {
  alert("It is a thumb");
} else if (FingerN === 2) {
  alert("This is the index finger");
} else {
  alert("You don't have any more fingers!");
}
