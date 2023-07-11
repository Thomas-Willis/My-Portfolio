document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links ul li a');
  
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = target.offsetTop;
  
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      });
    });
  });
  

const scrollLink = document.getElementById('scrollLink');

scrollLink.addEventListener('click', function(e) {
  e.preventDefault();

  const target = document.querySelector(this.getAttribute('href'));
  const offset = target.offsetTop;

  window.scrollTo({
    top: offset,
    behavior: 'smooth'
  });
});
