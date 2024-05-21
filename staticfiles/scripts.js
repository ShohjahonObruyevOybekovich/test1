document.addEventListener("DOMContentLoaded", () => {
    const cookiesMessage = document.getElementById("cookiesMessage");
    const acceptCookiesButton = document.getElementById("acceptCookies");

    // Show the cookies message with animation
    setTimeout(() => {
        cookiesMessage.classList.add("active");
    }, 1000);

    // Handle cookies acceptance
    acceptCookiesButton.addEventListener("click", () => {
        cookiesMessage.style.opacity = 0;
        setTimeout(() => {
            cookiesMessage.style.display = "none";
        }, 500);
        // Optionally, you can set a cookie to remember the user's choice
        document.cookie = "cookiesAccepted=true; max-age=31536000; path=/";
    });

    // Check if cookies have been accepted
    if (document.cookie.includes("cookiesAccepted=true")) {
        cookiesMessage.style.display = "none";
    }
});
