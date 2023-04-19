export default () => {
    // Фиксайия хедера при скроле
    const header = document.querySelector('header');
    const headerBottom = document.querySelector('.header-bootom-wrapper');
    const headerHeight = header.clientHeight;
    const headerBottomHeight = headerBottom.clientHeight;

    if (header) {
        document.onscroll = () => {
            let scroll = window.scrollY;
            console.log(scroll);
            if (scroll >= headerHeight) {
                headerBottom.classList.add('fixed')
            } else {
                headerBottom.classList.remove('fixed')
            }
        }
    }
}