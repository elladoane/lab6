

//in this script i added the remove creature function

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

function removeCreature(index) {
    creatureSanctuary.splice(index, 1);
    displayCreature();
}

//display or remove creature
function displayCreature() {
    const creatureDiv = document.getElementById('creatureSanctuary');
    creatureDiv.innerHTML = '';
    const list = document.createElement('ul');
    for (let i = 0; i < creatureSanctuary.length; i++) {
        const creature = creatureSanctuary[i];
        const listItem = document.createElement('li');
        listItem.textContent = `${creature.name} - ${creature.type} (Habitat: ${creature.habitat})`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('btn', 'btn-danger', 'ml-2');

        removeButton.addEventListener('click', () => removeCreature(i));

        listItem.appendChild(removeButton);
        list.appendChild(listItem);
    }
    creatureDiv.appendChild(list);
}
document.getElementById('addCreatureForm').addEventListener('submit',
    function(event) {
    event.preventDefault();
        addCreature();
    })
displayCreature()