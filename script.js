document.addEventListener("DOMContentLoaded", () => {
 document.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll('.hidden-on-load');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    hiddenElements.forEach((el) => observer.observe(el));
});
