// js/theme.js

// Función para inicializar el tema
function initializeTheme() {
    const toggleThemeButton = document.getElementById('theme-toggle') || createThemeButton();

    // Verificar preferencia guardada en localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleThemeButton.textContent = 'Modo Claro';
    } else if (savedTheme === 'light') {
        document.body.classList.remove('dark-mode');
        toggleThemeButton.textContent = 'Modo Oscuro';
    } else {
        // Si no hay preferencia guardada, usar el tema del sistema
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode');
            toggleThemeButton.textContent = 'Modo Claro';
        } else {
            toggleThemeButton.textContent = 'Modo Oscuro';
        }
    }

    // Evento para cambiar el tema
    toggleThemeButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            toggleThemeButton.textContent = 'Modo Claro';
            localStorage.setItem('theme', 'dark');
        } else {
            toggleThemeButton.textContent = 'Modo Oscuro';
            localStorage.setItem('theme', 'light');
        }
    });
}

// Función para crear el botón si no existe en el HTML
function createThemeButton() {
    const button = document.createElement('button');
    button.id = 'theme-toggle';
    button.textContent = 'Cambiar Tema';
    document.body.appendChild(button);
    return button;
}

// Inicializar el tema al cargar la página
document.addEventListener('DOMContentLoaded', initializeTheme);