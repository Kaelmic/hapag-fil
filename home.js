const hero = document.querySelector(".hero");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    hero.style.backgroundPosition = `center ${scrollY * 0.35}px`;
  });
  
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
      threshold: 0.15
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));