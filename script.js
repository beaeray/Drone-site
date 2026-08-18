const heroBg = document.querySelector(".hero-bg");

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    if (heroBg && scroll < window.innerHeight) {

        heroBg.style.transform =
            `scale(1.08) translateY(${scroll * 0.1}px)`;

    }

});


/* SMOOTH SCROLL */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

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