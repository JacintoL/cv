document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Fechar o menu ao clicar no link
            const navLinks = document.getElementById('nav-links');
            navLinks.classList.remove('open');  // Remove a classe 'open' para fechar o menu
        });
    });

    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    // Adiciona um evento de clique no menu hamburguer
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');  // Alterna a classe 'open'
    });
});
