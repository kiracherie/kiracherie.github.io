const quotes = [
    {
        id: 1,
        quote: "Optimism is an occupational hazard of programming. Testing is the treatment.",
        author: "Kent Beck",
        comment: "I am definitely an optimistic person. What else gets you through hours of debugging than with a little bit of optimism?",
    },
    {
        id: 2,
        quote: "Walking on water and developing software from a specification are easy if both are frozen.",
        author: "Edward V. Berard",
        comment: "It's mind blowing how much technology, and people's minds, change so quickly.",
    },
    {
        id: 3,
        quote: "Tetris came along early and had a very important role in breaking down ordinary people's inhibitions in front of computers, which were scary objects to non-professionals used to pen and paper. But the fact that something so simple and beautiful could appear on screen destroyed that barrier.",
        author: "Tetris creator Alexey Pajitnov",
        comment: "Computers were confusing, but I knew they were powerful, so I wanted to learn how to use them.",
    },
    {
        id: 4,
        quote: "Simplicity is prerequisite for reliability.",
        author: "Edsger Dijkstra",
        comment: "I believe the best programs are simple, useful, and easy to understand.",
    },
    {
        id: 5,
        quote: "Any intelligent fool can make things bigger and more complex. It takes a touch of genius – and a lot of courage – to move in the opposite direction.",
        author: "Ernst Schumacher",
        comment: "I believe the best programs are simple, useful, and easy to understand.",
    },
    {
        id: 6,
        quote: "If you’re any good at all, you know you can be better.",
        author: "Lindsay Buckingham",
        comment: "There is always something that could be improved upon. Also parellel to the saying that the more you know, the more you realize you don't know anything at all.",
    },
    {
        id: 7,
        quote: "Programming is the only job I can think of where I get to be both an engineer and an artist. There's an incredible, rigorous, technical element to it, which I like because you have to do very precise thinking. On the other hand, it has a wildly creative side where the boundaries of imagination are the only real limitation.",
        author: "Andy Hertzfeld",
        comment: "This explains why it felt so natural to take up programming :)",
    },
    {
        id: 8,
        quote: "The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.",
        author: "Cargill's Rule",
        comment: "It's always the little things that make a big difference.",
    },
    {
        id: 9,
        quote: "One must learn by doing the thing; for though you think you know it, you have no certainty, until you try.",
        author: "Sophocles",
        comment: "Seeing it work is so much fun too!",
    },
    {
        id: 10,
        quote: "The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.",
        author: "Joseph Weizenbaum",
        comment: "Programming is truly a creative practice.",
    },
    {
        id: 11,
        quote: "The universe doesn't allow perfection",
        author: "Stephen Hawking",
        comment: "But you can get really close to it :)",
    },
];

// variables
const quoteBlock = document.querySelector(".quote");
const accordion = document.querySelector(".accordion");
const comment = document.querySelector(".panel").firstElementChild;

console.log("inside quotes");
let randNum = Math.floor(Math.random() * quotes.length);
let selectedQuote = quotes[randNum];
console.log(selectedQuote);
console.log(accordion);
console.log(comment)

accordion.innerHTML = `"${selectedQuote.quote}"<br> - ${selectedQuote.author}`
comment.innerHTML = `${selectedQuote.comment}`
