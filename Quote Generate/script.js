const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "Don't count the days, make the days count. - Muhammad Ali",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "If you want to achieve greatness stop asking for permission. - Anonymous",
  "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "Dream big and dare to fail. - Norman Vaughan",
  "The secret to getting ahead is getting started. - Mark Twain",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The harder I work, the luckier I get. - Samuel Goldwyn",
  "If you are not willing to risk the usual, you will have to settle for the ordinary. - Jim Rohn",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "The best revenge is massive success. - Frank Sinatra",
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  "Success is not in what you have, but who you are. - Bo Bennett",
  "You can't cross the sea merely by standing and staring at the water. - Rabindranath Tagore",
  "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
  "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
  "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
  "The way to get started is to quit talking and begin doing. - Walt Disney"
];

const generateButton = document.getElementById("generate-button");
const quoteCountInput = document.getElementById("quote-count");
const quotesContainer = document.getElementById("quotes-container");

generateButton.addEventListener("click", () => {
  quotesContainer.innerHTML = ''; // Clear existing quotes

  const count = parseInt(quoteCountInput.value);

  if (isNaN(count) || count < 1) {
      return;
  }

  for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];

      const quoteElement = document.createElement("div");
      quoteElement.classList.add("quote");
      quoteElement.textContent = randomQuote;
      quotesContainer.appendChild(quoteElement);
  }
});

// Initial quote display (default: 1 quote)
generateButton.click();
