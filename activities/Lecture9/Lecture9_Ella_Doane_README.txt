# Activity lecture 9

**[Optional]** If what is being submitted is an individual Lab or Assignment. Otherwise, include a brief one paragraph description about the project.

* *Date Created*: 03 02 2025
* *Last Modification Date*: 03 02 2025
* *Lab URL*: https://git.cs.dal.ca/edoane/csci-3172/-/tree/main/activities/Lecture9
https://web.cs.dal.ca/~edoane/csci3172/activities/lecture9/csci-3172/activities/Lecture9




## Authors

If what is being submitted is an individual Lab or Assignment, you may simply include your name and email address. Otherwise list the members of your group.

* [Ella Doane](el675125@dal.ca) - (Student)



## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [IntelliJ](https://www.jetbrains.com/idea/) - IDE used
* [GitLab](https://git.cs.dal.ca/edoane) - Version control.
* [FileZilla](https://filezilla-project.org/) - FTP client used for file transfers



## Sources Used

If in completing your lab / assignment / project you used any interpretation of someone else's code, then provide a list of where the code was implemented, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details.


### File Name script.js, index.html, style.css


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Registration Form</title>
	 <!-- Bootstrap CSS -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<!-- Custom CSS -->
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<div class="container">
		<h1>Registration Form</h1>

		<form id="registrationForm">
			<div class="form-row">
				<div class="form-group col-md-6">
					<label for="firstName">First Name:</label>
					<input type="text" id="firstName" name="firstName" required class="form-control">
				</div>
				<div class="form-group col-md-6">
					<label for="lastName">Last Name:</label>
					<input type="text" id="lastName" name="lastName" required class="form-control">
				</div>
			</div>
			<div class="form-group">
				<label for="email">Email:</label>
				<input type="text" id="email" required class="form-control">
			</div>
			<div class="form-group">
				<label for="hobbies">Hobbies:</label>
				<div class="form-check form-check-inline">
					<label class="form-check-label" for="reading">Reading
					</label>
					<input type="checkbox" id="reading" name="hobbies" value="reading" class="form-check-input" >
					<label class="form-check-label" for="sports">Sports
					</label>
					<input type="checkbox" id="sports" name="hobbies" value="sports" class="form-check-input" >
					<label class="form-check-label" for="music">Music
					</label>
					<input type="checkbox" id="music" name="hobbies" value="music" class="form-check-input" >

				</div>
			</div>
			<button type="submit" class="btn btn-outline-primary btn-lg" id="submitButton">Register</button>
		</form>
	</div>
    <script src="js/script.js"></script>
</body>
</html>

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

```

The code above was created by adapting the code from Instructor Gabriella Mosquera in her L9V2: Handling Events

```

I used this snippet of code to get a baseline of the activity that we developed in lecture.




