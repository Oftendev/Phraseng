var pronouns_without_s = ["I", "We", "You", "They"];
var pronouns_with_s = ["He", "She", "It"];
var verbs = [["have", "has"], ["can", "can"], ["make", "makes"], ["go", "goes"], ["say", "says"]];
for (const i of verbs) {
    for (const k of pronouns_without_s) {
        console.log(`${k} ${i[0]}.`);
    }
    for (const k of pronouns_with_s) {
        console.log(`${k} ${i[1]}.`);
    }
}
//console.log(myFunction(2, 9));