function reverseString(string) {
  string = string.split("").reverse().join("");

  return string;
}

console.log(reverseString("Money"));

module.exports = reverseString;
