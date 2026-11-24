const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle?.setAttribute("aria-expanded", "false");
}));
const revealTargets = document.querySelectorAll(".content-section, .project-card, .lead-card, .cert-card");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
revealTargets.forEach(el => {
  el.classList.add("reveal-ready");
  observer.observe(el);
});
