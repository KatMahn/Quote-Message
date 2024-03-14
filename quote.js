
const quotes = [
    {
        message: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "- Winston Churchill"
    },
    {
        message: "The only way to do great work is to love what you do.",
        author: "- Steve Jobs"
    },
    {
        message: "Believe you can and you're halfway there.",
        author: "- Theodore Roosevelt"
    },
    {
        message: "You are never too old to set another goal or to dream a new dream.",
        author: "- C.S. Lewis"
    },
    {
        message: "It does not matter how slowly you go as long as you do not stop.",
        author: "- Confucius"
    },
    {
        message: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "- Franklin D. Roosevelt"
    },
    {
        message: "You miss 100% of the shots you don’t take.",
        author: "- Wayne Gretzky"
    }
];


function generateMessage() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    
    
    const quoteElement = document.querySelector('.quote');
    quoteElement.innerHTML = `
        <p>${randomQuote.message}</p>
        <p>${randomQuote.author}</p>
    `;
}

const button = document.querySelector('.btn');


button.addEventListener('click', generateMessage);
