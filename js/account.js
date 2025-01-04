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




document.querySelectorAll(".account__content-table").forEach((tableContainer) => {
    const table = tableContainer.querySelector("table");
    const selectAllCheckbox = table.querySelector("thead input + span");
    const rowCheckboxes = table.querySelectorAll("tbody .row-checkbox");
    if(selectAllCheckbox && rowCheckboxes){
        selectAllCheckbox.addEventListener("click", () => {
            const checkbox = selectAllCheckbox.previousElementSibling;
            const isChecked = !checkbox.checked;
            rowCheckboxes.forEach((checkbox) => {
                checkbox.checked = isChecked;
            });
        });
        rowCheckboxes.forEach((checkbox) => {
          checkbox.addEventListener("change", () => {
            if (!checkbox.checked) {
              selectAllCheckbox.checked = false;
            } else if (
              Array.from(rowCheckboxes).every((checkbox) => checkbox.checked)
            ) {
              selectAllCheckbox.checked = true;
            }
          });
        });
    }

});
  
const spanElements = document.querySelectorAll('.account__content-table table input + span');
spanElements.forEach(span => {
    span.addEventListener('click', function() {
      const checkbox = this.previousElementSibling;
      checkbox.checked = !checkbox.checked; 
    });
});