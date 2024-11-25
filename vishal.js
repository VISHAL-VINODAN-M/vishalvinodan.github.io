const inputBox = document.getElementById("input-box");
const dateInput = document.getElementById("date-input");
const timeInput = document.getElementById("time-input");
const listContainer = document.getElementById("list-container");
const categoriesButtons = document.querySelectorAll('.sidebar .menu .task-btn'); // Category buttons
let selectedCategory = 'scheduled'; // Default category is scheduled

// Function to add a task
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
        return;
    }

    let li = document.createElement("li");
    li.classList.add(selectedCategory); // Add the selected category class to the task

    let taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.innerHTML = inputBox.value;
    li.appendChild(taskText);

    let dateTime = document.createElement("div");
    dateTime.className = "date-time";
    let dateValue = dateInput.value ? new Date(dateInput.value).toLocaleDateString() : new Date().toLocaleDateString();
    let timeValue = timeInput.value ? timeInput.value : new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    dateTime.textContent = `${dateValue}, ${timeValue}`;

    li.appendChild(dateTime);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // Delete button
    li.appendChild(span);

    listContainer.appendChild(li);
    saveData();

    inputBox.value = "";
    dateInput.value = "";
    timeInput.value = "";
}

// Save Data to Local Storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Load Data from Local Storage
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Filter Tasks Based on Category
function filterTasks() {
    const tasks = document.querySelectorAll('#list-container li');
    tasks.forEach(task => {
        if (task.classList.contains(selectedCategory) || selectedCategory === 'scheduled') {
            task.style.display = 'block'; // Show task if it matches category or if 'scheduled'
        } else {
            task.style.display = 'none'; // Hide task if it doesn't match
        }
    });
}

// Set the category when a category button is clicked
categoriesButtons.forEach(button => {
    button.addEventListener('click', function () {
        categoriesButtons.forEach(btn => btn.classList.remove('selected')); // Remove selection from other buttons
        button.classList.add('selected'); // Add selection to clicked button
        selectedCategory = button.dataset.category; // Update the selected category
        filterTasks(); // Filter tasks based on category
    });
});

// Click Events on List Container for Marking Tasks as Done or Deleting
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Mark task as done
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Delete task
        saveData();
    }
}, false);

// Display all tasks from local storage when the page loads
showTask();
// Function to redirect to settings page
function goToSettings() {
  window.location.href = "settings.html"; // Redirect to settings page
}
