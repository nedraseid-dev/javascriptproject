// Simple Student Grade Calculator

const studentName = "Nedra";
const grades = [85, 90, 78, 92, 88];

// Calculate average
let sum = 0;

for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
}

const average = sum / grades.length;

// Determine grade
let letterGrade;

if (average >= 90) {
    letterGrade = "A";
} else if (average >= 80) {
    letterGrade = "B";
} else if (average >= 70) {
    letterGrade = "C";
} else if (average >= 60) {
    letterGrade = "D";
} else {
    letterGrade = "F";
}

// Display results
console.log("Student Name:", studentName);
console.log("Grades:", grades.join(", "));
console.log("Average:", average.toFixed(2));
console.log("Letter Grade:", letterGrade);