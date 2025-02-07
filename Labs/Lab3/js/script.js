const inventory = [
    {
        name: "Yacht",
        type: "Luxury",
        price: 1000000,
        quantity: 3,
        description: "A luxurious yacht for high-end cruising."
    },
    {
        name: "Canoe",
        type: "Rowing",
        price: 500,
        quantity: 15,
        description: "A small, narrow boat for paddling."
    },
    {
        name: "Sailboat",
        type: "Sailing",
        price: 35000,
        quantity: 7,
        description: "A boat powered primarily by sails."
    },
    {
        name: "Speedboat",
        type: "Motorized",
        price: 25000,
        quantity: 5,
        description: "A fast motorized boat for thrilling rides on the water."
    },
    {
        name: "Catamaran",
        type: "Sailing",
        price: 75000,
        quantity: 4,
        description: "A multi-hull boat known for its stability and comfort."
    },
    {
        name: "Rowboat",
        type: "Rowing",
        price: 300,
        quantity: 10,
        description: "A small boat for two people, powered by oars."
    },
    {
        name: "Fishing Boat",
        type: "Fishing",
        price: 12000,
        quantity: 8,
        description: "A boat equipped for fishing, including storage for fish and gear."
    },
    {
        name: "Submarine",
        type: "Underwater",
        price: 2000000,
        quantity: 2,
        description: "A watercraft capable of underwater operations."
    }
];


// Function to list all items in the inventory
function listItems() {
    const inventoryList = document.getElementById('inventory-list');
    inventoryList.innerHTML = '';

    inventory.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - ${item.type} - $${item.price} - Quantity: ${item.quantity} - ${item.description} `;

        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.onclick = () => removeItem(index);

        li.appendChild(removeButton);
        inventoryList.appendChild(li);
    });
}

// Function to remove an item from the inventory
function removeItem(index) {
    inventory.splice(index, 1);
    listItems();
}

// Function to add a new item to the inventory
document.getElementById('add-item-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('boat-name').value;
    const type = document.getElementById('boat-type').value;
    const price = parseFloat(document.getElementById('boat-price').value);
    const quantity = parseInt(document.getElementById('boat-quantity').value, 10);
    const description = document.getElementById('boat-description').value;

    // Add new boat to the inventory
    inventory.push({
        name,
        type,
        price,
        quantity,
        description
    });

    document.getElementById('add-item-form').reset();
    listItems();
});

// Function to search for boats based on the query
document.getElementById('search-btn').addEventListener('click', function() {
    const query = document.getElementById('search-query').value.toLowerCase();
    const filteredInventory = inventory.filter(item =>
        item.name.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query)
    );
    displayInventory(filteredInventory);
});

// Function to display the inventory
function displayInventory(inventoryList) {
    const inventorySection = document.getElementById('inventory-list');
    inventorySection.innerHTML = '';

    inventoryList.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - ${item.type} - $${item.price} - Quantity: ${item.quantity} - ${item.description}`;

        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.onclick = () => removeItem(index);
        li.appendChild(removeButton);
        inventorySection.appendChild(li);
    });
}


// Function to calculate the total value of the inventory
document.getElementById('calculate-total-btn').addEventListener('click', function() {
    const totalValue = inventory.reduce((total, item) => total + (item.price * item.quantity), 0);
    document.getElementById('total-value').innerText = `Total Inventory Value: $${totalValue}`;
});

// Function to find and highlight duplicate items
function findDuplicates() {
    const seen = new Set();
    const duplicates = new Set();

    // Loop through the inventory to find duplicates
    inventory.forEach(item => {
        if (seen.has(item.name)) {
            duplicates.add(item.name);
        } else {
            seen.add(item.name);
        }
    });

    // Highlight duplicates on the page
    const inventoryList = document.getElementById('inventory-list');
    const listItems = inventoryList.getElementsByTagName('li');

    // Loop through the list items and highlight duplicates
    for (let i = 0; i < listItems.length; i++) {
        const itemName = listItems[i].innerHTML.split(' - ')[0];
        if (duplicates.has(itemName)) {
            listItems[i].style.backgroundColor = 'yellow';
        } else {
            listItems[i].style.backgroundColor = '';
        }
    }
}

listItems();
findDuplicates();

// Add an event listener to recheck for duplicates when a new item is added
document.getElementById('add-item-form').addEventListener('submit', function() {
    setTimeout(() => { findDuplicates(); }, 200);
});
