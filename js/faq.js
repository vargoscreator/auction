const faqItems = document.querySelectorAll(".faqPage__item h3");

faqItems.forEach(item => {
    item.addEventListener("click", () => {
        const parentBlock = item.closest(".faqPage__item");
        document.querySelectorAll(".faqPage__item.active").forEach(activeItem => {
            if (activeItem !== parentBlock) {
                activeItem.classList.remove("active");
            }
        });
        parentBlock.classList.toggle("active");
    });
});
