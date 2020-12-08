const readlinesync=require('readline-sync');
const chalk=require('chalk')

var score=0;
var username=readlinesync.question(chalk.cyanBright.bold("May I have your name please?\n"))
console.log(chalk.bgYellowBright.black.bold('welcome '+username))
console.log(chalk.whiteBright.bgRed.bold("\n\nRules#"))
console.log(chalk.blackBright.bgGreen.bold("Hello guys!Here are the rules of this game:\n1.There are 10 questions in this game.\n2.5 question are option based and next 5 did not have options.\n3.If you choose the correct answer, you will gain 5 points and for the wrong answer there will be -3.\n4.Please be fair dont google it.\n\n"))

var topScorer=[
{
  name:"mohit",
  score:45,
},
{
  name:"roy",
  score:38
},
{
  name:'Smith',
  score:35
}];
  for(var num=0;num<=topScorer.length;num=num+1){
      console.log(topScorer[num])
      console.log("\n")
}

  

  
function gamequiz(question,answer){
  var userAnswer=readlinesync.question(chalk.bgWhiteBright.bold.rgb(90,60,100)(question));
  if (userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log(chalk.greenBright.bold("Boom!Yes You are right!"));
    score=score+5;
  }
  else{
    console.log(chalk.redBright.bold("oops! you are wrong!"))
    console.log(chalk.bgBlack.blueBright.bold('the correct answer of this question is :',answer));
    score=score-3;
  }
  console.log("Your score is : ",score);
  console.log(chalk.green("****************************************************************\n\n"))
}


    var question=[
    {
      question:'1.Which of the following is the capital of Arunachal Pradesh?
      A.Itanagar
      B.Dispur
      C.Imphal
      D.Panaji\n',


      answer:'a'
    },
    {
      question:'2.Which is the largest coffee producing state of India?
      A.Kerala
      B.Tamil Nadu
      C.Karnataka
      D. Arunachal Pradesh\n',

      answer:'c'
      },  
      {
      question:'3.If one bald person gets his haircut and spend 10Rs then how much Rs will be spend by 10 bald?
      A.10
      B.100
      C.0
      D.50\n',


      answer:'c'
      },
      {
      question:'4.A car is running @80kmph then how much time it takes to reach 80km? 
      A.1.5 Hour
      B.1 Hour
      C.8 Hours
      D.5 Hours\n',

      
      answer:'b'
       },
      {
      question:'5.when I was two year old my brother was half of my age and when I will be 100 years old what do you think how old would he be?
      A.25
      B.01
      C.50
      D.99\n',


      answer:'d'
      },
      {
      question:'6.Can you name a word which has all the vowels in it?',
      answer:'education'
      }, 
      {
        question:'7.Name the word which pronunciation remain same after removing its four letters?',
        answer:'q'
      },  
      {
      question:'8.How many times 7 comes from 1 to 100?',
      answer:'20'
      },  {
      question:'9.How many times you can subtract 2 from 50?',
      answer:'1'
      },
      {
      question:'10.Lets assume You have 4 dogs and 3 cats then how much legs do you have?(write number)',
      answer:'2'
      },     
  ];
   for(var i=0;i<question.length;i++){
      gamequiz(question[i].question,question[i].answer);
    }

    console.log(chalk.bgGray.hex('#fd3a69').bold("You final score is :",score))
    console.log(chalk.bgYellowBright.black.bold("Thank you for playing.You can share your screenshot !"))
   
   