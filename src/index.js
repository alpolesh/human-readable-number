function toReadable (number) {
  let obj = {
       '0': "zero",
       '1': "one",
       '2': "two",
       '3': "three",
       '4': "four",
       '5': "five",
       '6': "six",
       '7': "seven",
       '8': "eight",
       '9': "nine",
       '10': "ten",
       '11': "eleven",
       '12': "twelve",
       '13': "thirteen",
       '14': "fourteen",
       '15': "fifteen",
       '16': "sixteen",
       '17': "seventeen",
       '18': "eighteen",
       '19': "nineteen",
       '20': "twenty",
       '30': "thirty",
       '40': "forty",
       '50': "fifty",
       '60': "sixty",
       '70': "seventy",
       '80': "eighty",
       '90': "ninety",
  };
  let result = '';
  let str = String(number);
  if (number >= 100){
    result += obj[str[0]] + ' hundred';
        if (number % 10 != 0 && number % 100 >= 20){
            result += ' ' + obj[str[1] + '0'];
            result += ' ' + obj[str[2]];
        }
        else if (number % 100 == 0) {
            result += '';
        }
        else if (number % 10 == 0) {
            result += ' ' + obj[str[1] + '0'];
        }
        else {
            result += ' ' + obj[String(number % 100)];
        }
  }
  else if (number >= 20 && number % 10 != 0){
    result += obj[str[0] + '0'];
    result += ' ' + obj[str[1]];
  }
  else if (number >= 10 && number % 10 != 0){
    result += obj[str];
  }
  else if (number >= 0 && number < 10){
    result += obj[str[0]];
  }
  else result += obj[str];
return  result;
}
console.log(toReadable(14));

module.exports = toReadable;
