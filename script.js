// Sayfa kaydırıldıkça ögelerin süzülerek gelmesi (Scroll Animation)
function reveal() {
  const reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
}

window.addEventListener('scroll', reveal);

// Sayfa ilk yüklendiğinde de çalıştır
reveal();

// Header arka planını kaydırınca belirginleştirme
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.padding = '12px 8%';
  } else {
    header.style.padding = '20px 8%';
  }
});
