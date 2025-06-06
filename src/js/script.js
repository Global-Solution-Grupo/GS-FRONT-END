
//DECLARANDO AS VARIAVEIS
const hamburguer = document.querySelector('.hamburguer');
const headerMenu = document.querySelector('.header-menu');

//CRIANDO A FUNÇÃO PARA VERIFICAR SE ESTÁ ATIVO OU NÃO
function toggleMenu(){
    hamburguer.classList.toggle('active');
    headerMenu.classList.toggle('active');
}
//CRIA O EVENTO PARA EXECUTAR O CLICK
hamburguer.addEventListener('click', toggleMenu);
headerMenu.addEventListener('click', (e) => {
    if (e.target.classList.contains('item-menu')) {
        toggleMenu();
    }
});

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

//DECLARANDO UM ARRAY DE IMAGENS

let imagens =[
    'src/assets/home.jpg',
    'src/assets/home2.jpg',
    'src/assets/home3.jpg',
]

//DECLARANDO AS VARIAVEIS

let i = 0;
let tempo = 3000;

//CRIANDO A FUNÇÃO DO SLIDESHOW

function slideShow() {
    const hero = document.querySelector('.hero');
    hero.style.backgroundImage = `linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(${imagens[i]})`;
    i++;
    if (i === imagens.length) i = 0;
    setTimeout(slideShow, tempo);
}
slideShow();