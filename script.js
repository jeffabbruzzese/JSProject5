// Questions that will be asked
const Questions = [{
    q: "How many Superbowls have the NYJ won?",
    a: [{ text: "3", isCorrect: false },
    { text: "2", isCorrect: false },
    { text: "1", isCorrect: true },
    { text: "0", isCorrect: false }
    ]
 
},
{
    q: "Who out of these Jets players has their number retired?",
    a: [{ text: "Nick Mangold", isCorrect: false, isSelected: false },
    { text: "Mark Sanchez", isCorrect: false },
    { text: "Darelle Revis", isCorrect: false },
    { text: "Joe Namath", isCorrect: true }
    ]
 
},
{
    q: "What were the New York Jets originally called?",
    a: [{ text: "Flyers", isCorrect: false },
    { text: "Bulldogs", isCorrect: false },
    { text: "Titans", isCorrect: true },
    { text: "Ballers", isCorrect: false }
    ]
 
}
 
]
 
let currQuestion = 0
let score = 0
 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
 
loadQues();
 
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}!`
}
 
 
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}