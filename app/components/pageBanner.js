const pageBannerComponent = document.createElement('template');

pageBannerComponent.innerHTML = `
    <link rel="stylesheet" href="./../dist/style.css">
    <style>
        .page-banner {
            position: relative;
            --navHeight: 3.5rem;
            padding-block: calc(var(--navHeight) + 5em);
            background-repeat: no-repeat;
            background-position: center center;
            background-size: contain;
        }
        .page-banner::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0, 0.5);
        }
        .page-title {
            font-size: 3rem;
            text-transform: capitalize;
        }
    </style>
    <div class="page-banner | bg-secondary color-white">
        <div class="container">
            <h1 class="page-title"><slot name="page-title" /></h1>
        </div>
    </div>
`;

class PageBanner extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(pageBannerComponent.content.cloneNode(true));
        this.shadowRoot.querySelector('.page-banner').style.backgroundImage = "url("+this.getAttribute('bg-src')+")";
    }
}

customElements.define('page-banner-component', PageBanner);