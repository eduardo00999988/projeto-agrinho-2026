document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    // Abrir e Fechar Menu Lateral/Suspenso ao clicar nas 3 linhas
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        
        // Efeito visual opcional de "X" no botão hamburguer
        menuToggle.classList.toggle("toggle-open");
    });

    // Fechar o menu ao clicar em qualquer link de navegação
    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });

    // Animação simples de scroll suave para os links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});