// Create three functions. checkParamsFn, checkOverEighteenFn & calculateAgeFn.
// The first function checks your parameters and returns
// true if all of them are integers, whereas returns false if not.
// The second function is self explanatory.
// The third function, uses the first and second functions to check its inputs
// and returns an error message that starts with "error:"
// This function should return a rounded age.
// READING MATERIALS:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
// https://www.w3schools.com/js/js_dates.asp
// https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript
// HINT: recycling code is never bad practice.

// This functions should check the integrity of the parameters and pass true/false
function checkParamsFn(year, month, day) {
  if (
    Number.isInteger(year) &&
    Number.isInteger(month) &&
    Number.isInteger(day)
  )
    return true;
  else return false;
}

let date = new Date();
let yearn = date.getYear() + 1900;
let monthn = date.getMonth() + 1;
let dayn = date.getDate();

function ageCalculater(year, month, day) {
  let dayPass, monthsPass, yearPass;
  if (dayn - day > 0) dayPass = dayn - day;
  else {
    dayPass = 30 + (dayn - day);
    monthn--;
  }

  if (monthn - month > 0) monthsPass = monthn - month;
  else {
    monthsPass = 12 + (monthn - month);
    yearn--;
  }

  yearPass = yearn - year;

  return yearPass;
}

// This functions checks if the person is or above 18 years of age, return true/false
function checkOverEighteenFn(year, month, day) {
  return ageCalculater(year, month, day) >= 18;
}

function calculateAgeFn(year, month, day) {
  if (!checkParamsFn(year, month, day)) return "error: Invaled Input";
  if (!checkOverEighteenFn(year, month, day)) return "error: under age ";
  else return ageCalculater(year, month, day);
}

// Look at the naming of the functions. it looks like salwaBaqer, where
// the first letter of the first word is small, while the first letter of the
// second word is Capital. This is called "Camel Casing."
// Also the Fn at the end of the function name is short for function.
// str = String, int = Integer, arr = Array, obj = Object, fn = Function
// It's best practice to name your function as to what it does, or your variable
// to what it holds.

module.exports = calculateAgeFn;
