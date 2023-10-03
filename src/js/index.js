// Filter item opening
const checkboxes = document.querySelectorAll('.smartphones-filter-item__heading');
const dropDownArrow = document.querySelectorAll('.drop-down-arrow');

checkboxes.forEach((element, index) => {
    element.addEventListener('click', () => {
        dropDownArrow[index].classList.toggle('active');
    });
})

// Display filters on mobile
const filter = document.querySelector('.smartphones-filter');
const filterBtn = document.querySelector('.smartphones-header__mobile-filter-btn');

filterBtn.addEventListener('click', () => filter.classList.add('active'));

document.addEventListener('click', (event) => {
    const isClickInside = filter.contains(event.target);
    const isClickFilterBtn = filterBtn.contains(event.target)

    if (!isClickInside && !isClickFilterBtn) {
        filter.classList.remove('active');
    }
})