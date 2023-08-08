const quotes = [
    {
        quote: "The starting point of all achievement is desire.",
        author:"Napolean Hill",
    },
    {
        quote: "The best way to predict your future is to create it.",
        author:"Abraham Lincoln",
    },
    {
        quote: "If your dreams don't scare you, they are to small.",
        author:"Richard Branson",
    },
    {
        quote: "The most precious thing that we all have with us is time.",
        author:"Steve Jobs",
    },
    {
        quote: "Don't wait! Do something when you are young, when you have nothing to lose, and keep that in mind.",
        author:"Steve Jobs",
    },
    {
        quote: "Don't let the noise of other's opinions drown out your own inner voice.",
        author:"Steve Jobs",
    },
    {
        quote: "I'm convinced that the only thing that kept me going was that I loved what I did. You've got to find what you love.",
        author:"Steve Jobs",
    },
    {
        quote: "Invest time in yourself to have great experiences that are going to enrich you.",
        author:"Steve Jobs",
    },
    {
        quote: "The most important thing is a person. A person who incites and feeds your curiosity; and machines cannot do that in the same way that people can.",
        author:"Steve Jobs",
    },
    {
        quote: "You may delay, but time will not.",
        author: "Benjamin Franklin"
    },
    {
        quote: "And most important, have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.",
        author: "Steve Jobs",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;