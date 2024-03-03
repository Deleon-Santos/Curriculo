document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Oculta todas as seções
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('ativa');
        });

        // Obtém o ID da seção correspondente ao link clicado
        const targetId = this.getAttribute('href').substring(1);

        // Ativa a seção correspondente
        document.getElementById(targetId).classList.add('ativa');
    });
});