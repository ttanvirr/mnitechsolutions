const toggleMenu = document.querySelector("#toggle-menu");
const mobileMenu = document.querySelector(".mobile-links");
const navbarDropdownBackdrop = document.querySelector(".navbar-dropdown-backdrop");

// Mobile Menu
// toggleMenu.addEventListener("click", ()=> {
//     mobileMenu.classList.toggle("hide");
//     toggleMenu.classList.toggle("open");
// });

// Large screen Dropdown menu
lsDropdownCont.forEach((i => {
    const dropdownItems = i.querySelector(".dropdown-items");
    const dropdownIcon = i.querySelector(".dropdown-icon");
    i.addEventListener("click", (e) => {
        // e.preventDefault();  // to prevent link's default behavior
        dropdownItems.classList.toggle("open");
        dropdownIcon.classList.toggle("open");
        navbarDropdownBackdrop.classList.toggle("show");
    });

    window.addEventListener("mouseup", e => {
        // const a = e.target.parentElement.parentElement;
        // const b = e.target.parentElement.parentElement.parentElement;
        // const c = e.target.parentElement.parentElement.parentElement.parentElement;
        // if(a != i && b != i && c != i) {
        //     dropdownItems.classList.remove("open");
        //     dropdownIcon.classList.remove("open");
        //     navbarDropdownBackdrop.classList.remove("show");
        // }
    })
}));


// Small screen Dropdown menu
ssDropdownCont.forEach((i => {
    const dropdownItems = i.querySelector(".dropdown-items");
    const plusIcon = i.querySelector(".plus-icon");
    const minusIcon = i.querySelector(".minus-icon");

    // console.log(dropdownItems, plusIcon, minusIcon);

    i.addEventListener("click", () => {
        // e.preventDefault();
        dropdownItems.classList.toggle("open");
        plusIcon.classList.toggle("hide");
        minusIcon.classList.toggle("hide");
    });

    toggleMenu.addEventListener("click", ()=> {
        dropdownItems.classList.remove("open");
        plusIcon.classList.remove("hide");
        minusIcon.classList.add("hide");
    });

}));



