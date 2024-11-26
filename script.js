window.onscroll = function() {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    const headerBorder = document.getElementById('headerBorder');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    // Change navbar background based on scroll
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update the header border width based on scroll position
    const totalHeight = document.body.scrollHeight - window.innerHeight; // Total scrollable height
    const scrollPercent = (window.scrollY / totalHeight); // Calculate scroll percentage
    const headerWidth = navbar.offsetWidth; // Get the width of the navbar
    headerBorder.style.width = (scrollPercent * headerWidth) + 'px'; // Set the width of the header border
};

// Menu button functionality remains the same
document.getElementById('menuButton').onclick = function() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active'); // Toggle the active class to show/hide the menu
};