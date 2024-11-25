// Dark Mode Toggle
document.getElementById("dark-mode-toggle").addEventListener("change", function (e) {
    if (e.target.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled"); // Save the user's preference
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled");
    }
});

// Check if Dark Mode is already enabled from localStorage
if (localStorage.getItem("darkMode") === "enabled") {
    document.getElementById("dark-mode-toggle").checked = true;
    document.body.classList.add("dark-mode");
}

// Notifications Toggle
document.getElementById("notifications-toggle").addEventListener("change", function (e) {
    if (e.target.checked) {
        alert("Notifications Enabled!");
        localStorage.setItem("notifications", "enabled");
    } else {
        alert("Notifications Disabled!");
        localStorage.setItem("notifications", "disabled");
    }
});

// Edit Profile Functionality (For now, just a placeholder alert)
function editProfile() {
    // You can implement an actual profile editing form here
    alert("Profile editing feature coming soon!");
}

// Save Settings (e.g., localStorage or backend API)
function saveSettings() {
    alert("Settings have been saved!");
    // You can implement actual saving functionality (e.g., saving to a database or API)
}
