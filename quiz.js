let questionBook = [
    {
        id : "qes 1",
        question : "What is the full form of JS ?",
        options  : ["Java Science","JavaScript","Java Source","Java Selenium"],
        CorrectAnswer : "JavaScript"
    },
    {
        id : "qes 2",
        question : "What is the full form of Dom ?",
        options  : ["Document Object Model","Document Object Module","Document Oriented Model","Document Opps Model"],
        CorrectAnswer : "Document Object Model",
    },
    {
        id : "qes 3",
        question : "What is the full form of Bom ?",
        options  : ["Browser Object Model","Brave Object Model","Browser Object Module","Browser Oriented Model"],
        CorrectAnswer : "Browser Object Model",
    },
    {
        id : "qes 4",
        question : "What is the full form of TDZ ?",
        options  : ["Temporal Dead Zoned","Temporal Dead Zone","Time Dead Zone","Temporary Dead Zone"],
        CorrectAnswer : "Temporal Dead Zone",
    },
    {
        id : "qes 5",
        question : "What is the full form of ES ?",
        options  : ["Engineering Science","Ecma Science","EcmaScript","None of these"],
        CorrectAnswer : "EcmaScript",
    }
];

let questionElement = document.getElementById("question");
let optionElement = document.getElementById("option");
let scoreElement = document.getElementById("score");
let currentQuestion = 0;
let score =0;
// alert("Total 5 Question")
// alert("")
function displayQuestion(){
    let {id,question,options,CorrectAnswer}=questionBook[currentQuestion];
    console.log(id);
    console.log(question);
    console.log(options);
    console.log(CorrectAnswer); 

    questionElement.textContent=question;

    // options.shuffleQuestions([...options]);

    options.map((opt,i)=>{
    let btn = document.createElement("button")
    btn.textContent=opt;
    btn.setAttribute("class","optionButtons");
    optionElement.append(btn);

    btn.addEventListener("click",()=>{
        if(opt==CorrectAnswer){
            btn.style.backgroundColor="green";
            score += 1;
        }else{
            btn.style.backgroundColor="red";
            score -= 0.25;
        }
      //  nextQuestion();
        // console.log(score);
        scoreElement.textContent=`Score : ${score}/${questionBook.length}`

        let allbtn = document.querySelectorAll(".optionButtons");
        allbtn.forEach((b)=>b.disabled=true);  //! .disabled -- default is false, 

        setTimeout(()=>{
            nextQuestion();
        },500)
    })
})
}
displayQuestion();

function nextQuestion(){

    currentQuestion++;
    optionElement.textContent="";
    if(currentQuestion==questionBook.length){
        questionElement.textContent="Quiz Completed Successfully 🗽";
    }else
        displayQuestion();
}

function shuffle(arr)
{
    for(let i=arr.length-1;i>0;i--){
        let j = Math.floor(Math.random()*(i+1));
        [arr[i],arr[j]]=[arr[j],arr[i]]
    }
    return arr;
}

alert("Total Questions = 5");
alert("1 Mark for correct answer and -0.25 for wrong answer" )




