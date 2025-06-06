document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.querySelector("#titulo");
    titulo.style.opacity = 0;
    titulo.style.transform = "translateY(-50px)";
    titulo.style.transition = "all 1s ease-in-out";

    setTimeout(() => {
        titulo.style.opacity = 1;
        titulo.style.transform = "translateY(0)";
    }, 200);
});
document.querySelectorAll('.item-menu').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.1)';
        item.style.transition = 'transform 0.3s ease';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});