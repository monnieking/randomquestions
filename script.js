function randomNumberButton() {
    const randomNumberButton = Math.floor(Math.random() * 100) + 1;
    document.getElementById("randomNumber").innerHTML = randomNumberButton;
}
// function fullNameButton() {
//     let fullNameButton = "Your full name is" + 
//     document.getElementById("fullName").innerHTML = fullNameButton;
// }
function characterCountButton() {
    let characterCountButton = "I like to shop in Zara".indexOf('Z');
    document.getElementById("characterCount").innerHTML = characterCountButton;
}
function upperCaseButton() {
    let upperCaseButton = "I'm a bad bitch".toUpperCase();
    document.getElementById("upperCase").innerHTML = upperCaseButton;
}
function sliceAndReplaceButton() {
    let sliceAndReplaceButton = "I want to slice this sentence in half and replace the word hate with love. Can you do that for me?".slice(42).replace("hate", "love");
    document.getElementById("sliceAndReplace").innerHTML = sliceAndReplaceButton;
}