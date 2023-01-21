const contactFormTemplate = document.createElement('template');

contactFormTemplate.innerHTML = `
<link rel="stylesheet" href="./../dist/style.css">
<style>
.select-container {
    position: relative;
}

.select-container::after {
    content: '';
    width: 0.6em;
    height: 0.5em;
    background-color: hsla($secondary, 0.7);
    clip-path: polygon(0 0, 50% 100%, 100% 0%);
    position: absolute;
    top: 1em;
    right: 1em;
    transition: 300ms all ease-in-out;
}

.select-container:focus-within:after {
    transform: rotate(180deg);
}

input.select {
    padding-right: 2.5em;
}

.option-group {
    height: 0;         
    overflow: hidden;
}
.option-group .option {
    padding: 0.5em 1em;
    cursor: default;
    border-bottom: 1px solid hsla($secondary, 0.1);
}
.option-group .option:hover {
    background-color: hsla($secondary, 0.2);
}
.select-container:focus-within .option-group {
    height: auto;
    background-color: #fff;
    margin-top: 0.5em;
    border: 1px solid hsl($secondary);
    border-radius: 0.5rem;
    box-shadow: 0 0 0.25rem hsla($secondary, 0.7);
}
</style>

<div class="form-container">
    <form id="form" class="form | flow" action="/" method="get" autocomplete="off">
        <div class="form-group">
            <label for="fname">First name (required)</label>
            <input class="form-control" type="text" id="fname" name="first-name" required autocomplete="first-name">
            <small class="message fname-message" aria-label="Validity message"></small>
        </div>
        <div class="form-group">
            <label for="lname">Last name</label>
            <input class="form-control" type="text" id="lname" name="last-name" autocomplete="last-name">
        </div>
        <div class="form-group">
            <label for="company-name">Company name</label>
            <input class="form-control" type="text" id="company-name" name="company-name" autocomplete="company-name">
        </div>
        <div class="form-group">
            <label for="address">Address (required)</label>
            <input class="form-control" type="text" id="address" name="address" autocomplete="address">
            <small class="message address-message" aria-label="Validity message"></small>
        </div>
        <div class="form-group" >
            <label for="service">What service do you need (required)</label>
            <div class="select-container">
                <input class="select | form-control" type="text" id="service" name="service" placeholder="Select or type a sevice..." required aria-labelledby="service-list">
                <ul id="service-list" class="option-group">
                    <li class="option">IT service</li>
                    <li class="option">App development</li>
                    <li class="option">Website development</li>
                    <li class="option">Graphic design</li>
                    <li class="option">UI design</li>
                    <li class="option">Architectural solution</li>
                </ul>
            </div>
            <small class="message service-message" aria-label="Validity message"></small>
        </div>
        <div class="form-group">
            <label for="email">Email address (required)</label>
            <input pattern="^[\w\.+-]+@([\w-]+\.)+[a-zA-Z]{2,4}$" required class="form-control" type="email" id="email" name="email" autocomplete="email" placeholder="name@example.com">
            <!-- <i class="fa-solid fa-circle-check" aria-label="Valid"></i>
            <i class="fa-solid fa-circle-exclamation" aria-label="Error"></i> -->
            <small class="message email-message" aria-label="Validity message"></small>
        </div> 
        <div class="form-group">
            <label for="phone">Contact no. (recommended)</label>
            <input class="form-control" type="tel" id="phone" name="phone" autocomplete="contact">
            <!-- <i class="fa-solid fa-circle-check" aria-label="Valid"></i>
            <i class="fa-solid fa-circle-exclamation" aria-label="Error"></i> -->
            <small class="message" aria-label="Validity message">Validity message</small>
            <!-- <span id="contact-foot-note">* Email and/or contact no. must be provided.</span> -->
        </div> 
        <div class="form-group">
            <label for="user-message">Tell us more (required)</label>
            <textarea class="form-control" name="user-message" id="user-message" cols="30" rows="5"></textarea>
            <!-- <i class="fa-solid fa-circle-check" aria-label="Valid"></i>
            <i class="fa-solid fa-circle-exclamation" aria-label="Error"></i> -->
            <small class="message" aria-label="Validity message">Validity message</small>
        </div> 
        <input class="button" type="submit" value="Submit">
    </form>
</div>
`;

class ContactForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(contactFormTemplate.content.cloneNode(true));
    }
}

customElements.define('contact-form-component', ContactForm);