'use strict'
    const menu = document.querySelector('.menu-list'),
    menuItem = document.querySelectorAll('.menu-item'),
    hamburger = document.querySelector('.gamburger');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('gamburger-active');
        menu.classList.toggle('menu-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('gamburger-active');
            menu.classList.toggle('menu-active');
        });
    })
