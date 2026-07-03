// script.js

// 1. Configuração do Design System (Tailwind)
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    orange: '#f27c22',      // Destaque CTA (Logo)
                    earthLight: '#eaddcc',  // Fundo terroso claro
                    earthDark: '#cc9c72',   // Fundo terroso escuro
                    textMain: '#2d3748',    // Texto legível principal
                    lupe: '#4a6629'         // Verde institucional LUPE
                }
            },
            fontFamily: {
                heading: ['Montserrat', 'sans-serif'],
                body: ['Open Sans', 'sans-serif'],
            }
        }
    }
};

// 2. Comportamento Interativo: Sombra no cabeçalho ao rolar a página
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('shadow-md');
            header.classList.remove('shadow-sm');
        } else {
            header.classList.remove('shadow-md');
            header.classList.add('shadow-sm');
        }
    });
});
