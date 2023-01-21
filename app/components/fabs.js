const fabsTemplate = document.createElement('template');

fabsTemplate.innerHTML = `
<link rel="stylesheet" href="./../dist/style.css">
<style>
    .fab {
        position: fixed;
        z-index: 9999;
        cursor: pointer;
    }
    .fab.call-button {
        top: 7.25rem;
        right: 0;
        align-items: center;
        border-radius: 0.25rem 0 0 0.25rem;
        background-color: hsl(var(--primary));
        transform: translateX(calc(100% - 1.5rem));
        transition: all 0.3s ease-in;
    }
    .fab.call-button:hover {
        transform: translateX(0);
    }
    .fab.call-button .icon {
        width: 1.5rem; 
        height: 1.5rem; 
        padding: 0.25rem;
        vertical-align: middle;
    }
    .fab.call-button span {
        font-size: 0.9em;
        font-weight: 600;
        margin-inline-end: 0.5em;
        cursor: text;
    }
    .fab.get-started-btn {
        top: 8.25rem;
        right: 0;
        border: 0;
        border-radius: 0.5rem 0.5rem 0 0;
        padding: 0.25em 0.75em !important;
        background-color: hsl(var(--primary));
        font-weight: 600;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
        /* writing-mode: vertical-rl; */
        transform: rotate(-90deg) translateY(-50%);
        transform-origin: right center;
        transition: all 0.3s ease-in-out;
    }
    .fab.get-started-btn:hover{
        background: hsl(var(--primary-lighter01));
    }
    .fab.get-started-btn:active {
        box-shadow: 0 0 0 4px hsl(var(--primary-darker02));
    }
    .fab.get-started-btn:focus-visible {
        outline-style: solid;
        outline-color: transparent;
        box-shadow: 0 0 0 4px hsl(var(--primary-darker02));
    }
    @media (min-width: 75rem) {
        .fab.call-button,
        .fab.fab.get-started-btn {
            display: none;
        }
    }
</style>
<div class="fab call-button | flex-row">
    <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="#fff"/>
    </svg>
    <span class="color-white">+1-212-000-0000</span>
</div>
<button class="fab get-started-btn color-white">Get started</button>
`;

class Fabs extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(fabsTemplate.content.cloneNode(true));

        const getStartedBtn = this.shadowRoot.querySelector(".get-started-btn");
        const getStartedPopupForm = document.querySelector(".get-started.popup");
        console.log(getStartedPopupForm);
        getStartedBtn.addEventListener("click", () => {
            getStartedPopupForm.classList.remove("hide");
        })
    }
}

customElements.define('fabs-component', Fabs);