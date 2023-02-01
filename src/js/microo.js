import Alpine from 'alpinejs';
import GLightbox from 'glightbox';

window.Alpine = Alpine;

const lightbox = GLightbox({
    touchNavigation: true,
    loop: false,
    autoplayVideos: true
});

Alpine.start();
