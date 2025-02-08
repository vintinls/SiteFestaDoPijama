document.addEventListener("DOMContentLoaded", function() {
    console.log("O site foi carregado com sucesso!");

    let currentIndex = 1;
    const images = document.querySelectorAll('.carousel-image');
    const totalImages = images.length;
    const carouselImages = document.getElementById('carousel-images');
    const imageWidth = images[0].offsetWidth + 20; // Largura da imagem + margem

    // Posiciona no início correto (a primeira imagem real)
    carouselImages.style.transform = 'translateX(' + (-currentIndex * imageWidth) + 'px)';

    document.getElementById('next').onclick = function() {
        if (currentIndex >= totalImages - 1) return; // Evita ultrapassar o limite
        currentIndex++;
        updateCarousel();
    };

    document.getElementById('prev').onclick = function() {
        if (currentIndex <= 0) return; // Evita ultrapassar o limite
        currentIndex--;
        updateCarousel();
    };

    function updateCarousel() {
        carouselImages.style.transition = 'transform 0.5s ease';
        carouselImages.style.transform = 'translateX(' + (-currentIndex * imageWidth) + 'px)';

        // Transição suave para o início ou fim se necessário
        carouselImages.addEventListener('transitionend', function() {
            if (currentIndex === 0) {
                // Se estiver no clone da última imagem, volta para a original sem transição
                carouselImages.style.transition = 'none';
                currentIndex = totalImages - 2;
                carouselImages.style.transform = 'translateX(' + (-currentIndex * imageWidth) + 'px)';
            } else if (currentIndex === totalImages - 1) {
                // Se estiver no clone da primeira imagem, vai para a original sem transição
                carouselImages.style.transition = 'none';
                currentIndex = 1;
                carouselImages.style.transform = 'translateX(' + (-currentIndex * imageWidth) + 'px)';
            }
        });
    }
    // Carrossel de fotos e textos
let currentTextIndex = 0;
const textItems = document.querySelectorAll('.carousel-item');
const totalTextItems = textItems.length;

document.getElementById('next-text').onclick = function() {
    currentTextIndex++;
    if (currentTextIndex >= totalTextItems) {
        currentTextIndex = 0; // Volta ao início
    }
    updateTextCarousel();
};

document.getElementById('prev-text').onclick = function() {
    currentTextIndex--;
    if (currentTextIndex < 0) {
        currentTextIndex = totalTextItems - 1; // Volta ao final
    }
    updateTextCarousel();
};

function updateTextCarousel() {
    textItems.forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentTextIndex) {
            item.classList.add('active');
        }
    });
}

// Inicia com o primeiro item ativo
textItems[0].classList.add('active');

});
