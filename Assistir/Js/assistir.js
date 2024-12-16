// Função para inicializar os carrosséis
document.querySelectorAll('.carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');
    let currentIndex = 0;

    // Botão Próximo
    nextButton.addEventListener('click', () => {
        const items = track.querySelectorAll('.imagem');
        const itemWidth = items[0].offsetWidth + 10; // Largura + margem

        if (currentIndex < items.length - 1) {
            currentIndex++;
            track.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
        }
    });

    // Botão Anterior
    prevButton.addEventListener('click', () => {
        const items = track.querySelectorAll('.imagem');
        const itemWidth = items[0].offsetWidth + 10; // Largura + margem

        if (currentIndex > 0) {
            currentIndex--;
            track.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
        }
    });
});
