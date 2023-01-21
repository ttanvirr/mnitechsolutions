const navbarComponent = document.querySelector('navbar-component')
const navbarTemplate = document.createElement('template')

const assigned = `
    <link rel="stylesheet" href="./../dist/style.css">
    <style>
        .navbar {
            --nav-height: 4em;
            background-color: transparent;
            color: hsl(var(--white));
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 9999;
        }
        .navbar > .container > .flex-item01 {
            height: var(--nav-height);
        }
        .navbar > .container > .flex-item02 {
            flex-grow: 1;
        }
              
        .navbar ul a, .navbar ul .dropdown__title {
            text-transform: capitalize;
            font-weight: 500;
            background-color: inherit;
            color: inherit;
            border: none;
            cursor: pointer;
        }
        .menu-toggler {
            background-color: transparent;
            border: none;
            padding-block: 1rem;
            cursor: pointer;
            /* prevent horizontal scrolling */
            overflow: hidden;
        }
        .menu-toggler > span {
            width: 2rem;
            height: 0.125rem;
            background-color: hsl(var(--white));
            transition: 300ms all ease-in-out;
        }
        .menu-toggler.open {
            gap: 0;
        }
        .menu-toggler.open > span:nth-of-type(2) {
            transform: translateX(1000px)
        }
        .menu-toggler.open > span:nth-of-type(1) {
            transform: translateY(0.125rem) rotate(45deg)
        }
        .menu-toggler.open > span:nth-of-type(3) {
            transform: translateY(-0.125rem) rotate(-45deg)
        }
        .menu {
            display: none;
        }
        .menu.open {
            display: block;
            width: 100%;
        }
        .menu > li a:hover,
        .menu > li a:focus,
        .menu > li .dropdown__title:hover,
        .menu > li .dropdown__title:focus {
            background-color: rgba(8, 43, 74, 0.1);
            transition: 100ms all ease-in-out;
        }
        .menu > li > a.active,
        .dropdown__title.active {
            /* box-shadow: inset 0 0.25em hsl(var(--primary)); */
            text-decoration: 2px underline hsl(var(--secondary));
            text-underline-offset: 3px;
        }
        .dropdown__title {
            padding: 0;
        }
        .dropdown__title::after {
            content: '';
            width: 0.6em;
            height: 0.5em;
            display: inline-block;
            background-color: rgba(255, 255, 255, 0.5);
            clip-path: polygon(0 0, 50% 100%, 100% 0%);
            margin-left: 0.5em;
            transition: 300ms all ease-in-out;
            vertical-align: middle;
        }
        .dropdown__title.is-active {
            background-color: rgba(8, 43, 74, 0.1) !important;
            /* box-shadow: inset 0 0.125em hsl(var(--primary)); */
        }
        .dropdown__title.is-active::after {
            transform: rotate(180deg);
        }
        .dropdown__menu {
            /* Height will be calculated by js */
            --calc-height: 0;
            height: var(--calc-height);
            overflow: hidden;
            transition: 300ms all ease-out;
        }

        /* For Expanded Navbar For Mobile Menu */
        .navbar.expanded {
            height: auto;
            background-color: hsl(var(--white));
            color: hsl(var(--dark));
            bottom: 0;
            overflow-y: auto;
        }
        .navbar.expanded > .container {
            --padding-inline: 1.75rem;
            padding-inline: unset;
        }
        .navbar.expanded > .container > .flex-item01 {
            padding-inline: var(--padding-inline);
            border-bottom: 1px solid rgba(8, 43, 74, 0.1);
        }
        .navbar.expanded .brand-logo svg path {
            fill: hsl(var(--secondary));
        } 
        .navbar.expanded .menu-toggler > span {
            background-color: hsl(var(--secondary));
        }
        .navbar.expanded .dropdown__title::after {
            background-color: hsl(var(--dark));
        }
        .navbar.expanded ul a, .navbar.expanded ul .dropdown__title {
            padding: 0.75em var(--padding-inline);
            border-bottom: 1px solid rgba(8, 43, 74, 0.1);
            text-align: left;
            display: block;
            width: 100%;
            line-height: 1.5;
        }
        .navbar.expanded .dropdown__menu > li a {
            padding-left: 3em;
        }

        /* While Scrolled */
        .navbar.scrolled {
            background-color: rgba(255, 255, 255, 0.95);
            color: hsl(var(--dark));
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
        }
        .navbar.scrolled .brand-logo svg path {
            fill: hsl(var(--secondary));
        } 
        .navbar.scrolled .menu-toggler > span {
            background-color: hsl(var(--secondary));
        }
        
        
        /* Media Queries */
        @media (min-width: 48rem) {
            .navbar {
                --nav-height: 5em;
                background-color: transparent!;
            }
            .navbar > .container > .flex-item02 {
                height: var(--nav-height);
            }
            .navbar .brand-logo svg {
                transform: scale(1.3);
            }
            .menu {
                margin-left: auto;
                display: flex;
                align-items: center;
                gap: var(--space-lg);
            }
            .menu > li > a,
            .menu > li > .dropdown__title {
                padding-inline: 0.5em;
                display: inline-block;
                /* line-height: var(--nav-height); */
            }
            .menu > li > a:hover,
            .menu > li > a:focus,
            .menu > li > .dropdown__title:hover {
                /* box-shadow: 0 2px hsl(var(--primary)); */
                text-decoration: underline 2px;
                text-decoration-color: hsl(var(--primary));
                text-underline-offset: 4px;
            }
            .menu > li > a.active,
            .dropdown__title.active {
                text-decoration: 2px underline hsl(var(--primary));
            }
            .navbar.scrolled .menu > li > a:hover,
            .navbar.scrolled .menu > li > a:focus,
            .navbar.scrolled .menu > li > .dropdown__title:hover {
                text-decoration-color: hsl(var(--secondary));
                background-color: transparent;
            }
            .navbar.scrolled .menu > li > a.active,
            .navbar.scrolled .dropdown__title.active {
                text-decoration: 2px underline hsl(var(--secondary));
            }
            .dropdown {
                position: relative;
            }
           
            .dropdown__menu {
                --top-height: 0.5rem;
                position: absolute;
                top: calc(65% + var(--top-height));
                left: 50%;
                width: max-content;
                transform: translateX(-50%);
                background-color: hsl(var(--white));
                box-shadow: 0 1px 24px rgba(0, 0, 0, 0.1) inset;
                color: hsl(var(--dark));
                border-radius: 0.25em;
                clip-path: polygon(50% 0, 55% var(--top-height), 100% var(--top-height), 100% 100%, 0 100%, 0 var(--top-height), 45% var(--top-height));
            }
            .dropdown__menu .top-tip {
                width: 100%;
                height: var(--top-height);
                background-color: inherit;
            }
            .dropdown__menu > li a {
                padding: 0.75em 1em;
                display: block;
                border-bottom: 1px solid rgba(8, 43, 74, 0.1)
            }
            .navbar__right .phone-no::before {
                content: url('./../../icons/phone-icon-greenish.svg');
                vertical-align: text-top;
                margin-right: 0.5em;
            }
            .navbar.scrolled .navbar__right .phone-no::before {
                content: url('./../../icons/phone-icon-bluish.svg');
            }
            .navbar.scrolled .get-started-button {
                background-color: hsl(var(--secondary));
            }
            .navbar.scrolled .get-started-button:hover,
            .navbar.scrolled .get-started-button:focus-visible {
                background-color: hsl(var(--secondary-lighter01));
            }
            .navbar.scrolled .get-started-button:active,
            .navbar.scrolled .get-started-button:focus-visible {
                box-shadow: 0 0 0 4px hsl(var(--secondary));
            }
            .navbar.scrolled .dropdown__title::after {
                background-color: rgba(8, 43, 74, 0.7);
            }

        }

        @media (min-width: 75rem) {
            .menu {
                margin: 0 auto;
            }
        }
    </style>

    <nav class="navbar" aria-label="Main Navigation">
   
        <div class = "container | flex-col md:flex-row" data-type="free-container">
            <div class="flex-item01 flex-row justify-content:sb align-items:center">
                <a href="/" class="brand-logo" aria-label="logo">
                    <svg width="87" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#a)" fill="#fff">
                        <path d="m18.498.006-.002 9.163-3.61 5.5-2.768-5.436L18.136.004l.363.002Z" fill-opacity=".9"/>
                        <path d="m14.886 14.67-.003 9.329-5.572-.002.003-9.13-3.673-5.603-.004 14.732L0 23.994.007 0l6.082.001 6.03 9.232 2.767 5.437Zm9.308-3.64h-5.701V24h5.701V11.03ZM24.198.006h-5.7V9.19h5.7V.006Z"/>
                    </g>
                        <path d="m35.622 13.893-2.417-6.498h-.051a34.67 34.67 0 0 1 .08 1.405c.011.287.017.562.017.825v4.268H32V6.112h1.934l2.325 6.211h.034l2.405-6.211h1.929v7.781h-1.315V9.561c0-.238.004-.495.012-.772l.034-.788c.016-.248.027-.447.035-.596h-.046l-2.508 6.488h-1.217Zm14.364 0h-1.693l-4.11-6.211h-.051c.015.21.028.431.04.665.015.235.027.476.034.724.012.249.021.5.029.756v4.066h-1.251V6.112h1.681l4.104 6.169h.04a89.18 89.18 0 0 0-.028-.623l-.035-.724a52.465 52.465 0 0 1-.017-.73V6.113h1.257v7.781Zm2.351 0V6.112h1.378v7.781h-1.378Zm9.851 0h-1.383V7.198h-2.457V6.112h6.29v1.086h-2.45v6.695Zm8.636 0h-4.752V6.112h4.752v1.075H67.45V9.3h3.163v1.07H67.45v2.443h3.375v1.08Zm5.536-6.807c-.401 0-.76.067-1.078.202a2.15 2.15 0 0 0-.798.586 2.577 2.577 0 0 0-.5.92 3.97 3.97 0 0 0-.172 1.214c0 .603.092 1.123.276 1.56.183.432.463.766.838 1 .375.23.85.346 1.423.346.356 0 .702-.032 1.04-.096.336-.063.684-.15 1.044-.26v1.085c-.34.125-.685.215-1.033.272a7.55 7.55 0 0 1-1.206.085c-.857 0-1.569-.165-2.135-.495a3.091 3.091 0 0 1-1.263-1.395c-.275-.6-.413-1.302-.413-2.107 0-.59.088-1.129.264-1.618.176-.49.432-.912.77-1.267a3.338 3.338 0 0 1 1.245-.825C75.159 6.098 75.727 6 76.366 6c.421 0 .835.044 1.24.133.41.085.788.208 1.137.367l-.482 1.054a7.404 7.404 0 0 0-.913-.33 3.521 3.521 0 0 0-.987-.138ZM87 13.893h-1.372v-3.512H81.76v3.512h-1.378V6.112h1.378v3.183h3.868V6.112H87v7.781ZM35.624 22.37c0 .345-.086.64-.256.884a1.581 1.581 0 0 1-.71.555 2.77 2.77 0 0 1-1.075.191 5.5 5.5 0 0 1-.618-.032 4.162 4.162 0 0 1-.536-.092A2.26 2.26 0 0 1 32 23.73v-.65c.197.082.437.16.72.231.284.07.581.104.891.104.289 0 .533-.039.733-.116.2-.08.35-.192.453-.338a.902.902 0 0 0 .157-.535.89.89 0 0 0-.13-.498c-.087-.136-.231-.258-.433-.367a5.77 5.77 0 0 0-.82-.355 4.38 4.38 0 0 1-.645-.287 2.016 2.016 0 0 1-.47-.358 1.354 1.354 0 0 1-.287-.463 1.773 1.773 0 0 1-.094-.602c0-.31.077-.577.232-.797a1.47 1.47 0 0 1 .65-.51c.279-.12.597-.18.957-.18.307 0 .591.03.851.088.263.058.503.137.72.235l-.208.582a4.498 4.498 0 0 0-.662-.22 2.91 2.91 0 0 0-.717-.087c-.246 0-.455.037-.626.112a.855.855 0 0 0-.386.307.83.83 0 0 0-.134.474.95.95 0 0 0 .126.51c.087.136.224.257.41.363.189.104.439.213.748.327.34.125.627.258.863.399.236.138.416.308.54.51.123.2.185.453.185.761Zm7.612-1.372c0 .45-.056.858-.17 1.228a2.67 2.67 0 0 1-.503.949c-.22.263-.495.466-.824.61a2.83 2.83 0 0 1-1.142.215c-.446 0-.836-.072-1.17-.215a2.189 2.189 0 0 1-.827-.614 2.7 2.7 0 0 1-.492-.953 4.382 4.382 0 0 1-.162-1.228c0-.595.098-1.118.292-1.567.194-.449.488-.798.882-1.048.397-.25.893-.375 1.489-.375.57 0 1.05.124 1.438.37.391.248.686.596.886 1.045.202.447.303.974.303 1.583Zm-4.584 0c0 .494.07.922.208 1.284.14.361.352.64.638.837.29.197.656.295 1.1.295.446 0 .81-.098 1.094-.295a1.72 1.72 0 0 0 .634-.837c.137-.362.205-.79.205-1.284 0-.752-.156-1.34-.468-1.762-.31-.425-.795-.638-1.454-.638-.446 0-.814.097-1.103.291-.289.194-.504.47-.646.83-.139.355-.209.782-.209 1.279Zm7.308 2.922v-5.828h.67v5.222h2.557v.606H45.96Zm10.012-5.828v3.771c0 .412-.083.779-.248 1.1a1.79 1.79 0 0 1-.74.762c-.331.183-.746.275-1.245.275-.712 0-1.254-.195-1.627-.586-.37-.39-.555-.913-.555-1.567v-3.755h.673v3.775c0 .494.129.876.386 1.144.26.269.647.403 1.162.403.352 0 .64-.064.863-.191.226-.13.392-.311.5-.543.11-.233.165-.503.165-.809v-3.78h.666Zm4.738 5.828h-.674v-5.23h-1.812v-.598h4.29v.598h-1.805v5.23Zm4.114 0v-5.828h.67v5.828h-.67Zm8.688-2.922c0 .45-.056.858-.17 1.228a2.683 2.683 0 0 1-.504.949c-.22.263-.495.466-.823.61a2.83 2.83 0 0 1-1.142.215c-.446 0-.836-.072-1.17-.215a2.19 2.19 0 0 1-.827-.614 2.7 2.7 0 0 1-.492-.953 4.382 4.382 0 0 1-.162-1.228c0-.595.097-1.118.292-1.567.194-.449.488-.798.882-1.048.396-.25.893-.375 1.489-.375.57 0 1.049.124 1.437.37.392.248.687.596.887 1.045.202.447.303.974.303 1.583Zm-4.585 0c0 .494.07.922.209 1.284.14.361.352.64.638.837.289.197.655.295 1.099.295.446 0 .811-.098 1.095-.295a1.72 1.72 0 0 0 .634-.837c.137-.362.205-.79.205-1.284 0-.752-.156-1.34-.469-1.762-.31-.425-.794-.638-1.453-.638-.447 0-.814.097-1.103.291-.289.194-.504.47-.646.83-.14.355-.209.782-.209 1.279Zm11.812 2.922h-.773l-3.139-4.895h-.031l.027.446c.01.165.019.342.024.53.008.186.012.376.012.57v3.35h-.623v-5.83h.768l3.128 4.88h.027a40.866 40.866 0 0 1-.043-.948c-.005-.2-.008-.384-.008-.555v-3.376h.63v5.828ZM87 22.37c0 .345-.085.64-.256.884a1.581 1.581 0 0 1-.709.555A2.77 2.77 0 0 1 84.96 24a5.53 5.53 0 0 1-.619-.032 4.16 4.16 0 0 1-.535-.092 2.258 2.258 0 0 1-.43-.147v-.65c.197.082.438.16.721.231.284.07.58.104.89.104.29 0 .533-.039.733-.116.2-.08.35-.192.453-.338a.903.903 0 0 0 .157-.535.89.89 0 0 0-.13-.498c-.086-.136-.23-.258-.433-.367a5.68 5.68 0 0 0-.82-.355 4.385 4.385 0 0 1-.645-.287 2.018 2.018 0 0 1-.469-.358 1.354 1.354 0 0 1-.287-.463 1.775 1.775 0 0 1-.095-.602c0-.31.078-.577.233-.797a1.48 1.48 0 0 1 .65-.51c.278-.12.597-.18.957-.18.307 0 .59.03.85.088.263.058.503.137.721.235l-.209.582a4.498 4.498 0 0 0-.661-.22 2.91 2.91 0 0 0-.717-.087 1.55 1.55 0 0 0-.626.112.854.854 0 0 0-.386.307.831.831 0 0 0-.134.474.95.95 0 0 0 .126.51c.086.136.223.257.41.363.188.104.438.213.748.327.338.125.626.258.862.399.237.138.416.308.54.51.123.2.185.453.185.761Z" fill="#fff"/>
                    <defs>
                        <clipPath id="a">
                            <path fill="#fff" d="M0 0h24v24H0z"/>
                        </clipPath>
                    </defs>
                </svg>
                </a>
    
                
                <!-- Hamburger icon for mobile menu -->
                <button class="menu-toggler | flex-col gap:xs | md:hide" aria-controls="Menu" aria-expanded="false">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span class="visually-hidden">Menu</span>
                </button>
            </div>

            <div class="flex-item02 | flex-row justify-content:sb">
                <!-- Primary Links -->
                <ul role="list" class="menu navbar__primary__links" id="menu">
                    <li><a href="/">Home</a></li>
                    <li class="dropdown">
                        <button
                            type="button"
                            class="dropdown__title"
                            aria-expanded="false"
                            aria-controls="services-dropdown"
                        >
                            Services

                        </button>
                        <ul role="list" class="dropdown__menu navlinks calc-height" id="services-dropdown">
                            <li class="top-tip" aria-hidden="true"></li>
                            <li><a href="./../../pages/staffing-solutions.html">Staffing solutions</a></li>
                            <li><a href="./../../pages/app-dev.html">App development</a></li>
                            <li><a href="./../../pages/webdev.html">Web development</a></li>
                            <li><a href="./../../pages/graphics-design.html">Graphics design</a></li>
                            <li><a href="./../../pages/architectural-solutions.html">Architectural solutions</a></li>
                        </ul>
                    </li>
                    <li><a href="./../../pages/about.html">About Us</a></li>
                    <li><a href="./../../pages/contact.html">Contact</a></li>
                </ul>
    
                <!-- right part for desktop only -->
                <ul role="list" class="navbar__right | hide xl:show xl:flex-row gap:lg align-items:center">
                    <li class="phone-no | nowrap" aria-label="Contact Number">+1-347-265-8472</li>  
                    <li><button class="button button--primary | get-started-button" aria-label="Contact Form Triggerer">Get started</button></li>
                </ul>

            </div>
        </div>
    </nav>
`

navbarTemplate.innerHTML = assigned

class Navbar extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(navbarTemplate.content.cloneNode(true))

    const navbar = shadowRoot.querySelector('.navbar')
    const menuToggler = shadowRoot.querySelector('.menu-toggler')
    const menu = shadowRoot.querySelector('.menu')
    const dropdownTitles = shadowRoot.querySelectorAll('.dropdown__title')
    const currentLocation = location.href
    const menuItems = shadowRoot.querySelectorAll('.menu>li>a')

    // Active menu based on current url
    menuItems.forEach((item) => {
      if (item.href === currentLocation) {
        item.classList.add('active')
      }
    })
    if (!menuToggler.classList.contains('open')) {
      menu.classList.remove('open')
    }

    menuToggler.addEventListener('click', () => {
      menuToggler.classList.toggle('open')

      if (menuToggler.classList.contains('open')) {
        navbar.classList.add('expanded')
        menu.classList.add('open')
        document.body.style.overflow = 'hidden'
      } else {
        navbar.classList.remove('expanded')
        menu.classList.remove('open')
        document.body.style.overflow = 'auto'
      }
    })

    dropdownTitles.forEach((dropdownTitle) => {
      const dropdownMenuItems = navbar.querySelectorAll('.dropdown a')
      const dropdownMenu = navbar.querySelector('.dropdown__menu')

      dropdownMenuItems.forEach((item) => {
        if (item.href === currentLocation) {
          dropdownTitle.classList.add('active')
        }
      })

      dropdownTitle.addEventListener('click', () => {
        dropdownTitle.classList.toggle('is-active')
        if (dropdownTitle.classList.contains('is-active')) {
          dropdownMenu.classList.add('open')
        } else {
          dropdownMenu.classList.remove('open')
        }

        let height = dropdownMenu.scrollHeight + 'px' // must add 'px'
        if (dropdownMenu.style.getPropertyValue('--calc-height') !== height) {
          dropdownMenu.style.setProperty('--calc-height', height)
        } else {
          dropdownMenu.style.setProperty('--calc-height', 0)
        }
      })
      //   dropdownTitle.addEventListener('focusout', () => {
      //     dropdownTitle.classList.remove('is-active')
      //     dropdownMenu.classList.remove('open')
      //     let height = dropdownMenu.scrollHeight + 'px' // must add 'px'
      //     if (dropdownMenu.style.getPropertyValue('--calc-height') !== height) {
      //       dropdownMenu.style.setProperty('--calc-height', height)
      //     } else {
      //       dropdownMenu.style.setProperty('--calc-height', 0)
      //     }
      //   })
    })

    window.addEventListener('scroll', () => {
      if (document.body.classList.contains('scrolled')) {
        navbar.classList.add('scrolled')
      } else {
        navbar.classList.remove('scrolled')
      }
    })

    window.addEventListener('load', () => {
      if (document.body.classList.contains('scrolled')) {
        navbar.classList.add('scrolled')
      } else {
        navbar.classList.remove('scrolled')
      }
    })

    const getStartedBtn = shadowRoot.querySelector('.get-started-button')

    const getStartedPopupForm = document.querySelector('.get-started.popup')
    console.log(getStartedPopupForm)
    getStartedBtn.addEventListener('click', () => {
      getStartedPopupForm.classList.remove('hide')
    })

    // Media Queries
    const mediaQueryMd = matchMedia('(min-width:48rem)')

    function handleScreenChangeMd(e) {
      if (e.matches) {
        // Optional changes

        menuToggler.classList.remove('open')
        navbar.classList.remove('expanded')
        menu.classList.remove('open')
        document.body.style.overflow = 'auto'
      }
    }

    mediaQueryMd.addEventListener('change', handleScreenChangeMd)
  }
}

customElements.define('navbar-component', Navbar)
