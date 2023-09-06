const button = document.getElementById("btn");
const outputParagraph = document.getElementById("para");

let arr = ["The only way to do great work is to love what you do. - Steve Jobs", 
    "Believe you can, and you're halfway there. - Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs"]

function handleClick() {
    const randomIndex = Math.floor(Math.random() * arr.length) ;
    const result = arr[randomIndex];
    outputParagraph.textContent = result;
}

button.addEventListener('click', handleClick);