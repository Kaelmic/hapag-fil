const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (hero) {
    // hero.style.backgroundPosition = `center ${scrollY * 0.35}px`;
  }
});

/* Reveal animation */
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((el) => revealObserver.observe(el));

/* Mobile burger menu */
const burgerBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const navbar = document.querySelector(".navbar");

function closeMobileMenu() {
  mobileMenu.classList.remove("active");
  burgerBtn.classList.remove("active");
  navbar.classList.remove("menu-open");
}

if (burgerBtn && mobileMenu && navbar) {
  burgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    mobileMenu.classList.toggle("active");
    burgerBtn.classList.toggle("active");
    navbar.classList.toggle("menu-open");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("click", (e) => {
    const clickedInsideMenu = mobileMenu.contains(e.target);
    const clickedBurger = burgerBtn.contains(e.target);

    if (!clickedInsideMenu && !clickedBurger) {
      closeMobileMenu();
    }
  });

  window.addEventListener("scroll", () => {
    if (mobileMenu.classList.contains("active")) {
      closeMobileMenu();
    }
  });
}
