export default () => {
    //бургер меню
    const menuIcon = document.querySelector('.menu-icon');
    const navbarList = document.querySelector('.navbar');
    const body = document.querySelector('body');
    if (menuIcon) {
        menuIcon.addEventListener("click", function (e) {
            body.classList.toggle('_lock');
            menuIcon.classList.toggle('_active');
            navbarList.classList.toggle('_active');
            document.querySelector('.patch').classList.toggle('_active');
        })
    }
}