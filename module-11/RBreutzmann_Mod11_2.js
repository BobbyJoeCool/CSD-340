/*
    Breutzmann, Robert
    CSD 340 - Web Development with HTML and CSS
    Assignment 11.2
    Due Date: March 15th, 2026
*/

const ToDoList = [];

/**
 * Adds an item to the ToDoList array and then updates the display.
 */
function addToArray() {
    let inputBox = document.getElementById("list-entry");
    let input = inputBox.value;

    // If the entry box is empty, do nothing.
    if (input.trim() === "") {
        return;
    }

    ToDoList.push(input);
    alert(input + " added!");

    // Reset the entry box and display the updated list.
    inputBox.value = "";
    displayList();
}

/**
 * Finds the last item on the list and deletes it
 * after confirming with the user.
 */
function deleteLast() {
    // Checks to make sure the list has an item on it.
    if (ToDoList.length === 0) {
        alert("The list is already empty.");
        return;
    }

    let item = ToDoList[ToDoList.length - 1];

    // Confirms with user that this item is to be deleted.
    if (confirm("This will Delete " + item + "\nThis action cannot be undone!")) {
        ToDoList.pop();
        alert(item + " deleted!");
    }

    // Display the updated list.
    displayList()
}

/**
 * Sorts the ToDoList array alphabetically.
 */
function sortArray() {
    ToDoList.sort();
    alert("To Do List Sorted Alphabetically.");
    displayList();
}

/**
 * Runs the array through a for loop to display the array
 * formatted as an unordered list.
 */
function displayList() {
    let text = "<ul>";
    for (let i = 0; i < ToDoList.length; i++) {
        text += "<li>" + ToDoList[i] + "</li>";
    }
    text += "</ul>";
    
    document.getElementById("todo-list-display").innerHTML = text;
}

/**
 * Calls the function add when the user presses Enter
 * while inside the text entry box.
 */
document.getElementById("list-entry").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addToArray();
    }
});