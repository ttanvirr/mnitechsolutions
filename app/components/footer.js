const footerTemplate = document.createElement('template');
footerTemplate.innerHTML=`
<link rel="stylesheet" href="./../dist/style.css">
<style>
    h3 {
        font-size: 1.125rem;
    }
    a, p {
        font-size: 0.875rem;
    }
    .row.one {
        padding-block: 3rem;
    }
    .row.one p {
        display: flex;
    }
    .row.one li, 
    .row.one p[aria-label="Email"] {
        width: 100%;
        display: block;  /* display:flex won't work */
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .row.one p[aria-label="Phone number"] {
        white-space: nowrap;
    }
    .row.one .links li {
        color: hsl($primary);
    }
    .row.one p[aria-label="Address"]::before {
        text-rendering: auto;
        -moz-osx-font-smoothing: auto;
        -webkit-font-smoothing: antialiased;
        content: url('./../../icons/location-icon.svg');
        display: inline-flex;
        width: 20px;
        justify-content: center;
        margin-right: 0.5rem;
    }
    .row.one p[aria-label="Email"]::before {
        text-rendering: auto;
        -moz-osx-font-smoothing: auto;
        -webkit-font-smoothing: antialiased;
        content: url('./../../icons/email-icon.svg');
        display: inline-flex;
        width: 20px;
        justify-content: center;
        align-items: center;
        margin-right: 0.5rem;
        vertical-align: middle;
    }
    .row.one p[aria-label="Phone number"]::before {
        text-rendering: auto;
        -moz-osx-font-smoothing: auto;
        -webkit-font-smoothing: antialiased;
        content: url('./../../icons/phone-icon-white.svg');
        display: inline-flex;
        width: 20px;
        justify-content: center;
        align-items: center;
        margin-right: 0.5rem;
    }
    .row.one .sect.one {
        margin-inline: auto;
        width: max-content;
    }
    .row.one .sect.one.logo {
        width: 100%;
    }
    .row.one .sect.two .links li::before {
        text-rendering: auto;
        -moz-osx-font-smoothing: auto;
        -webkit-font-smoothing: antialiased;
        content: url('./../../icons/link-solid.svg');
        margin-right: 0.5rem;
        vertical-align: middle;
    }
    .row[aria-label="Copyright"] {
        padding: 1rem;
        margin-inline: auto;
        border-top: 1px solid hsla(var(--white), 0.2);
    }
    .row[aria-label="Copyright"] p {
        max-inline-size: 100%;
    }
    @media (min-width:62rem) {
        .row.one {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            /* flex-direction: row; */

        }
    }
</style>
<footer class="footer | bg-secondary color-white">
    <div class="container" data-type="free-container">
        <div class="row one flex-col gap:xl">
            <div class="sect one flow">
                <img class="logo" src="./../../images/mni-logo-white.svg" alt="Nice logo of MNI Tech Solutions">
                <div class="social-media-container | flex-row gap:sm">
                    <a href="#" aria-label="facebook"><img src="./../../icons/facebook-round-icon.svg" alt=""></a>
                    <a href="#" aria-label="twitter"><img src="./../../icons/twitter.svg" alt=""></a>
                    <a href="#" aria-label="linkedin"><img src="./../../icons/linkedin.svg" alt=""></a>
                    <a href="#" aria-label="youtube"><img src="./../../icons/youtube-round-icon.svg" alt=""></a>
                </div>
            </div>
            <div class="sect two flow">
                <h3>Useful Links </h3>
                <ul role="list" class="links | flex-col | nowrap">
                    <li><a class="link link--footer" href="./../../pages/about.html">About us</a></li>
                    <li><a class="link link--footer" href="./../../pages/staffing-solutions.html">Staffing solutions</a></li>
                    <li><a class="link link--footer" href="./../../pages/app-dev.html">App development</a></li>
                    <li><a class="link link--footer" href="./../../pages/webdev.html">Web development</a></li>
                    <li><a class="link link--footer" href="./../../pages/graphics-design.html">Graphics design</a></li>
                    <li><a class="link link--footer" href="./../../pages/architectural-solutions.html">Architectural solutions</a></li>
                </ul>
            </div>
            <div class="sect three flow">
                <h3>Head office</h3>
                <div class="">
                    <p aria-label="Address">37-47 73rd St Suite 208 Queens, NY 11372, USA</p>
                    <p aria-label="Email">mnitechsolutions@gmail.com</p>
                    <p aria-label="Phone number">+1-347-265-8472</p>
                </div>
            </div>

            <div class="sect four flow">
                <h3>Branch office</h3>
                <div class="">
                    <p aria-label="Address">15/E, Girls School Road, North Dhanmondi, Kalabagan, Dhaka, Bangladesh</p>
                    <p aria-label="Phone number">+880-1777768368</p>
                </div>
            </div>
        </div>

    </div>
    <div class="row two text-center" aria-label="Copyright">
        <p>&copy; <span class="color-primary">MNI Tech Solutions</span> | 2022 to present | All rights reserved.<br></p>
        <p>Developed by <span class="color-primary">Tanvir's Kodelab</span></p>
    </div>
</footer>
`;

class Footer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
    }
}

customElements.define('footer-component', Footer);