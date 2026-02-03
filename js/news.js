

const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');
const navMenu = document.querySelector('nav');

// Open Menu
menuBtn.addEventListener('click', () => {
    navMenu.classList.add('active');
  
    document.body.style.overflow = 'hidden'; 
});

// Close Menu
closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('active');
    // Restore scrolling
    document.body.style.overflow = 'auto';
});
    
 