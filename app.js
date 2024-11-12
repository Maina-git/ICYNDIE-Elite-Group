const toggleButton = document.getElementById("open");
const closeButton = document.getElementById("closebtn");
const mobileMenu = document.getElementById("mobile-menu");

toggleButton.addEventListener("click", () => {
    mobileMenu.style.display = "block";
    closeButton.style.display = "block";
    toggleButton.style.display = "none";
});


closeButton.addEventListener("click", () => {
    mobileMenu.style.display = "none";
    closeButton.style.display = "none";
    toggleButton.style.display = "flex";
});

