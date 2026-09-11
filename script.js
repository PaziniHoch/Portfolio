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