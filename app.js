let bangla = 80;
let english = 80;
let math = 90;
let science = 85;
let socialScience = 80;
let totalMarks = bangla + english + math + science + socialScience;
let averageMarks = totalMarks / 5;
let percentage = (totalMarks / 500) * 100;
let message = "";

if (averageMarks >= 80) {
    message = "YOU GOT GPA 5 and " + percentage.toFixed(2) + "%.";
} else if (averageMarks >= 70) {
    message = "YOU GOT GPA 4 and " + percentage.toFixed(2) + "%.";
} else if (averageMarks >= 60) {
    message = "YOU GOT GPA 3 and " + percentage.toFixed(2) + "%.";
} else if (averageMarks >= 50) {
    message = "YOU GOT GPA 2 and " + percentage.toFixed(2) + "%.";
} else if (averageMarks >= 40) {
    message = "YOU GOT GPA 1 and " + percentage.toFixed(2) + "%.";
} else {
    message = "YOU FAILED and " + percentage.toFixed(2) + "%.";
}

console.log(message);

document.getElementById("result-text").innerText = message;



