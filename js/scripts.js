
// Project Gallery
document.addEventListener('DOMContentLoaded', () => {
    const projectThumbs = document.querySelectorAll('.project-thumb');
    const modal = document.getElementById('photo-modal');
    const modalImg = document.getElementById('modal-img');
    const modalText = document.getElementById('modal-text');
    const closeBtn = document.querySelector('.close');

    modal.style.display = 'none'; // Ensure the modal is hidden initially

    projectThumbs.forEach(item => {
        item.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = item.getAttribute('data-src');
            modalText.innerHTML = item.getAttribute('data-text');
            document.body.classList.add('no-scroll');
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.classList.remove('no-scroll');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.classList.remove('no-scroll');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.style.display = 'none';
            document.body.classList.remove('no-scroll');
        }
    });
});
