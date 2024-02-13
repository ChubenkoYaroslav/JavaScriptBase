function removeElem(arr, elem, newElem) {
    return arr.map(item => (item === elem) ? newElem : item);
}

let myNewarray = [2, 456, 2, 10111, 2];
let elementToRemove = 2;
let newElement = 77;

let newArray = removeElem(myNewarray, elementToRemove, newElement);
console.log(newArray);
