# Activity/ Lecture7

**[Optional]** If what is being submitted is an individual Lab or Assignment. Otherwise, include a brief one paragraph description about the project.

* *Date Created*: 02 02 2025
* *Last Modification Date*: 03 02 2025
* *Lab URL*: https://git.cs.dal.ca/edoane/csci-3172/-/tree/main/activities/Lecture7
*https://web.cs.dal.ca/~edoane/csci3172/activities/lecture7/lecture7/csci-3172/activities/Lecture7



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


### script.js

*Lines ##5-21, 49-54*

```
const creatureSanctuary = [];

function addCreature(){
    const creatureName = document.getElementById('creatureName').value;
    const creatureType = document.getElementById('creatureType').value;
    const creatureHabitat = document.getElementById('creatureHabitat').value;

    const newCreature = {
        name: creatureName,
        type: creatureType,
        habitat: creatureHabitat
};

    creatureSanctuary.push(newCreature);
    document.getElementById('addCreatureForm').reset();
    displayCreature();
}

```

The code above was created by adapting the code from Instructor Gabriella Mosquera in her L7V3: JavaScript & Objects III (Live Lecture)

```
Copy and paste the snippet of code you are referencing

```
I used this snippet of code to get a baseline of the activity. I used to understand how to use the creature in the form. This also includes the other lines of code I mentioned

