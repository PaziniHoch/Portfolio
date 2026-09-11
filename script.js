function typewriter(elementId, texto, velocidade = 80) {
    const el = document.getElementById(elementId);
    el.textContent = "";
    let i = 0;

    function digitar() {
        if (i < texto.length) {
            el.textContent += texto.charAt(i);
            i++;
            setTimeout(digitar, velocidade);
        }
    }

    digitar();
}

// Uso:
typewriter("typewriter-text", "Desenvolvedor FullStack em Formação", 80);



const btnMenu = document.getElementById('btn-menu');
const menuNavegacao = document.querySelector('.menu-navegacao');
const overlayMenu = document.getElementById('overlay-menu');

function toggleMenu() {
    btnMenu.classList.toggle('ativo');
    menuNavegacao.classList.toggle('ativo');
    overlayMenu.classList.toggle('ativo');
}

btnMenu.addEventListener('click', toggleMenu);
overlayMenu.addEventListener('click', toggleMenu);

// Fecha o menu automaticamente ao clicar em um link
document.querySelectorAll('.menu-navegacao a').forEach(link => {
    link.addEventListener('click', () => {
        if (menuNavegacao.classList.contains('ativo')) {
            toggleMenu();
        }
    });
});