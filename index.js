import Dog from "./Dog.js";
import { dogs } from "./data.js";

let suitor = getNewDog()
const likeBtn = document.getElementById("btn-like");
const dislikeBtn = document.getElementById("btn-dislike");
const likeIcon = document.getElementById("like-icon");
const dislikeIcon = document.getElementById("dislike-icon");

dislikeBtn.addEventListener("click", function(){
    dislikeIcon.classList.remove("hidden")
    disabledButton()
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

function disabledButton(){
    if(likeBtn.disabled){
        likeBtn.disabled = false;
        dislikeBtn.disabled = false;
    } else {
        likeBtn.disabled = true;
        dislikeBtn.disabled = true;
    }
}

function getNewDog(){
    const newDog = dogs.shift();
    return newDog ? new Dog(newDog) : {};
}

function render(){
    if(suitor.getDogHtml){
        document.getElementById("dog-data").innerHTML = suitor.getDogHtml();
    } else {
        disabledButton();
        document.getElementById("dog-data").innerHTML = `
        <div class="end-message">
            <h1 class="end-title">Looks like we are out of dogs for you to play around with!</h1>
            <p>Please come back later...</p>
        </div>`;
    }
}

render()