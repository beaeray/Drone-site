const hero = document.querySelector(".hero");
const heroImage = document.querySelector(".hero-image");

const services = document.querySelectorAll(".service");
const photos = document.querySelectorAll(".photo");


/* SCROLL ANIMATION */

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);


services.forEach((service) => {
    observer.observe(service);
});

photos.forEach((photo) => {
    observer.observe(photo);
});


/* DRONE PARALLAX EFFECT */

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    if (heroImage && scroll < window.innerHeight) {

        heroImage.style.transform =
            `scale(1.05) translateY(${scroll * 0.12}px)`;

    }

});
