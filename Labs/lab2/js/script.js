
const students = [
    {
        name: "Ella",
        grades: [100, 100, 99, 98]
    },
    {
        name: "Joe",
        grades: [77, 81, 89, 82]
    },
    {
        name: "Cathy",
        grades: [73, 71, 85, 76]
    },
    {
        name: "Laura",
        grades: [80, 91, 63, 78]
    },
    {
        name: "Aiden",
        grades: [95, 87, 92, 88]
    },
    {
        name: "Sophia",
        grades: [85, 79, 88, 90]
    },
    {
        name: "Sarah",
        grades: [70, 75, 80, 77]
    },
    {
        name: "Ben",
        grades: [90, 93, 85, 88]
    }
];

// Function to calculate average grade for a student
function calculateAverage(grades) {
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return Math.round(total / grades.length);
}

// Function to calculate letter grade based on Dalhousie average number grade
function calculateLetterGrade(average) {
    if (average >= 90) return 'A+';
    if (average >= 85) return 'A';
    if (average >= 80) return 'A-';
    if (average >= 77) return 'B+';
    if (average >= 73) return 'B';
    if (average >= 70) return 'B-';
    if (average >= 65) return 'C+';
    if (average >= 60) return 'C';
    if (average >= 50) return 'D';
    return 'F';
}

// Function to display the grade book
function displayGradeBook() {
    const tbody = document.querySelector('#grade-book tbody');
    students.forEach(student => {
        const avgNumber = calculateAverage(student.grades);
        const letterGrade = calculateLetterGrade(avgNumber);

        // Create a table row for each student
        const row = document.createElement('tr');
        row.innerHTML = `
          <td><a href="details.html?name=${student.name}" class="student-link">${student.name}</a></td>
            <td>${student.grades[0]}</td>
            <td>${student.grades[1]}</td>
            <td>${student.grades[2]}</td>
            <td>${student.grades[3]}</td>
            <td>${avgNumber}</td>
            <td>${letterGrade}</td>
        `;
        tbody.appendChild(row);
    });
}

// Initialize the grade book display
displayGradeBook();
