
// Execute when browser is loaded.
window.onload = function(){

  // Queation1
  q1("Q1. Write a JavaScript program to display the current day and time in the following format.<br> Sample Output : Today is : Tuesday.<br> Current time is : 10 PM : 30 : 38");

  // Queation2
  q2( "Q2 : Lorem ipsum... ");

  // Queation3
  q3("Q3 : Lorem ipsum... ");

}


// Generate a component for the excercise
function quizComponentGenerator(inputText,outputText){

  // create 'div' with a class name for the Question-Text
  let div = document.createElement('div');
  div.setAttribute("class", "question-container");

  // create 'div' with a class name
  let divQueationText = document.createElement('div');
  divQueationText.setAttribute("class", "question-desc");
  divQueationText.innerHTML = inputText;

  //append a child
  div.appendChild(divQueationText);

  // create 'div' with a class name for the output
  let divOutput = document.createElement('div');
  divOutput.setAttribute("class", "output-container");
  div.appendChild(divOutput);

  let p_title = document.createElement('p');
  p_title.setAttribute("class", "output-title");
  p_title.innerHTML = "OUTPUT";
  let p_output = document.createElement('p');
  p_output.setAttribute("class", "output-text");
  p_output.innerHTML = outputText;

  divOutput.appendChild(p_title);
  divOutput.appendChild(p_output);

  document.body.appendChild(div);

}



//Q1
function q1(text){
let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth()+1;
  let daynum = today.getDate();
  let day  = today.getDay();
  let daylist = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  //ternary
  let prepand = (hour >= 12)? " PM ":" AM ";
  //set proper hour
  hour = (hour >= 12)? hour - 12: hour;

  //just right time of 0:0:0
  if (hour===0 && prepand===' PM '){
    if (minute===0 && second===0){
      hour=12;
      prepand=' Noon';
    } else{
      hour=12;
      prepand=' PM';
    }
  }

  //just right time of 0:0:0
  if (hour===0 && prepand===' AM '){
    if (minute===0 && second===0){
      hour=12;
      prepand=' Midnight';
    }else{
      hour=12;
      prepand=' AM';
    }
  }

  let output = "Today is : "+year+"/"+month+"/"+daynum+" ("+daylist[day]+")\n";
  output += "Current Time : "+hour + prepand + " : " + minute + " : " + second;

  quizComponentGenerator(text, output);

}



//Q2
function q2(text){
  let output = "Excepteur sint occaecat...";
  quizComponentGenerator(text,output);
}

//Q3
function q3(text){
  let output = "Excepteur sint occaecat...";
  quizComponentGenerator(text,output);
}
