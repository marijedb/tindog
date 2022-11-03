import Dog from "./Dog.js";
import { dogs } from "./data.js";

function getNewDog(){
    const newDog = dogs.shift();
    return newDog ? new Dog(newDog) : {};
}

let suitor = getNewDog()

function render(){
    document.getElementById("dog-data").innerHTML = suitor.getDogHtml();
}

render()
// GET DOG PIC
// GET DOG DESCRIPTION
// GET NEW ONE WITH LIKE OR DISLIKE
// END OF PICTURES DATA COME BACK LATER TEXT