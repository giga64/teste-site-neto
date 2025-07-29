document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Função para aplicar o tema salvo
    const applyTheme = (theme) => {
        if (theme === 'dark-mode') {
            body.classList.add('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Ícone de sol para modo escuro
        } else {
            body.classList.remove('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Ícone de lua para modo claro
        }
    };

    // Verifica se o usuário já tem uma preferência de tema salva no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Se não houver tema salvo, verifica a preferência do sistema operacional
        applyTheme('dark-mode');
    } else {
        // Padrão para modo claro se nenhuma preferência for encontrada
        applyTheme('light-mode');
    }

    // Adiciona evento de clique ao botão de alternar tema
    themeToggle.addEventListener('click', () => {
        // Alterna a classe 'dark-mode' no body
        body.classList.toggle('dark-mode');

        // Salva a preferência do tema no localStorage e atualiza o ícone
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('theme', 'light-mode'); // Salva explicitamente "light-mode"
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });

    // Animação de scroll suave para os links da navegação
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});