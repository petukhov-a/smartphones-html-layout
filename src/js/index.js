// Common
export const handleOutsideClick = (elemnt, btn, hideElement) => {
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

// Setting sort menu
const setSortMenu = (sortBtn, sortMenu, sortBtnLabel, sortMenuItems) => {
    const showSortOnClick = (sortBtn, sortMenu) => {
        sortBtn.addEventListener('click', () => {
            sortMenu.style.display = 'flex';
            sortBtn.classList.add('active');
        });
    }
    
    const selectSortItem = (sortBtnLabel, sortMenuItems) => {
        sortMenuItems.forEach((item) => {
            item.addEventListener('click', (event) => {
                sortBtnLabel.innerHTML = event.target.innerHTML;
            });
        });
    }
    
    const hideSortOnClickItem = (sortBtn, sortMenu) => {
        sortMenu.addEventListener('click', () => {
            sortMenu.style.display = 'none'
            sortBtn.classList.remove('active');
        });
    }

    showSortOnClick(sortBtn, sortMenu);
    selectSortItem(sortBtnLabel, sortMenuItems);
    hideSortOnClickItem(sortBtn, sortMenu);

    handleOutsideClick(sortMenu, sortBtn, () => {
        sortMenu.style.display = 'none';
        sortBtn.classList.remove('active');
    });
}

// Main sort
const mainSortMenu = document.querySelector('.sort-list-mobile ul');
const mainSortMenuItems = document.querySelectorAll('.sort-list-mobile li');
const mainSortBtn = document.querySelector('.sort-list-mobile-btn');
const mainSortBtnLabel = document.querySelector('.sort-list-mobile-btn span');

setSortMenu(mainSortBtn, mainSortMenu, mainSortBtnLabel, mainSortMenuItems);