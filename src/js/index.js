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
const overlay = document.querySelector('.overlay');

const toggleFilterShowing = (isShow) => {
    if (isShow) {
        filter.classList.add('active');
        document.body.classList.add('no-scroll');
        overlay.style.opacity = '1';
        overlay.style.zIndex = '101';
    } else {
        filter.classList.remove('active');
        document.body.classList.remove('no-scroll');
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.zIndex = '-1';
        }, 300);
    }
}

filterBtn.addEventListener('click', () => {
    toggleFilterShowing(true);
});

document.addEventListener('click', (event) => {
    const isClickInside = filter.contains(event.target);
    const isClickFilterBtn = filterBtn.contains(event.target)

    if (!isClickInside && !isClickFilterBtn) {
        toggleFilterShowing(false);
    }
});