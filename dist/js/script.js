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

// skroll

const menuLinks = menu.querySelectorAll('.menu__link a');
const btnUp = document.querySelector('.btnUp');
const contentBox = document.querySelector('.content');
const menuSocialLinks = document.querySelectorAll('.menu__social a');
menuSocialLinks.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    })
})
menuLinks.forEach(i => {
    i.addEventListener('click', () => {
        menu.classList.remove('active');
    })
})
delegate(menu, 'click', '.menu__link a', function(e){
    e.preventDefault();
    scrollToId(this.hash);
});

btnUp.addEventListener('click', function(){
    scrollToY(0);
});

window.addEventListener('scroll', function(){
    const pos = window.scrollY;

    if(pos > window.innerHeight / 2){
        btnUp.classList.add('btnUp-showed');
    }
    else{
        btnUp.classList.remove('btnUp-showed');
    }

    for(let i = menuLinks.length - 1; i >= 0; i--){
        let link = menuLinks[i];
        let header = document.querySelector(link.hash);
        let headerTop = header.getBoundingClientRect().top + window.scrollY;

        if(pos + window.innerHeight / 2 > headerTop){
            cleanMenuActiveItem();
            link.classList.add('menu__link-active');
            break;
        }
    }
    console.log('here');
});

if(window.location.hash){
    scrollToId(window.location.hash, false);
}

function cleanMenuActiveItem(){
    const activeLink = menu.querySelector('.menu__link-active');

    if(activeLink){
        activeLink.classList.remove('menu__link-active');
    }
}

function scrollToId(id, smooth = true){
    const header = document.querySelector(id);
    const contentOffet = parseInt(window.getComputedStyle(contentBox).marginTop);
    scrollToY(header.getBoundingClientRect().top + window.scrollY - contentOffet, smooth);
}

function scrollToY(top, smooth = true){
    window.scroll({
        top,
        behavior: smooth ? "smooth" : "instant",
    });
}

function delegate(box, eventname, selector, fn){
    box.addEventListener(eventname, function(e){
        const el = e.target.closest(selector);

        if(el !== null && box.contains(el)){
            fn.call(el, e);
        }
    });
}