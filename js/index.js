// const navMobile = document.querySelector('.nav__mobile');
// const navBtn = document.querySelector('.hamburger');


// const handleNav = () => {
// 	navBtn.classList.toggle('is-active');

// 	navMobile.classList.toggle('nav__mobile--active');
// };

// navBtn.addEventListener('click', handleNav);

//NAV

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMobile = document.querySelector('.nav__mobile');
    const navItems = document.querySelectorAll('.nav-item');
  
    function toggleNav() {
      navMobile.classList.toggle('nav__mobile--active');
      hamburger.classList.toggle('is-active');
    }
  
    hamburger.addEventListener('click', toggleNav);
  
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        if (navMobile.classList.contains('nav__mobile--active')) {
          toggleNav();
        }
      });
    });
  });

  //double-click 



//scrollspy

document.addEventListener('DOMContentLoaded', function(){

    const navLogo = document.querySelector('.nav-item-home')

    function addLogo() {
        if (window.scrollY >= 600) {
            navLogo.classList.add('nav-item-home-active')
        } else {
            navLogo.classList.remove('nav-item-home-active')
        }
    }
    window.addEventListener('scroll', addLogo)
})


const footerYear = document.querySelector('.footer__year');
const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}
handleCurrentYear();

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // zatrzymaj domyślną akcję formularza
  // Tutaj możesz dodać logikę do wysłania formularza
  document.getElementById('messageBox').style.display = 'block'; // wyświetl komunikat
});

document.getElementById('closeButton').addEventListener('click', function() {
  document.getElementById('messageBox').style.display = 'none'; // ukryj komunikat
});
