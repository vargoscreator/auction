document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password");
    const toggleButton = passwordInput.nextElementSibling;
    const svgIcon = toggleButton.querySelector("svg");
    const imgIcon = toggleButton.querySelector("img");

    // По умолчанию скрываем картинку
    imgIcon.style.display = "none";

    toggleButton.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            // Показать пароль
            passwordInput.type = "text";
            svgIcon.style.display = "none";
            imgIcon.style.display = "block";
        } else {
            // Скрыть пароль
            passwordInput.type = "password";
            svgIcon.style.display = "block";
            imgIcon.style.display = "none";
        }
    });
});
