var pronouns_without_s = ["I", "We", "You", "They"];
var pronouns_with_s = ["He", "She", "It"];
var verbs = [["have", "has"], ["make", "makes"], ["go", "goes"], ["say", "says"]];
var modal_verbs = [["can", "can not (can't)"]];

function first_letter_Upcase(word) {
    return word[0].toUpperCase() + word.slice(1);
}

//генерация фраз с отрицанием
for (const i of verbs) {
    for (const k of pronouns_without_s) {
        console.log(`${k} do not (don't) ${i[0]}.`);
    }
    for (const k of pronouns_with_s) {
        console.log(`${k} does not (doesn't) ${i[0]}.`);
    }
}

for (const i of modal_verbs) {
    for (const k of pronouns_without_s) {
        console.log(`${k} ${i[1]}.`);
    }
    for (const k of pronouns_with_s) {
        console.log(`${k} ${i[1]}.`);
    }
}

//генерация вопросительных фраз
for (const i of verbs) {
    for (const k of pronouns_without_s) {
        console.log(`Do ${k} ${i[0]}?`);
    }
    for (const k of pronouns_with_s) {
        console.log(`Does ${k} ${i[0]}?`);
    }
}

for (const i of modal_verbs) {
    for (const k of pronouns_without_s) {
        console.log(first_letter_Upcase(`${i[0]} ${k}?`));
    }
    for (const k of pronouns_with_s) {
        console.log(first_letter_Upcase(`${i[0]} ${k}?`));
    }
}