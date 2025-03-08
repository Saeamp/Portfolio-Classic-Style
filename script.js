document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.custom-cursor');
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    // Custom Cursor
    document.addEventListener('mousemove', (e) => {
        cursor.style.display = 'block';
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });

    document.addEventListener('mouseout', () => {
        cursor.style.display = 'none';
    });

    document.querySelectorAll('a, button').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
        });
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const offset = 80; // Adjust based on your navbar height
            window.scrollTo({
                top: target.offsetTop - offset,
                behavior: 'smooth'
            });
        });
    });

    // Mobile Menu Toggle
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});