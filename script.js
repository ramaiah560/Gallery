
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const images = document.querySelectorAll('.image-item');
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const caption = document.getElementById('caption');
    const closeBtn = document.querySelector('.close-btn');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
  
        images.forEach(image => {
          if (category === 'all' || image.classList.contains(category)) {
            image.style.display = 'block';
          } else {
            image.style.display = 'none';
          }
        });
      });
    });
  
    
    images.forEach(image => {
      image.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = image.src;
        caption.textContent = image.getAttribute('data-caption');
      });
    });
  
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  