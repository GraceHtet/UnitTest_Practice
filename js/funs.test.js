const stringLength = require("./stringLength");
const reverseString = require("./reverseString");

test("String Length is between 1 - 10", () => {
  const string = "something";
  expect(stringLength(string)).toBeGreaterThanOrEqual(1);
  expect(stringLength(string)).toBeLessThan(10);
});

test("Reverse String", () => {
  const string = "Money";
  expect(reverseString(string)).toMatch("yenoM");
});

class Calculator {
  add(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }

  subtract(num1, num2) {
    const sub = num1 > num2 ? num1 - num2 : num2 - num1;
    return sub;
  }

  multiply(num1, num2) {
    const multiply = num1 * num2;
    return multiply;
  }

  division(num1, num2) {
    const div = num1 > num2 ? num1 / num2 : num2 / num1;
    return div;
  }
}

describe("Total", () => {
  const cal = new Calculator();
  test("Summation", () => {
    expect(cal.add(1, 2)).toBe(3);
  });

  test("Subtraction", () => {
    expect(cal.subtract(1, 2)).toBe(1);
  });

  test("Multiplication", () => {
    expect(cal.multiply(1, 2)).toBe(2);
  });

  test("Division", () => {
    expect(cal.division(4, 8)).toBe(2);
  });
});

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

test("Capitalize", () => {
  const string = "string";
  expect(capitalize(string)).toMatch("String");
});
