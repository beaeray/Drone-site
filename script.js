const animatedElements = document.querySelectorAll(
    ".service-card, .portfolio-item"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach((element) => {

    observer.observe(element);

});


/* HERO PARALLAX */

const heroBg = document.querySelector(".hero-bg");

window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY;

    if (heroBg && scrollPosition < window.innerHeight) {

        heroBg.style.transform =
            `scale(1.05) translateY(${scrollPosition * 0.15}px)`;

    }

});