const btn=document.getElementById("btn");
const output=document.querySelector(".output");

let quote=[
"Success is not final, failure is not fatal: It is the courage to continue that counts.",
"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
"The only way to achieve the impossible is to believe it is possible.",
"Your journey might be tough, but it will be worth it in the end.",
"Hard work beats talent when talent doesn't work hard.",
"Your attitude determines your direction.",
"Dream big, work hard, stay focused.",
"Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
"Every morning brings new potential, but only if you make the most of it.",
"The only limit to our realization of tomorrow will be our doubts of today.",
"Success is not in what you have, but who you are.",
"Strive for progress, not perfection.",
"Your time is limited, so don't waste it living someone else's life.",
"Be the change you wish to see in the world.",
"Don't watch the clock; do what it does. Keep going.",
"Challenges are what make life interesting, and overcoming them is what makes life meaningful.",
"Don't be afraid to give up the good to go for the great.",
"Success is stumbling from failure to failure with no loss of enthusiasm.",
"The only place where success comes before work is in the dictionary.",
"You are never too old to set another goal or to dream a new dream.",
"The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
"Your life does not get better by chance; it gets better by change.",
"The only way to do great work is to love what you do.",
"Don't wait for opportunity. Create it.",
"The future belongs to those who believe in the beauty of their dreams.",
"Success is how high you bounce when you hit the bottom.",
"If you are not willing to risk the usual, you will have to settle for the ordinary.",
"The only person you are destined to become is the person you decide to be.",
"You are never too young to dream big, and you are never too old to set a new goal.",
"Don't count the days; make the days count.",
"Believe you can and you're halfway there.",
"The only limit to our realization of tomorrow will be our doubts of today.",
"What lies behind us and what lies before us are tiny matters compared to what lies within us.",
"It always seems impossible until it's done.",
"Success is not just about making money. It's about making a difference.",
"The only person you should try to be better than is the person you were yesterday.",
"Don't stop when you're tired; stop when you're done.",
"Do something today that your future self will thank you for.",
"The road to success and the road to failure are almost exactly the same.",
"The best way to predict the future is to create it.",
"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
"You are the architect of your own destiny; you are the master of your own fate; you are behind the steering wheel of your life.",
"Success is not just about reaching the destination; it's also about enjoying the journey.",
"Life is 10% what happens to us and 90% how we react to it.",
"The harder the struggle, the more glorious the triumph.",
"Don't be afraid of change; it's leading you to a new beginning.",
"Success is the sum of small efforts, repeated day in and day out.",
"The only limit to our realization of tomorrow will be our doubts of today.",
"Believe in your infinite potential. Your only limitations are those you set upon yourself.",
"You have within you right now, everything you need to deal with whatever the world can throw at you."
]

btn.addEventListener("click",()=>{
    console.log("Clicked Bro");
    let random=Math.floor(Math.random()*quote.length);
    output.textContent=quote[random];
})

