

//NAVBAR

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks, navIcons) {
  this.mobileMenu = document.querySelector(mobileMenu);
  this.navList = document.querySelector(navList);
  this.navLinks = document.querySelectorAll(navLinks);
  this.navIcons = document.querySelector(navIcons); // Novo
  this.activeClass = "active";

  this.handleClick = this.handleClick.bind(this);
}

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
  this.navList.classList.toggle(this.activeClass);
  this.navIcons.classList.toggle(this.activeClass); // Novo
  this.mobileMenu.classList.toggle(this.activeClass);
  this.animateLinks();
}

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li, .nav-icon i",
  ".nav-icon"
);
mobileNavbar.init();