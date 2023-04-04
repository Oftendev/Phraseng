/**
 * @file Генерирует предложения в Present Simple
 * @author Oftendev
 */
/** Местоимения, после которых не ставится 'S' в глаголе
 * @type {Array<string>}
 */
var pronouns_without_s = ["I", "We", "You", "They"];
/** Местоимения, после которых ставится 'S' в глаголе
 * @type {Array<string>}
 */
var pronouns_with_s = ["He", "She", "It"];
/** 5 глаголов, каждый в форме без 'S' и с 'S'
 * @type {string[][]}
 */
var verbs = [
  ["have", "has"],
  ["can", "can"],
  ["make", "makes"],
  ["go", "goes"],
  ["say", "says"],
];
for (const i of verbs) {
  for (const k of pronouns_without_s) {
    console.log(`${k} ${i[0]}.`);
  }
  for (const k of pronouns_with_s) {
    console.log(`${k} ${i[1]}.`);
  }
}
