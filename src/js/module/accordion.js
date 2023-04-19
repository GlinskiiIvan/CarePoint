export default () => {
    const accordion = document.querySelectorAll('.accordion');
    if (accordion) {
        document.querySelectorAll('.accordion-header').forEach(el => {
            el.addEventListener('click', () => {
                const content = el.nextElementSibling;
                if (el.classList.contains('_active')) {
                    el.classList.remove('_active');
                    content.classList.remove('_active');
                    document.querySelectorAll('.accordion-content').forEach(el => el.style.maxHeight = null);
                } else {
                    document.querySelectorAll('.accordion-header').forEach(el => el.classList.remove('_active'));
                    document.querySelectorAll('.accordion-content').forEach(el => el.classList.remove('_active'));
                    content.previousElementSibling.classList.add('_active');
                    content.classList.add('_active');
                    document.querySelectorAll('.accordion-content').forEach(el => el.style.maxHeight = null);
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            })
        })
    }
}