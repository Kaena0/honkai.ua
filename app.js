document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
        slides.forEach((slide, idx) => {
            slide.classList.toggle('active', idx === index);
        });
    }

    function changeSlide(step) {
        currentSlide = (currentSlide + step + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    document.querySelectorAll('.prev').forEach(button => {
        button.addEventListener('click', () => {
            changeSlide(-1);
        });
    });

    document.querySelectorAll('.next').forEach(button => {
        button.addEventListener('click', () => {
            changeSlide(1);
        });
    });

    function toggleText(slideId, type) {
        const historyText = document.getElementById(`history-text-${slideId}`);
        const roleText = document.getElementById(`role-text-${slideId}`);
        if (type === 'history') {
            historyText.classList.remove('hidden');
            roleText.classList.add('hidden');
        } else {
            roleText.classList.remove('hidden');
            historyText.classList.add('hidden');
        }
    }

    window.toggleText = toggleText;
    showSlide(currentSlide); // Initialize the slideshow
});

document.querySelector('.download-button').addEventListener('click', function(e) {
    e.preventDefault(); // Запобігає стандартній поведінці кнопки
    document.getElementById('footer-section').scrollIntoView({ behavior: 'smooth' });
  });

  menuIcon.addEventListener('click', function() {
    // Переключає відображення мобільного меню
    if (mobileNav.style.display === 'block') {
      mobileNav.style.display = 'none';
    } else {
      mobileNav.style.display = 'block';
    }

});