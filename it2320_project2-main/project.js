// Variables to keep track of quantities
let classicLemonadeQuantity = 0;
let strawberryLemonadeQuantity = 0;
let specialLimeadeQuantity = 0;

// Function to add an item to the order
function addToOrder(item) {
    switch (item) {
        case 0: // Classic Lemonade
            classicLemonadeQuantity++;
            break;
        case 1: // Strawberry Lemonade
            strawberryLemonadeQuantity++;
            break;
        case 2: // Special Limeade
            specialLimeadeQuantity++;
            break;
        default:
            break;
    }

    // Display the items in the list
    displayItems();
}

// Function to remove an item from the order
function removeFromOrder(item) {
    switch (item) {
        case 0: // Classic Lemonade
            if (classicLemonadeQuantity > 0) {
                classicLemonadeQuantity--;
            }
            break;
        case 1: // Strawberry Lemonade
            if (strawberryLemonadeQuantity > 0) {
                strawberryLemonadeQuantity--;
            }
            break;
        case 2: // Special Limeade
            if (specialLimeadeQuantity > 0) {
                specialLimeadeQuantity--;
            }
            break;
        default:
            break;
    }

    // Display the items in the list
    displayItems();
}

// Function to clear all items from the order
function clearAllItems() {
    classicLemonadeQuantity = 0;
    strawberryLemonadeQuantity = 0;
    specialLimeadeQuantity = 0;

    // Display the items in the list
    displayItems();
}

// Function to display items in the list
function displayItems() {
    const itemsList = $('#itemsList');
    itemsList.empty();

    // Display Classic Lemonade
    if (classicLemonadeQuantity > 0) {
        itemsList.append(`<li>Classic Lemonade: ${classicLemonadeQuantity} - $${classicLemonadeQuantity * 5.00}</li>`);
    }

    // Display Strawberry Lemonade
    if (strawberryLemonadeQuantity > 0) {
        itemsList.append(`<li>Strawberry Lemonade: ${strawberryLemonadeQuantity} - $${strawberryLemonadeQuantity * 6.00}</li>`);
    }

    // Display Special Limeade
    if (specialLimeadeQuantity > 0) {
        itemsList.append(`<li>Special Limeade: ${specialLimeadeQuantity} - $${specialLimeadeQuantity * 8.00}</li>`);
    }

    // Display total dollars
    const totalDollars = classicLemonadeQuantity * 5.00 + strawberryLemonadeQuantity * 6.00 + specialLimeadeQuantity * 8.00;
    $('#totalDollars').text(`Total: $${totalDollars.toFixed(2)}`);
}

// Document ready function
$(document).ready(function () {
    // Display items on page load
    displayItems();
});
