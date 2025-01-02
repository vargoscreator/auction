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
