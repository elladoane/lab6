
const form = document.getElementById('registrationForm');
const submitButton = document.getElementById('submitButton');


const inputFields = ['firstName', 'lastName', 'email'];

// Function to change background color on focus and blur
function handleFocusBlur(event) {
    const inputElement = event.target;

    if (event.type === 'focus') {
        inputElement.style.backgroundColor = '#f0f8ff';
    } else if (event.type === 'blur') {
        inputElement.style.backgroundColor = '#ffffff';
    }
}

// Loop through input fields and add event listeners for focus and blur
inputFields.forEach(id => {
    const inputField = document.getElementById(id);
    inputField.addEventListener('focus', handleFocusBlur);
    inputField.addEventListener('blur', handleFocusBlur);
});


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;

    const hobbiesCheckboxes = document.querySelectorAll('input[name="hobbies"]:checked');
    console.log(hobbiesCheckboxes);

    const hobbies = Array.from(hobbiesCheckboxes).map(checkbox => checkbox.value);

    const user = {
        firstName,
        lastName,
        email,
        hobbies
    };
    console.log(user);

    const uniqueHobbies = new Set(hobbies);
    console.log('Unique Hobbies:', Array.from(uniqueHobbies));

    const users = new Map();
    users.set(email, user);
    console.log(users);

    form.classList.add('success');
    form.reset();
});
