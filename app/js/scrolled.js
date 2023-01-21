window.addEventListener('scroll', ()=> {
    if (scrollY > 1) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled')
    }
});