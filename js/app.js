// Изменяет цвет header при скоролле на более темный цвет.
const intro = document.querySelector('.intro');
const header = document.querySelector('.header');

let introHeight = intro.offsetHeight;
// console.log(introHeight)

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    // console.log(scrollDistance);

    if(scrollDistance >= introHeight) {
        header.classList.add('header--dark')
    } else {
        header.classList.remove('header--dark')
    }
})



// Меню бургер.
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('active__mobile');
    document.body.classList.toggle('no-scroll');
})



// Скролл по навигации.
const menuLinks = document.querySelectorAll('.nav__link[data-goto]');

if(menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(event) {
        const menuLink = event.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - header.offsetHeight;
        
            // Закрытие мобильного меню по клике на ссылку.
            if(nav.classList.contains('active__mobile')) {
                nav.classList.remove('active__mobile');
                document.body.classList.remove('no-scroll');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth',
            });

            event.preventDefault();
        }
    }
}



// Модалка becomeClient.
const becomeClientModalButtons = document.querySelectorAll('[data-modal-button-client]');
const modalButtonsClose = document.querySelectorAll('[data-modal-close]');
const becomeClientModal = document.querySelector('#becomeClientModal');

// Вызов модальных окон becomeClient.
becomeClientModalButtons.forEach((becomeClientModalButton) => {
    becomeClientModalButton.addEventListener('click', () => {
        becomeClientModal.classList.add('show');
        document.body.classList.add('no-scroll');

        // Убераем всплытие.
        becomeClientModal.querySelector('.modal__inner').addEventListener('click', (event) => event.stopPropagation());
    })
})

// Закрытие модальных окон becomeClient.
modalButtonsClose.forEach((ьodalButtonClose) => {
    ьodalButtonClose.addEventListener('click', () => {
        becomeClientModal.classList.remove('show');
        document.body.classList.remove('no-scroll');
    })
})

// Закрытие по нажатию на фейд модальных окон becomeClient.
becomeClientModal.addEventListener('click', function() {
    this.classList.remove('show');
    document.body.classList.remove('no-scroll');
})



// Модалка thanksModal.
const thanksModalButtons = document.querySelectorAll('[data-modal-button-thanks]');
const thanksModal = document.querySelector('#thanksModal');

// Вызов модальных окон thanksModal.
thanksModalButtons.forEach((thanksModalButton) => {
    thanksModalButton.addEventListener('click', () => {
        thanksModal.classList.add('show');
        document.body.classList.add('no-scroll');

        // Убераем всплытие.
        thanksModal.querySelector('.modal__inner').addEventListener('click', (event) => event.stopPropagation());
    })
})

// Закрытие модальных окон becomeClient.
modalButtonsClose.forEach((modalButtonClose) => {
    modalButtonClose.addEventListener('click', () => {
        thanksModal.classList.remove('show');
        document.body.classList.remove('no-scroll');
    })
})

// Закрытие по нажатию на фейд модальных окон becomeClient.
thanksModal.addEventListener('click', function() {
    this.classList.remove('show');
    document.body.classList.remove('no-scroll');
})



// Отменяет поведение кпопки submit, чтобы првоерить модалку thanksModal.
document.querySelectorAll('[type="submit"]').forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
    })
})



// Swiper
const swiper = new Swiper('.swiper', {
    // direction: 'vertical',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets,'
    },
  });