/* 

 Program: Computation of Grades using Function
 Programmer: Brian Christian Torrijos
 Section: BCS22
 Start Date: April 17,2023
 End Date: April 25, 2023

*/

function calculateGrades() {
  // Initialize variables to store student data
  let studentData = [];
  let studentCount = 5;

  // Iterate over each student and prompt for grades
  for (let i = 0; i < studentCount; i++) {
    let student = {};

    // Prompt for student name
    student.name = prompt(`Enter the name of student ${i+1} `);

    // Prompt for class participation
    let enablingTotal = 0;
    for (let j = 1; j <= 5; j++) {
      let enablingGrade = parseInt(prompt(`Enter enabling assessment ${j} for ${student.name} `));
      enablingTotal += enablingGrade;
    }
        student.enabling = parseInt((enablingTotal/5).toFixed(2));
    // Prompt for summative assessments
    let summativeTotal = 0;
    for (let j = 1; j <= 3; j++) {
      let summativeGrade = parseInt(prompt(`Enter summative assessment ${j} for ${student.name} `));
      summativeTotal += summativeGrade;
    } 
      student.summative = parseInt((summativeTotal/3).toFixed(2));
   
    // Prompt for final exam grade
    student.final = parseInt(prompt(`Enter final exam grade for ${student.name} `));

    // Calculate the grade based on formula
    student.grade = (student.enabling * 0.3) + (student.summative * 0.3) + (student.final * 0.4);

    // Calculate the letter grade based on the grade score
    if (student.grade >= 90) {
      student.letterGrade = 'A';
    } else if (student.grade >= 80) {
      student.letterGrade = 'B';
    } else if (student.grade >= 70) {
      student.letterGrade = 'C';
    } else if (student.grade >= 60) {
      student.letterGrade = 'D';
    } else {
      student.letterGrade = 'F';
    }

    // Push the student data to the array
    studentData.push(student);
  }

  // Display the student data in a table

  console.table(studentData);
}

calculateGrades();