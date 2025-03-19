// js/script.js
// Galería deslizable y modal
if (document.querySelector('.gallery-container')) {
    const galleryContainer = document.querySelector('.gallery-container');
    const prevButton = document.querySelector('.gallery-prev');
    const nextButton = document.querySelector('.gallery-next');
    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('modal-image');
    const modalDesc = document.getElementById('modal-description');
    const closeModal = document.getElementById('close-modal');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const itemWidth = 300 + 15; // Ancho del item (300px) + gap (15px)

    // Desplazamiento de la galería
    prevButton.addEventListener('click', function () {
        galleryContainer.scrollLeft -= itemWidth;
    });

    nextButton.addEventListener('click', function () {
        galleryContainer.scrollLeft += itemWidth;
    });

    // Modal al hacer clic en una imagen
    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            modal.style.display = 'block';
            modalImg.src = this.querySelector('img').src;
            modalDesc.textContent = this.getAttribute('data-description');
        });
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

