document.addEventListener("DOMContentLoaded", function () {
    // Load users from localStorage or initialize an empty object
    let storedUsers = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : {};
    if (Array.isArray(storedUsers)) storedUsers = {};

    console.log("Loaded users from localStorage:", storedUsers); // Debugging output

    // Get form elements
    const registrationForm = document.getElementById("registration-form");
    const loginForm = document.getElementById("login-form");

    // Function to display messages
    function showMessage(element, text, type) {
        element.innerHTML = text;
        element.classList.remove("success", "error");
        element.classList.add(type);
        element.style.display = "block";
    }

    // Handle user registration
    if (registrationForm) {
        registrationForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirm-password").value;
            const message = document.getElementById("registration-message");

            // Validation rules for email, username, and password
            const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,8}$/;
            const usernameRegex = /^[A-Za-z][A-Za-z0-9_]*$/;
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;

            // Validate email format
            if (!emailRegex.test(email)) {
                showMessage(message, "Invalid email format!", "error");
                return;
            }

            // Validate username format
            if (!usernameRegex.test(username)) {
                showMessage(message, "Invalid username format!", "error");
                return;
            }

            // Validate password security
            if (!passwordRegex.test(password)) {
                showMessage(message, "Password must meet security requirements!", "error");
                return;
            }

            // Check if passwords match
            if (password !== confirmPassword) {
                showMessage(message, "Passwords do not match!", "error");
                return;
            }

            // Store new user if username is available
            if (!storedUsers.hasOwnProperty(username)) {
                storedUsers[username] = password;
                localStorage.setItem("users", JSON.stringify(storedUsers));
                console.log("User registered and saved in localStorage:", storedUsers);
                showMessage(message, "Registration successful! <a href='login.html'>Login here</a>", "success");
            } else {
                console.log("Username already exists.");
                showMessage(message, "Username already exists!", "error");
            }
        });
    }

    // Handle user login
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            storedUsers = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : {};
            if (Array.isArray(storedUsers)) storedUsers = {}; // Reload users from localStorage
            console.log("Loaded users before login attempt:", storedUsers);

            const username = document.getElementById("login-username").value;
            const password = document.getElementById("login-password").value;
            const message = document.getElementById("login-message");

            // Check if user exists
            if (!storedUsers.hasOwnProperty(username)) {
                console.log("User does not exist.");
                showMessage(message, "User does not exist!", "error");
                return;
            }

            // Verify password
            if (storedUsers[username] === password) {
                console.log("Login successful for:", username);
                showMessage(message, "Login successful!", "success");
            } else {
                console.log("Invalid password for:", username);
                showMessage(message, "Invalid username or password!", "error");
            }
        });
    }
});