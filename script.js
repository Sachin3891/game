let ques = [
    {
    numb: 1,
    question: "How can we initialize an array in C language?",
    answer: "int arr[2] = {10, 20}",
    options: [
      "int arr[2]=(10, 20)",
      "int arr(2)={10, 20}",
      "int arr[2] = {10, 20}",
      "int arr(2) = (10, 20)"
    ]
  },
    {
    numb: 2,
    question: "Which of the following is the advantage of the array data structure?",
    answer: "Easier to access the elements in an array",
    options: [
      "Elements of an array cannot be sorted",
      "Index of the first element starts from 1.",
      "Easier to access the elements in an array",
      "Elements of mixed data types can be stored."
    ]
  },
    {
    numb: 3,
    question: "Which one of the following is the process of inserting an element in the stack?",
    answer: "Push",
    options: [
      "Insert",
      "Add",
      "Push",
      "None of the above"
    ]
  },
    {
    numb: 4,
    question: " Which data structure is mainly used for implementing the recursive algorithm?",
    answer: "Stack",
    options: [
      "Queue",
      "Stack",
      "Binary tree",
      "Linked list"
    ]
  },
    {
    numb: 5,
    question: "The minimum number of stacks required to implement a stack is __",
    answer: "2",
    options: [
      "1",
      "3",
      "2",
      "5"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....
    {
    numb: 6,
    question: " Which of the following principle does Queue use?",
    answer: "FIFO principle",
    options: [
      "LIFO principle",
      "FIFO principle",
      "Linear tree",
      "Ordered array"
    ]
  },
  {
    numb: 7,
    question: " In the linked list implementation of queue, where will the new element be inserted?",
    answer: "At the tail position of the linked list",
    options: [
      "At the middle position of the linked list",
      "At the head position of the linked list",
      "At the tail position of the linked list",
      "None of the above"
    ]
  },
  {
    numb: 8,
    question: " Which data structure is the best for implementing a priority queue?",
    answer: "Heap",
    options: [
      "Stack",
      "Linked list",
      "Array",
      "Heap"
    ]
  },
  {
    numb: 9,
    question: " Which of the following is the time complexity to search an element in the linked list?",
    answer: "O(n)",
    options: [
      "O(1)",
      "O(n)",
      "O(logn)",
      "O(nlogn)"
    ]
  },
  {
    numb: 10,
    question: "Which one of the following techniques is not used in the Binary tree?",
    answer: "Randomized traversal",
    options: [
      "Randomized traversal",
      "Preorder traversal",
      "Postorder traversal",
      "Inorder traversal"
    ]
  },
];
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");

const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); 
}

continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.add("activeQuiz"); 
    showQuetions(0); 
    queCounter(1); 
    startTimer(30); 
    startTimerLine(0); 
}
let timeValue =  30;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
const restart_quiz = result_box.querySelector(".buttons .restart");

restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); 
    result_box.classList.remove("activeResult"); 
    timeValue = 30; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); 
    queCounter(que_numb); 
    clearInterval(counter); 
    clearInterval(counterLine); 
    startTimer(timeValue); 
    startTimerLine(widthValue); 
    timeText.textContent = "Time Left"; 
    next_btn.classList.remove("show"); 
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ 
        que_count++;
        que_numb++; 
        showQuetions(que_count); 
        queCounter(que_numb); 
        clearInterval(counter); 
        clearInterval(counterLine); 
        startTimer(timeValue); 
        startTimerLine(widthValue); 
        timeText.textContent = "Time Left"; 
        next_btn.classList.remove("show"); 
    }else{
        clearInterval(counter); 
        clearInterval(counterLine); 
        showResult(); 
    }
}

function showQuetions(index){
    const que_text = document.querySelector(".que_text");
    
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; 
    option_list.innerHTML = option_tag; 
    
    const option = option_list.querySelectorAll(".option");
    
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }

}

let tickIconTag = '<div></div>';
let crossIconTag = '<div></div>';
var ansarr=[];
function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine); 
    var userAns = answer.textContent; 
    ansarr.push(userAns);
    console.log(ansarr);
    var correcAns = questions[que_count].answer; 
    const allOptions = option_list.children.length; 
    
    if(userAns == correcAns){ 
        userScore += 1; 
        answer.classList.add("correct"); 
        answer.insertAdjacentHTML("beforeend", tickIconTag); 
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); 
        answer.insertAdjacentHTML("beforeend", crossIconTag); 
        console.log("Wrong Answer");
        // for(i=0; i < allOptions; i++){
        //     if(option_list.children[i].textContent == correcAns){  
        //         option_list.children[i].setAttribute("class", "option correct"); 
        //         option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
        //         console.log("Auto selected correct answer.");
        //     }
        // }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); 
    }
    next_btn.classList.add("show"); 
}

function showResult(){
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.remove("activeQuiz"); 
    result_box.classList.add("activeResult"); 
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ 
        
        let scoreTag = '<span>and congrats! , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  
    }
    else if(userScore > 1){ 
        let scoreTag = '<span>and nice , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ 
        let scoreTag = '<span>and sorry , You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}
function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; 
        time--; 
        if(time < 9){ 
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; 
        }
        if(time < 0){ 
            clearInterval(counter); 
            timeText.textContent = "Time Off"; 
            const allOptions = option_list.children.length; 
            let correcAns = questions[que_count].answer; 
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ 
                    option_list.children[i].setAttribute("class", "option correct"); 
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); 
            }
            next_btn.classList.add("show"); 
        }
    }
}
function startTimerLine(time){
    counterLine = setInterval(timer, 58);
    function timer(){
        time += 1; 
        time_line.style.width = time + "px"; 
        if(time > 1098){ 
            clearInterval(counterLine); 
        }
    }
}
function queCounter(index){
   
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag; 
}

function show(){
  for(let i=0;i<10;i++){ 

     var abhuserAns =document.getElementById((i+1).toString());
     abhuserAns.innerHTML =ansarr[i];
    var abhQuestion = document.getElementById((i+11).toString());
    abhQuestion.innerHTML =ques[i].question; 
    var abhcorrectAns = document.getElementById(((i+11)*2).toString());
    abhcorrectAns.innerHTML=ques[i].answer;

    if(abhuserAns.innerText == abhcorrectAns.innerText){ 
      abhuserAns.style.color="green";
      
    }else{
      abhuserAns.style.color="red";
        
    }    
  }
}