function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

const fadeElements = document.querySelectorAll('.fade-in');

function checkFade() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50 && !el.classList.contains('show')) {
      el.classList.add('show');
    }
  });
}

let scrollScheduled = false;
window.addEventListener('scroll', () => {
  if (!scrollScheduled) {
    scrollScheduled = true;
    requestAnimationFrame(() => {
      checkFade();
      scrollScheduled = false;
    });
  }
});

window.addEventListener('load', checkFade);
