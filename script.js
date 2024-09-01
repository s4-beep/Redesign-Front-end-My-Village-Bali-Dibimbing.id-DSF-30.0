document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.navbar-toggle');
    const navMenu = document.querySelector('.navbar-menu');
    const navLinks = document.querySelectorAll('.navbar-menu a');
  
    // Toggle menu visibility on button click
    toggleBtn.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      toggleBtn.classList.toggle('active');
    });
  
    // Highlight active link
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        this.classList.add('active');
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
        }
      });
    });
  });
  