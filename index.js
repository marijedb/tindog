import Dog from "./Dog.js";
import { dogs } from "./data.js";

// Initializes first dog for rendering. 
let suitor = getNewDog()
const likeBtn = document.getElementById("btn-like");
const dislikeBtn = document.getElementById("btn-dislike");
const likeIcon = document.getElementById("like-icon");
const dislikeIcon = document.getElementById("dislike-icon");

dislikeBtn.addEventListener("click", function(){
    // When clicked dislike button it shows the dislike icon on top of image by removing class hidden. 
    dislikeIcon.classList.remove("hidden")
    disabledButton()

    // After 1,5 seconds it will select a new dog, hides the dislike icon again, 
    // makes sure buttons aren't disabled anymore and then renders the page with the new dog. 
    setTimeout(function(){
        suitor = getNewDog();
        dislikeIcon.classList.add("hidden")
        disabledButton();
        render();
    },1500);
})

likeBtn.addEventListener("click", function(){
    likeIcon.classList.remove("hidden");
    disabledButton()
    setTimeout(function(){
        suitor = getNewDog();
        likeIcon.classList.add("hidden")
        disabledButton();
        render();
    },1500);
})

// If buttons are disabled it will un disable them all. If they arent disabled, then they will be disabled on function call. 
function disabledButton(){
    if(likeBtn.disabled){
        likeBtn.disabled = false;
        dislikeBtn.disabled = false;
    } else {
        likeBtn.disabled = true;
        dislikeBtn.disabled = true;
    }
}


// When called it will remove first dog object of dogs array and set it as new dog. 
// if there was still item in dogs array and now inside newDog it will return a new Dog made from
// class Dog. otherwise it will return an empty object. 
function getNewDog(){
    const newDog = dogs.shift();
    return newDog ? new Dog(newDog) : {};
}

function render(){
    // if suitor isn't an empty object it will render it to the page.
    // If it is empty then it will remove the buttons and replaces main element with text. 
    if(suitor.getDogHtml){
        document.getElementById("dog-data").innerHTML = suitor.getDogHtml();
    } else {
        likeBtn.classList.add("hidden");
        dislikeBtn.classList.add("hidden")
        document.getElementById("dog-data").innerHTML = `
        <div class="end-message">
            <h1 class="end-title">Looks like we are out of dogs for you to play around with!</h1>
            <p>Please come back later...</p>
        </div>`;
    }
}

render()