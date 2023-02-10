const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(catName) {
    return cats.push(catName);   
}
function destructivelyPrependCat(catName) {
    return cats.unshift(catName);   
}
function destructivelyRemoveFirstCat() {
    return cats.shift();   
}
function destructivelyRemoveLastCat() {
    return cats.pop();   
}
function appendCat(catName) {
    const newCat = cats.slice();
    newCat.push(catName);
    return newCat;
}
function prependCat(catName) {
    const newCat = cats.slice();
    newCat.unshift(catName);
    return newCat;
}
function removeLastCat(){
    const newCat = cats.slice();
    newCat.pop();
    return newCat;
}
function removeFirstCat(){
    const newCat = cats.slice();
    newCat.shift();
    return newCat;
}