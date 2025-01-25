
// Create an array of possible answers
const magic8BallAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes, definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don’t count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

const fortuneCookieSayings = [
    "Do not be afraid of competition.",
    "An exciting opportunity lies ahead of you.",
    "You love peace.",
    "Get your mind set…confidence will lead you on.",
    "You will always be surrounded by true friends.",
    "Sell your ideas—they have exceptional merit.",
    "You should be able to undertake and complete anything.",
    "You are kind and friendly.",
    "You are wise beyond your years.",
    "Your ability to juggle many tasks will take you far.",
    "A routine task will turn into an enchanting adventure.",
    "Beware of all enterprises that require new clothes.",
    "Be true to your work, your word, and your friend.",
    "Goodness is the only investment that never fails.",
    "A journey of a thousand miles begins with a single step.",
    "Forget injuries; never forget kindnesses.",
    "Respect yourself and others will respect you.",
    "A man cannot be comfortable without his own approval."
];

// Create a function to fetch the question the user has asked
function getAnswer() {
    const allAnswers = [...magic8BallAnswers, ...fortuneCookieSayings];
    const randomIndex = Math.floor(Math.random() * allAnswers.length);
    return allAnswers[randomIndex];
}
function askQuestion() {
    const questionInput = document.getElementById('userQuestion');
    const answerOutput = document.getElementById('answer');
    const question = questionInput.value.trim();

    // Our function should also check from an empty value
    if (question === "") {
        answerOutput.textContent = "Please ask a question!";
        return;
    }

// Select a random answer from your array
    const answer = getAnswer();

    // Display the question and answer back to the user
    answerOutput.textContent = `🎱 ${answer}`;
    console.log(`Question: ${question} | Answer: ${answer}`);
    questionInput.value = "";
}

// And, log the question and answer to the console
document.getElementById('askButton').addEventListener('click', askQuestion);

