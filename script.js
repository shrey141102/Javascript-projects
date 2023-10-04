const projects = [
  {
    title: "BMI CALCULATOR",
    discription:
      "BMI is a web-based project that offers users the ability to Calculate there Body Mass Index.",
    link: "./BMI calculator/index.html",
    image:
      "https://vitalityweightlossinstitute.com/wp-content/uploads/2023/05/bmi.png",
  },
  {
    title: "Calculator",
    discription: "Calculator project made using HTML CSS Javascript",
    link: "./Calculator/index.html",
    image: "https://www.cdgi.com/wp-content/uploads/2018/08/Calculator.jpg",
  },
  {
    title: "Drum Kit",
    discription:
      "A simple web-based drum kit application built with HTML, CSS, and JavaScript. Play various drum sounds by clicking on the buttons or pressing the corresponding keys on your keyboard.",
    link: "./Drum Kit/index.html",
    image:
      "https://us.123rf.com/450wm/leonidalexeevich/leonidalexeevich2304/leonidalexeevich230400021/201521946-vector-image-of-the-drum-set.jpg?ver=6",
  },
  {
    title: "E-Commerce Website",
    discription: "This is an E-Commerce Website Hope you like it!",
    link: "./E-Commerce Website/index.html",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/11/TY/OY/EH/102316464/ecommerce-website-design.jpg",
  },
  {
    title: "Guess my Number",
    discription:
      'Welcome to the Guess the Number Game! This simple and fun game allows you to guess a number between 0 and 20. Your objective is to guess the correct number while maintaining the highest score possible. For every wrong guess, your score will decrease by 1. You can also reset the game by pressing the "Again" button to start over. Let\'s see how high you can score!',
    link: "./Guess my Number/index.html",
    image:
      "https://content.instructables.com/FGE/F6F0/K1NVATVK/FGEF6F0K1NVATVK.jpg?auto=webp",
  },
  {
    title: "Happy Birthday wisher",
    discription:
      "This is a web project that wishes you happy birthday made using html, css and js.",
    link: "./Happy Birthday wisher/HBD.html",
    image:
      "https://wishes.moonzori.com/wp-content/uploads/2022/10/Happy-Birthday-Wishes-for-Kids-Moonzori-760x428.png",
  },
  {
    title: "Micro Code Editor in the Browser",
    discription:
      "This project implements a simple micro code editor in the browser using HTML, CSS, and JavaScript.",
    link: "./Micro Code Editor in the Browser/index.html",
    image:
      "https://user-images.githubusercontent.com/91379432/147645646-e60b70b4-86af-498f-b141-ffa5ccd6ce8e.PNG",
  },
  {
    title: "Stopwatch",
    discription:
      '"Stopwatch" is a web-based project in wich user can track their time taken to do a activity.',
    link: "./Stopwatch/index.html",
    image:
      "https://media.istockphoto.com/id/1366275800/vector/stopwatch-timer-speed-being-held-by-a-persons-hand.jpg?b=1&s=612x612&w=0&k=20&c=-4d6m0i6z9iACH0kDAyC2p2Z-ykIJH5zHjp2303gj2Q=",
  },
  {
    title: "Temperature Converter",
    discription:
      "In this project, user just have to type from which temperature they want to convert to which temperature. It will automatically convert the temperature from one to another.",
    link: "./Temperature Converter/index.html",
    image:
      "https://static.toiimg.com/thumb/msid-99610753,width-1280,height-720,resizemode-4/.jpg",
  },
  {
    title: "To-Do",
    discription:
      '"To-Do" is a web-based project that offers users the ability to create, manage, and organize their tasks and to-do lists. "To-Do" help users to stay organized and productive.',
    link: "./To-Do/index.html",
    image:
      "https://play-lh.googleusercontent.com/HUuQc4Zpl6x7fUyX-jFMmcuUbW77REw4UKl5rfhHfP4VY6ctBU1w1I_RZWsXaojFgIo",
  },
  {
    title: "Simon Game",
    discription:
      "A memory-enhancing game in JavaScript where players repeat progressively longer sequences of colors and sounds",
    link: "https://shivanshsin0203.github.io/Learn_DOM_Project3/",
    image:
      "https://user-images.githubusercontent.com/46281169/60651872-8a8c2480-9e60-11e9-9e6f-feeb76e6e159.PNG",
  },
  {
    title: "Quotes Generator",
    discription:
      "The Quote Generator is a web application designed to inspire and motivate users with a collection of carefully curated quotes from various authors. Whether you're seeking wisdom, encouragement, or a moment of reflection, this application provides you with a diverse selection of quotes that can uplift your spirits and fuel your aspirations.",
    link: "./Quote Generate/index.html",
    image: "https://randomgenerate.io/images-large/random-quote-generator.jpg",
  },
  {
    title: "Music Player",
    discription:
      "This music player is a web based applcation designed where you can play-pause music and adjust the volume .",
    link: "./Music Player/index.html",
    image:
      "https://beebom.com/wp-content/uploads/2016/08/10-Best-iPhone-Music-Player-Apps-You-Should-Try-in-2019.jpg?w=750&quality=75",
  },
  {
    title: "Analog Clock",
    discription: "A simple Analig Clock with dark and light mode.",
    link: "./Analog Clock/index.html",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjIRzrebpgt4uF79ewd_AjUjjJ8vqp9PwW6Q&usqp=CAU",
  },
  {
    title: "URL Shortener",
    discription: "URL Shortener made using HTML, CSS, and JavaScript.",
    link: "./URL Shortener/index.html",
    image:
      "https://www.clickslice.co.uk/wp-content/uploads/2022/07/1_Pdw7h5X6vQQNVopIzHBG6A.jpeg",
  },
  {
    title: "QR Code Generator",
    discription: "Create instant scannable codes.",
    link: "./QR Code Generator/index.html",
    image:
      "https://images.unsplash.com/photo-1605098293544-25f4c32344c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3135&q=80",
  },
];

const cards = document.getElementsByClassName("cards");

function createCard(title, discription, link, image) {
  const li = document.createElement("li");
  li.classList.add("cards__item");
  const div1 = document.createElement("div");
  div1.classList.add("card");

  img = document.createElement("img");
  img.classList.add("card__image");
  img.src = image;

  const div0 = document.createElement("div");
  div0.classList.add("card__content");

  const div = document.createElement("div");
  div.classList.add("card__title");
  div.innerHTML = title;
  div0.appendChild(div);

  const p = document.createElement("p");
  p.classList.add("card__text");
  p.innerHTML = discription;
  div0.appendChild(p);

  const a = document.createElement("a");
  a.classList.add("card__btn");
  a.classList.add("btn--block");
  a.classList.add("btn");
  a.href = link;
  a.target = "_blank";
  a.innerHTML = "DEMO";
  div0.appendChild(a);

  div1.appendChild(img);
  div1.appendChild(div0);
  li.appendChild(div1);
  cards[0].appendChild(li);
}
projects.map((e) => {
  createCard(e.title, e.discription, e.link, e.image);
});
