// VARIABLES
const callBtn = document.querySelector(".fab.call-btn");
const getStartedBtns = document.querySelectorAll(".get-started-btn");
const getStartedPopupForm = document.querySelector(".get-started.popup");
const closeBtn__popupGetStarted = document.querySelector(".get-started.popup .close-btn");
// EVENTS
// window.addEventListener("mouseup", e => {
//     if(e.target != callBtn && e.target.parentNode != callBtn) {
//         callBtn.classList.remove("clicked");
//     }
// });

getStartedBtns.forEach( btn => {
    btn.addEventListener("click", () => {
        document.body.style.overflow="hidden";
        getStartedPopupForm.classList.remove("hide");
        getStartedPopupForm.classList.add("full-screen-overlay");
    })
})

closeBtn__popupGetStarted.addEventListener("click", () => {
    document.body.style.overflow="auto";
    getStartedPopupForm.classList.add("hide");
    getStartedPopupForm.classList.remove("full-screen-overlay");
});

