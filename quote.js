const quote = [
    {
        "quote": "The only limit to our realization of tomorrow is our doubts of today.",
        "author": "Franklin D. Roosevelt"
    },
    {
        "quote": "Life is what happens when you're busy making other plans.",
        "author": "John Lennon"
    },
    {
        "quote": "Get busy living or get busy dying.",
        "author": "Stephen King"
    },
    {
        "quote": "You miss 100% of the shots you don’t take.",
        "author": "Wayne Gretzky"
    },
    {
        "quote": "The best way to predict the future is to create it.",
        "author": "Peter Drucker"
    },
    {
        "quote": "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        "author": "Martin Luther King Jr."
    },
    {
        "quote": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "quote": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs"
    },
    {
        "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "author": "Winston S. Churchill"
    },
    {
        "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        "author": "Ralph Waldo Emerson"
    }
]


document.getElementById('quote').addEventListener('click', function(){
    const p = document.getElementById('quote-p');
    const h = document.getElementById('name');
    const randomIndex = Math.floor(Math.random() * quote.length);

    
    p.innerText = quote[randomIndex].quote;
    h.innerText = quote[randomIndex].author;
   
})