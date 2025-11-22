// scripts.js — revela elementos al hacer scroll (animaciones suaves)
document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach((el, i) => {
    // escalona la entrada automáticamente (stagger)
    if (!el.style.getPropertyValue("--delay")) {
      el.style.setProperty("--delay", (i * 60) + "ms");
    }
    io.observe(el);
  });
});
