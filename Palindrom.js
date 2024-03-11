function isPalindrome(word) {
  word = word.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return word === word.split("").reverse().join("");
}

function checkPalindromesInString(str) {
  const words = str.split(/\s+/);
  const palindromeResults = words.map(isPalindrome);
  return palindromeResults;
}

const inputString = "радар око eye noon 15gtytg51";
const palindromeResults = checkPalindromesInString(inputString);

console.log(palindromeResults);
