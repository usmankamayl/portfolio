const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

const skillsRating = document.querySelector('.skills__ratings');
       skillBox = skillsRating.offsetTop;
      console.log(window.innerHeight, ' window.innerHeight');
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');


window.addEventListener('scroll', function () {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition + window.innerHeight >= skillBox) {
        counters.forEach( (item, i) => {
            lines[i].style.width = item.innerHTML;
        });
    } 
});