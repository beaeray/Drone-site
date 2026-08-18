// Sayfa içi menü linklerine basıldığında yumuşak kaydırma (Smooth Scroll)
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// WhatsApp ve Telefon İletişim Tıklama Takibi
const waButtons = document.querySelectorAll('.float-wa, .btn-main.wa');
waButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Kullanıcı WhatsApp hattına yönlendirildi.');
    });
});

// Sayfa Kaydırıldığında Navbar Arka Planını Koyulaştırma
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#101014';
        header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.5)';
    } else {
        header.style.backgroundColor = '#18181c';
        header.style.boxShadow = 'none';
    }
});
