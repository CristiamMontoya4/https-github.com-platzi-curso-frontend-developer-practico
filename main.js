const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconBurger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconCart = document.querySelector('.navbar-shopping-cart');
const orderMenu = document.querySelector('.product-detail ');


menuEmail.addEventListener('click', toggleDesktopMenu);
iconBurger.addEventListener('click', toggleMobileMenu);
iconCart.addEventListener('click', toggleCartAside);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');

    const isOpenOrderMenu = orderMenu.classList.contains('inactive');

    if (!isOpenOrderMenu){
        orderMenu.classList.add('inactive');
    }

}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    const isOpenOrderMenu = orderMenu.classList.contains('inactive');

    if (!isOpenOrderMenu){
        orderMenu.classList.add('inactive');
    }

}

function toggleCartAside() {
    orderMenu.classList.toggle('inactive');

    const isOpenMobileMenu = mobileMenu.classList.contains('inactive');
    const isOpenDesktopMenu = desktopMenu.classList.contains('inactive');

    if (!isOpenMobileMenu){
        mobileMenu.classList.add('inactive');
    }
    if (!isOpenDesktopMenu){
        desktopMenu.classList.add('inactive');
    }

}
