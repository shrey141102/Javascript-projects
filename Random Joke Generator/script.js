const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        jokeContainer.textContent = `${item.joke}`;
        jokeContainer.classList.add("fade");
    });
}
btn.addEventListener("click",getJoke);
getJoke();
/*const jokeContainer = document.getElementById("joke");: This line gets a reference to the HTML element with the id "joke" and stores it in the jokeContainer variable.

const btn = document.getElementById("btn");: This line gets a reference to the HTML button element with the id "btn" and stores it in the btn variable.

const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";: This is the URL of the JokeAPI, specifying parameters such as joke type, blacklist flags to exclude certain types of jokes, and the output type (single joke).

The getJoke function is defined to fetch a joke from the JokeAPI using the fetch function. It then updates the text content of the jokeContainer with the retrieved joke and adds a fade-out effect by toggling the "fade" class.

btn.addEventListener("click", getJoke);: This line adds an event listener to the button. When the button is clicked, it triggers the getJoke function to fetch and display a new joke.

getJoke();: This line calls the getJoke function once when the page loads to display an initial joke.*/