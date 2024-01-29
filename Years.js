const leapYear = parseInt(prompt("Enter the year"), 10);

if (leapYear % 400 === 0 || (leapYear % 4 === 0 && leapYear % 100 !== 0)) {
  alert("Leap year");
} else {
  alert("It's not a leap year");
}
