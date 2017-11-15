
var hamburgerButton = document.querySelector('.hamburger-menu');

hamburgerButton.addEventListener('click', function(e) {

    e.preventDefault();

    var hamburgerButtonActive = 'hamburger-menu_active';

    if(hamburgerButton.classList.contains(hamburgerButtonActive)) {
        hamburgerButton.classList.remove(hamburgerButtonActive);
    }else{
        hamburgerButton.classList.add(hamburgerButtonActive);
    }

    var mobileMenu = document.querySelector('.nav-list');
    var mobileMenuActive = 'nav-list_active';

    if(mobileMenu.classList.contains(mobileMenuActive)) {
        mobileMenu.classList.remove(mobileMenuActive);
    }else{
        mobileMenu.classList.add(mobileMenuActive);
    }

    var logo = document.querySelector('.logo');
    var logoActive = 'logo_active';

    if(logo.classList.contains(logoActive)) {
        logo.classList.remove(logoActive);
    }else{
        logo.classList.add(logoActive);
    }

    var orderButton = document.querySelector('.order-button');
    var orderButtonHide = 'order-button_hide';

    if(orderButton.classList.contains(orderButtonHide)) {
        orderButton.classList.remove(orderButtonHide);
    }else{
        orderButton.classList.add(orderButtonHide);
    }
}, false);