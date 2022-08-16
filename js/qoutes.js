const quotes = [
    {
        qoute : 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        author : '-Nelson Mandela'
    },
    {
        qoute : 'The way to get started is to quit talking and begin doing.',
        author : '-Walt Disney'
    },
    {
        qoute : `Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.`,
        author : '-Steve Jobs'
    },
    {
        qoute : 'If life were predictable it would cease to be life, and be without flavor.',
        author : '-Eleanor Roosevelt'
    },
    {
        qoute : `If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.`,
        author : '-Oprah Winfrey'
    },
    {
        qoute : `If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.`,
        author : '-James Cameron'
    },
    {
        qoute : `Life is what happens when you're busy making other plans.`,
        author : '-John Lennon'
    },
    {
        qoute : 'Whoever is happy will make others happy too.',
        author : '-Anne Frank'
    },
    {
        qoute : 'Always remember that you are absolutely unique. Just like everyone else.',
        author : '-Margaret Mead'
    },
    {
        qoute : 'The future belongs to those who believe in the beauty of their dreams.',
        author : '-Eleanor Roosevelt'
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.qoute;
author.innerText = todaysQuotes.author;