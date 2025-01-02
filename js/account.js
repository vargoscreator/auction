const fileInput = document.getElementById('fileImage');
const fileContent = document.querySelector('.fileImage__content');
const editButton = document.querySelector('.account__item-image--edit');

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            fileContent.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image">`;
        };
        reader.readAsDataURL(file);
    }
});

editButton.addEventListener('click', () => {
    fileInput.click();
});



document.querySelectorAll('.account__select-btn').forEach(button => {
    button.addEventListener('click', function() {
        const id = this.id; // Получаем id кнопки
        const targetElements = document.querySelectorAll(`[data-account="${id}"]`); // Ищем элементы с data-account, равным id

        if (targetElements.length === 0) return;

        document.querySelectorAll('.account__content-result').forEach(el => {
            el.classList.remove('active');
        });

        targetElements.forEach(element => {
            element.classList.add('active');
        });

        document.querySelectorAll('.account__select-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        this.classList.add('active');
    });
});