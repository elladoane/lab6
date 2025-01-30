const students = [
    {
        name: "Ella",
        courses: [
            {
                assignments: [85, 90, 88],
                quizzes: [80, 75],
                exams: [90, 92]
            },
            {
                assignments: [75, 82, 89],
                quizzes: [70, 80],
                exams: [85, 88]
            },
            {
                assignments: [95, 97, 91],
                quizzes: [85, 89],
                exams: [91, 93]
            },
            {
                assignments: [78, 85, 92],
                quizzes: [80, 75],
                exams: [85, 87]
            }
        ],
        grades: [100, 100, 99, 98]
    },
    {
        name: "Cathy",
        courses: [
            {
                assignments: [77, 81, 89],
                quizzes: [60, 65],
                exams: [84, null] // Missing one exam grade
            },
            {
                assignments: [80, 90, 85],
                quizzes: [75, 78],
                exams: [87, 92]
            },
            {
                assignments: [88, 92, 85],
                quizzes: [78, 80],
                exams: [79, 83]
            },
            {
                assignments: [85, 90, 82],
                quizzes: [65, 72],
                exams: [88, 90]
            }
        ],
        grades: [73, 71, 85, 76]
    },
    {
        name: "Joe",
        courses: [
            {
                assignments: [77, 81, 89],
                quizzes: [60, 65],
                exams: [84, null] // Missing one exam grade
            },
            {
                assignments: [80, 90, 85],
                quizzes: [75, 78],
                exams: [87, 92]
            },
            {
                assignments: [78, 85, 80],
                quizzes: [70, 75],
                exams: [80, 85]
            },
            {
                assignments: [90, 92, 88],
                quizzes: [82, 85],
                exams: [88, 90]
            }
        ],
        grades: [77, 81, 89, 82]
    }
];

// Function to calculate weighted average for each assessment type
function calculateWeightedAverage(assignments, quizzes, exams) {
    // Calculate average for assignments
    const averageAssignments = assignments.reduce((sum, grade) => sum + grade, 0) / assignments.length;
    const weightedAssignments = averageAssignments * 0.3;

    // Calculate average for quizzes
    const averageQuizzes = quizzes.reduce((sum, grade) => sum + grade, 0) / quizzes.length;
    const weightedQuizzes = averageQuizzes * 0.2;

    // Calculate average for exams
    const averageExams = exams.reduce((sum, grade) => sum + grade, 0) / exams.length;
    const weightedExams = averageExams * 0.5;

    // Calculate total weighted average
    return weightedAssignments + weightedQuizzes + weightedExams;
}

// Get the student's name from the URL query string
const urlParams = new URLSearchParams(window.location.search);
const studentName = urlParams.get('name');

const student = students.find(s => s.name === studentName);

// Display student details
if (student) {
    let detailsHTML = `
        <h2>Details for ${studentName}</h2>
        <table border="1">
            <tr>
                <th>Course</th>
                <th>Assignments</th>
                <th>Quizzes</th>
                <th>Exams</th>
                <th>Weighted Average</th>
            </tr>`;

    // Iterate over each course
    student.courses.forEach((course, index) => {
        const weightedAvg = calculateWeightedAverage(course.assignments, course.quizzes, course.exams);
        detailsHTML += `
            <tr>
                <td>Course ${index + 1}</td>
                <td>${course.assignments.join(', ')}</td>
                <td>${course.quizzes.join(', ')}</td>
                <td>${course.exams.join(', ')}</td>
                <td>${weightedAvg.toFixed(2)}</td>
            </tr>`;
    });

    detailsHTML += `</table>`;
    document.getElementById('student-details').innerHTML = detailsHTML;
} else {
    document.getElementById('student-details').innerHTML = `<p>Not one of the 3 that can be clicked!</p>`;
}
