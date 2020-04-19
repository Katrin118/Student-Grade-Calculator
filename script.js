function calculateGrade() {

  var attendace = 0;
  var homework = 0;
  var quiz = 0;
  var midterm = 0;

  var attendance_input = document.getElementById("attendance-grade");
  var homework_input = document.getElementById("homework-grade");
  var quiz_input = document.getElementById("quiz-grade");
  var midterm_input = document.getElementById("midterm-grade");

  if(attendance_input.value >= 0 && attendance_input.value <= 100){
    var attendance_grade = parseFloat(attendance_input.value);
  }
  var attendance_percent = parseInt(document.getElementById("attendance-percent").innerHTML);
  attendace = attendance_percent * attendance_grade/100;

  if(homework_input.value >= 0 && homework_input.value <= 100){
    var homework_grade = parseFloat(homework_input.value);
  }
  var homework_percent = parseInt(document.getElementById("homework-percent").innerHTML);
  homework = homework_percent * homework_grade/100;
 
  if(quiz_input.value >= 0 && quiz_input.value <= 100){
    var quiz_grade = parseFloat(quiz_input.value);
  }
  var quiz_percent = parseInt(document.getElementById("quiz-percent").innerHTML);
  quiz = quiz_percent * quiz_grade/100;

  if(midterm_input.value >= 0 && midterm_input.value <= 100){
    var midterm_grade = parseFloat(midterm_input.value);
  }
  var midterm_percent = parseInt(document.getElementById("midterm-percent").innerHTML);
  midterm = midterm_percent * midterm_grade/100;

  var currentGrade = attendace + homework + quiz + midterm;
  
  
  if(isNaN(currentGrade)){
    currentGrade = "Please insert something that is in the interval [0-100]";
  }
  

  document.getElementById("currentGrade").innerHTML = currentGrade;
}
