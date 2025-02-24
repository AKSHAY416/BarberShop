// Check if user is logged in and update UI
document.addEventListener("DOMContentLoaded", function () {
    updateUserStatus();
});

// Handle login/logout button click
document.getElementById("loginLogoutBtn").addEventListener("click", function () {
    let isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
        // Log out user
        localStorage.setItem("isLoggedIn", "false");
        localStorage.removeItem("userName");
        localStorage.removeItem("userPic");
        alert("You have logged out.");
        window.location.reload();
    } else {
        // Redirect to login page
        window.location.href = "Login.html";
    }
});

// Handle Book Now button click
document.getElementById("bookNowBtn").addEventListener("click", checkBooking);

// Handle Hero Book button click
document.getElementById("heroBookBtn").addEventListener("click", checkBooking);

// Check user login status and update navbar
function updateUserStatus() {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    let userName = localStorage.getItem("userName") || "Guest";
    let userPic = localStorage.getItem("userPic") || "default-user.png";

    document.getElementById("userName").innerText = isLoggedIn === "true" ? userName : "Guest";
    document.getElementById("userPic").src = isLoggedIn === "true" ? userPic : "default-user.png";

    // Change button to Logout if logged in
    let loginLogoutBtn = document.getElementById("loginLogoutBtn");
    if (isLoggedIn === "true") {
        loginLogoutBtn.innerText = "Logout";
        loginLogoutBtn.onclick = function () {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("userName");
            localStorage.removeItem("userPic");
            alert("Logged out successfully!");
            location.reload();
        };
    } else {
        loginLogoutBtn.innerText = "Login";
        loginLogoutBtn.onclick = function () {
            window.location.href = "login.html";
        };
    }
}

// Check login status before booking
function checkBooking() {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
        alert("Redirecting to Booking Page...");
        window.location.href = "booking.html";
    } else {
        alert("You need to log in first!");
        window.location.href = "login.html";
    }
}

// Add event listeners to all "Book Now" buttons
document.querySelectorAll(".bookNowBtn").forEach(button => {
    button.addEventListener("click", checkBooking);
});

// Run on page load
updateUserStatus();
