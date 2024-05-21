document.addEventListener("DOMContentLoaded", () => {
    const cookiesMessage = document.getElementById("cookiesMessage");
    const acceptCookiesButton = document.getElementById("acceptCookies");
    const learnMoreLink = document.getElementById("learnMoreLink");
    const learnMoreSection = document.getElementById("learnMoreSection");

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

    // Show Learn More section
    learnMoreLink.addEventListener("click", (e) => {
        e.preventDefault();
        learnMoreSection.style.display = "block";
    });
});
