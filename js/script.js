// js/script.js
document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
});

// Modal para la galería
const modal = document.getElementById('gallery-modal');
const modalImg = document.getElementById('modal-image');
const closeModal = document.getElementById('close-modal');
const galleryItems = document.querySelectorAll('.gallery-item img');

galleryItems.forEach(item => {
    item.addEventListener('click', function () {
        modal.style.display = 'block';
        modalImg.src = this.src;
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