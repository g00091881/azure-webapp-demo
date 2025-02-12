document.addEventListener("DOMContentLoaded", function () {
    // Alert when clicking assignment buttons
    document.querySelectorAll(".project-item button").forEach(button => {
        button.addEventListener("click", function () {
            alert("You are about to view an assignment!");
        });
    });

    // Dark mode toggle button
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "Toggle Dark Mode";
    toggleButton.style.margin = "10px";
    document.body.prepend(toggleButton);

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});
