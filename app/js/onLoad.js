window.addEventListener('load', () => {
    // console.log(scrollY);
    if(scrollY > 1) {
        document.body.classList.add('scrolled');
    }
});