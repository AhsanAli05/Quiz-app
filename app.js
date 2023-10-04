const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: 2
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Venus", "Earth", "Mars", "Jupiter"],
        correctAnswer: 2
    },
    {
        question: "What is the largest mammal on Earth?",
        options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
        correctAnswer: 2
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: 1
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Leo Tolstoy"],
        correctAnswer: 0
    }
    // Add more questions here
];
const question = document.querySelector(".question");
let options1 = document.querySelector("#option1")
let options2 = document.querySelector("#option2")
let options3 = document.querySelector("#option3")
let options4 = document.querySelector("#option4")
let submit = document.querySelector("#submit");

let showScore = document.querySelector("#showScore"); 
let answers = document.querySelectorAll(".answer"); // for getting the all options
let score = 0; // for count score

let questionCount = 0 ;// for no of questions
const loadQustion = () =>{
    let questionList = quizQuestions[questionCount]; // call  quiQuestion object 
    question.innerHTML = questionList.question;
    options1.innerHTML = questionList.options[0];
    options2.innerHTML = questionList.options[1];
    options3.innerHTML = questionList.options[2];
    options4.innerHTML = questionList.options[3];
}
loadQustion();
function selectedOptions() {
    let answer ;
    answers.forEach((currentAnw)=>{ // option value is selected answer by user
        if(currentAnw.checked){
            answer = currentAnw.id; /// get id of that option 
        }
    });
    return answer; 
}
let deSelectAll = ()=>{
    answers.forEach((optValue)=>{
        optValue.checked = false
    });
}


submit.addEventListener("click",()=>{
    let selectedOpt = selectedOptions() // id of selected option by user
    let correctOpt = `ans${quizQuestions[questionCount].correctAnswer + 1}`; // Correct option ID 
    if(selectedOpt === correctOpt ){
        
        score++;
    
    }
    questionCount++; // to get new question
    deSelectAll();
    if(questionCount < quizQuestions.length ){
        loadQustion();
    }
    else{
        showScore.innerHTML = `
        <h3> you score ${score} /${quizQuestions.length} </h3>
        <button class="btn" onclick = "location.reload()">play again</button> 
        `;
        showScore.classList.remove("scoreArea");
    }
    
    
});