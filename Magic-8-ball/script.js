const magicball = document.getElementById("mb-container");
const response = document.getElementById("response");

function magicBallClick() {
    const options = [ 'It is certain', 'It is decidedly so', 'Without a doubt', 'Don\'t count on it', 'Outlook not so good', 'Very doubtful', 'Reply hazy', 'Try again', 'My sources say no', 'You can rely on it', 'As I see it, yes', 'Cannot predict now', 'Most likely', 'Better not tell you now', 'Yes in due time', 'Outlook good', 'My instincts say yes', 'Ask someone else', 'Concentrate and ask again', 'No not at all', 'Signs point to yes', 'Definetly not', 'Yes but be cautious', 'My reply is no', 'It is a possibility', 'Ask when the stars align', 'Chances are slim', 'Absolutely', 'In you dreams', 'Very likely' ]
    const index = Math.floor(Math.random() * options.length);
    const message = options[index];
    document.getElementById("response").textContent = message;
    document.getElementById("response").style.fontSize = '1.1rem';
}

document.getElementById("magicball").addEventListener("click", magicBallClick);