// Seleciona os elementos do menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Abre o menu ao clicar no hamburguer
navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
});

// Fecha o menu ao clicar no botão de fechar
navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
});