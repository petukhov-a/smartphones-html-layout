// Common
const handleOutsideClick = (elemnt, btn, hideElement) => {
    document.addEventListener('click', (event) => {
        const isClickInside = elemnt.contains(event.target);
        const isClickBtn = btn.contains(event.target)
    
        if (!isClickInside && !isClickBtn) {
            hideElement();
        }
    });
}

// Filter item opening
const checkboxes = document.querySelectorAll('.smartphones-filter-item__heading');
const dropDownArrow = document.querySelectorAll('.drop-down-arrow');

checkboxes.forEach((element, index) => {
    element.addEventListener('click', () => {
        dropDownArrow[index].classList.toggle('active');
    });
});

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

handleOutsideClick(filter, filterBtn, () => toggleFilterShowing(false));

// Show sort
const sortMenu = document.querySelector('.sort-list-mobile ul');
const sortMenuItems = document.querySelectorAll('.sort-list-mobile li');
const sortBtn = document.querySelector('.sort-list-mobile-btn');
const sortBtnLabel = document.querySelector('.sort-list-mobile-btn span');

sortBtn.addEventListener('click', () => {
    sortMenu.style.display = 'flex';
    sortBtn.classList.add('active');
});

sortMenuItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        sortBtnLabel.innerHTML = event.target.innerHTML;
    });
});

sortMenu.addEventListener('click', () => {
    sortMenu.style.display = 'none'
    sortBtn.classList.remove('active');
});

handleOutsideClick(sortMenu, sortBtn, () => {
    sortMenu.style.display = 'none';
    sortBtn.classList.remove('active');
});