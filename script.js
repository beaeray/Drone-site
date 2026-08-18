const hero = document.querySelector(".hero");
const heroBg = document.querySelector(".hero-bg");

const serviceCards = document.querySelectorAll(".service-card");
const portfolioCards = document.querySelectorAll(".portfolio-card");


/* SCROLL REVEAL */

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);


serviceCards.forEach((card) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "opacity .8s ease, transform .8s ease";

    observer.observe(card);

});


portfolioCards.forEach((card) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "opacity .8s ease, transform .8s ease";

    observer.observe(card);

});


/* HERO PARALLAX */

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    if (heroBg && scroll < window.innerHeight) {

        heroBg.style.transform =
            `scale(1.08) translateY(${scroll * 0.10}px)`;

    }

});


/* SMOOTH NAVIGATION */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const target = document.querySelector(
            link.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});