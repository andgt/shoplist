'use strict'

// Menu

let mainMenu = function() {
  let mainNav = document.querySelector(".main-nav");
  let buttonNav = document.querySelector(".main-nav__button-toggle");

  buttonNav.onclick = function(evt) {
    if (mainNav.classList.contains("main-nav--closed")) {
      mainNav.classList.remove("main-nav--closed");
      mainNav.classList.add("main-nav--opened");
    } else {
      mainNav.classList.remove("main-nav--opened");
      mainNav.classList.add("main-nav--closed");
    }
  }
};

mainMenu();

//Submenu

let submenu = function() {
  let buttonsSubmenu = document.querySelectorAll(".main-nav__button-submenu");

  buttonsSubmenu.forEach(buttonSub => {
    buttonSub.onclick = function(evt) {
      let parentEl = buttonSub.closest(".main-nav__control");
      let submenu = parentEl.nextElementSibling;
      if (submenu.classList.contains("main-nav__submenu--closed")) {
        submenu.classList.remove("main-nav__submenu--closed");
        submenu.classList.add("main-nav__submenu--opened");
        buttonSub.classList.add("main-nav__button-submenu--rotate");
      } else {
        submenu.classList.remove("main-nav__submenu--opened");
        submenu.classList.add("main-nav__submenu--closed");
        buttonSub.classList.remove("main-nav__button-submenu--rotate");
      }
    };
  })
};

submenu();

// Submenu list

let submenuInner = function() {
  let submenuListsToggle = document.querySelectorAll(".main-nav__submenu-title");

  submenuListsToggle.forEach(element => {
    element.onclick = function(evt) {
      let innerList = element.nextElementSibling;
      let submenuArrow = element.children[1];
      if (innerList.classList.contains("main-nav__submenu-list--closed")) {
        innerList.classList.remove("main-nav__submenu-list--closed");
        innerList.classList.add("main-nav__submenu-list--opened");
        submenuArrow.classList.add("main-nav__button-submenu--rotate");
      } else {
        innerList.classList.remove("main-nav__submenu-list--opened");
        innerList.classList.add("main-nav__submenu-list--closed");
        submenuArrow.classList.remove("main-nav__button-submenu--rotate");
      }
    }
  });
};

submenuInner();

// Табы
let tab = function() {
  let tabBtn = document.querySelectorAll(".button__tab");
  let descriptionBlock = document.querySelectorAll(".products__swiper");
  let tabName;

  tabBtn.forEach(element => {
    element.addEventListener("click", selectTab)
  });

  function selectTab(evt) {
    evt.preventDefault();
    tabBtn.forEach(element => {
      element.classList.remove("products__swiper--show");
    });
    this.classList.add("products__swiper--show");
    tabName = this.getAttribute("data-tab");
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    descriptionBlock.forEach(element => {
      if (element.classList.contains(tabName)) {
        element.classList.add("products__swiper--show");
      } else {
        element.classList.remove("products__swiper--show");
      }
    });
  };
};

tab();
