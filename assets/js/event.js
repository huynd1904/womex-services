$(document).ready(function () {
  // who-for carousel

  // team carousel
  $(".team-carousel").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    dots: true,
    nav: false,
    navText: ["<img src='./img/priv.png'>", "<img src='./img/next.png'>"],
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      500: {
        items: 2,
        nav: true,
      },
      900: {
        items: 3,
      },
      1080: {
        items: 4,

        loop: true,
      },
    },
  });

  // partner-carousel
  $(".logo-carousel").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: true,
    dots: false,
    navText: ["<img src='./img/priv.png'>", "<img src='./img/next.png'>"],
    responsive: {
      0: {
        items: 2,
      },
      500: {
        items: 3,
      },
      800: {
        items: 4,
      },
      1000: {
        items: 6,

        loop: true,
      },
    },
  });
});

const nav = document.querySelector(".navbar");
const header = document.querySelector(".header");

const stickyPoint = document.querySelector(".header__content");

var logo = document.querySelector(".logo");
var logoLight = document.querySelector(".logo-light");

const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
    logo.classList.remove("hidden");
    logoLight.classList.add("hidden");
  } else {
    nav.classList.remove("sticky");
    logo.classList.add("hidden");
    logoLight.classList.remove("hidden");
  }
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(stickyPoint);

const mbMenuItemHasSub = document.querySelectorAll("#mb-menu .has-sub-menu");
mbMenuItemHasSub.forEach((item) => {
  item.addEventListener("click", function () {
    const subMenu = item.querySelector(".sub-menu-mobile");
    subMenu.classList.toggle("hidden");
  });
});
