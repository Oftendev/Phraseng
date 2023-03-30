function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

var first_numerals = [
  ["", ""],
  ["zero", "ноль"],
  ["one", "один"],
  ["two", "два"],
  ["three", "три"],
  ["four", "четыре"],
  ["five", "пять"],
  ["six", "шесть"],
  ["seven", "семь"],
  ["eight", "восемь"],
  ["nine", "девять"],
  ["ten", "десять"],
  ["eleven", "одиннадцать"],
  ["twelve", "двенадцать"],
  ["thirteen", "тринадцать"],
  ["fourteen", "четырнадцать"],
  ["fifteen", "пятнадцать"],
  ["sixteen", "шестнадцать"],
  ["seventeen", "семнадцать"],
  ["eighteen", "восемнадцать"],
  ["nineteen", "девятнадцать"],
];
var dec_numerals = [
  ["twenty", "двадцать"],
  ["thirty", "тридцать"],
  ["forty", "сорок"],
  ["fifty", "пятьдесят"],
  ["sixty", "шестьдесят"],
  ["seventy", "семьдесят"],
  ["eighty", "восемьдесят"],
  ["ninety", "девяносто"],
  ["hundred", "сто"],
];
var ones_numerals = [
  ["", ""],
  ["one", "один"],
  ["two", "два"],
  ["three", "три"],
  ["four", "четыре"],
  ["five", "пять"],
  ["six", "шесть"],
  ["seven", "семь"],
  ["eight", "восемь"],
  ["nine", "девять"],
];

for (let i = 0; i < 50; i++) {
  let current_num = getRandomInt(0, 100);
  if (current_num < 20) {
    console.log(first_numerals[current_num + 1].join(", "));
  } else {
    console.log(
      [
        dec_numerals[Math.floor(current_num / 10) - 2][0] + " " + ones_numerals[current_num % 10][0],
        dec_numerals[Math.floor(current_num / 10) - 2][1] + " " + ones_numerals[current_num % 10][1],
      ].join(", ")
    );
  }
}
