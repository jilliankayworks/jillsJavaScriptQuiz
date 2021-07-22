//elements to get from the document 
//Selects elements by class
const startBtn = document.querySelector('#start-button')
const timeLeft = document.querySelector('#seconds-left')
const questionContent = document.querySelector('#question')
const choiceContent1 = document.querySelector("#choice1")
const choiceContent2 = document.querySelector("#choice2")
const choiceContent3 = document.querySelector("#choice3")
const choiceContent4 = document.querySelector("#choice4")
// const answer1 = document.querySelector("#answer1")
// const answer2 = document.querySelector("#answer1")
// const answer3 = document.querySelector("#answer1")
// const answer4 = document.querySelector("#answer1")
const timeStart = 60;

//global var allows ++
var index = 0
let randomQuestion = []
let questionsAll = [
    {question: "How do you store objects inside arrays?",
    choice: ["by surrounding them with ()","by using {} and ,","surround every word in []","you cannot store objects in arrays"],
    correctAnswer: "by using {} and ,"
    },

    {
    question: "What does the .splice() method do?",
    choice: ["cuts arrays in half","cuts objects of an array in half","doubles all objects in an array","changes the contents of an array by removing or replacing existing elements"],
    correctAnswer: "changes the contents of an array by removing or replacing existing elements"
    },

    {
    question: "How can you find how many items are in an Array",
    choice: ["by surrounding them with ()","count them","use array.length","use array.count"],
    correctAnswer: "use array.length"
    },

    {
    question: "Which of the following is true?",
    choice: ["booleans are true/false data types","a string is data type with text in quotes","objects can contain multiple properties","all of the above"],
    correctAnswer:"all of the above"
    } ]
   
//timer begins when clicked 
function countDown() {
    var timeInterval = setInterval(function () {
            timeStart--;
            timeLeft.textContent = timeStart; 
            if (timeStart <= 0){
            clearInterval(timeInterval);
}           
    }, 1000);
}

// function stopWatch {
//         clearTimeout(countDown(stopWatch));
//         if (timeStart <= 0)}var 
//finalTime = localStorage.setItem("timeStart", timeStart);
//console.log(finalTime)

//do i need to return the value of countDown at the end of the function 
var getTimeLeft = localStorage.getItem("timeLeft")
//increase idex of question after click 
//get new question get the answers 

function getRandomQuestion() {
    //remove new question from the array 
   var newIndex = questionsAll[index];
   questionContent.innerText = newIndex.question;
   choiceContent1.innerText = newIndex.choice[0];
   choiceContent2.innerText = newIndex.choice[1];
   choiceContent3.innerText = newIndex.choice[2];
   choiceContent4.innerText = newIndex.choice[3];
//overides the value of the html so we can get an answer(true)
//button has text but no value 
//.value gives button a value html has no value 
   choiceContent1.value = newIndex.choice[0];
   choiceContent2.value = newIndex.choice[1];
   choiceContent3.value = newIndex.choice[2];
   choiceContent4.value = newIndex.choice[3];

//    answer1.value = newIndex.correctAnswer[0];
//    answer2.value = newIndex.correctAnswer[1];
//    answer3.value = newIndex.correctAnswer[2];
//    answer4.value = newIndex.correctAnswer[3];

   console.log(newIndex)
   console.log(choiceContent1.value)

}
    

startBtn.addEventListener('click',function() {    
    countDown();   
    getRandomQuestion();
     
});

choiceContent1.addEventListener('click', function(){
    if (questionsAll[index].correctAnswer === choiceContent1.value)
    index++;
    else if (questionsAll[index].correctAnswer !== choiceContent1.value){
    timeStart = timeStart - 10;
    index++;
    } 
    //if not true this will not render 
    if (questionsAll.length <= index)
    return 

    getRandomQuestion() 
    //go to hs page?    
})
choiceContent2.addEventListener('click', function(){
    if (questionsAll[index].correctAnswer === choiceContent2.value)
    index++;
    else if (questionsAll[index].correctAnswer !== choiceContent2.value){
    timeStart = timeStart - 10;
    index++;
    } 
    //if not true this will not render 
    if (questionsAll.length <= index)
    return 

    getRandomQuestion()      
})

choiceContent3.addEventListener('click', function(){
    if (questionsAll[index].correctAnswer === choiceContent3.value)
    index++;
    else if (questionsAll[index].correctAnswer !== choiceContent3.value){
    timeStart = timeStart - 10;
    index++;
    } 
 //if not true this will not render 
    if (questionsAll.length <= index)
    return 
    getRandomQuestion()   
    
})

choiceContent4.addEventListener('click', function(){
    if (questionsAll[index].correctAnswer === choiceContent4.value)
    index++;
    else if (questionsAll[index].correctAnswer !== choiceContent4.value){
    timeStart = timeStart - 10;
    index++;
    } 
     //if not true this will not render 
    if (questionsAll.length <= index)
    return 
        
})
