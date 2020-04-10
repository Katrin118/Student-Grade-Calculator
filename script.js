function calculateGrade() {

  var attendace = 0
  var hw = 0
  var quiz = 0
  var midterm = 0


  var attendance_percent = parseInt(document.getElementById("attendance-percent").innerHTML)

  var attendance_grade = parseFloat(document.getElementById("attendance-grade").value)  

  attendace = attendance_percent * attendance_grade/100

  var currentGrade = attendace + hw + quiz + midterm
  console.log(currentGrade)

  document.getElementById("currentGrade").innerHTML = currentGrade
}
