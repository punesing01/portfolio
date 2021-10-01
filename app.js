var menu = document.querySelector(".hamburger_menu");
var modal = document.querySelector(".modal");
var closeButton = document.querySelector(".close");
var modalLinks = document.querySelectorAll(".modal_contents__link");
var introPara = document.querySelector("#myIntroduction");
var aboutMeOption = document.querySelector('.modal_contents > a:nth-of-type(2)');
var getInTouchButton = document.querySelector('.main_intro__button');
var contactModal = document.querySelector('.contact_modal');
var contactFormCloseButton = document.querySelector('.contact_close');
var body = document.querySelector('.body_main');

menu.addEventListener('click',function(){
    modal.style.display = 'block';
    modalLinks.forEach( function(modalLink) {
        modalLink.style.display = 'block';
    })
});

closeButton.addEventListener('click',function(){
    modal.style.display = 'none';
});

aboutMeOption.addEventListener('click',function(){
    modal.style.display = 'none';
});

getInTouchButton.addEventListener('click',function(){
    contactModal.style.display='flex';
    body.style.opacity='0.2';
});

contactFormCloseButton.addEventListener('click',function(){
    contactModal.style.display='none';
    body.style.opacity='1';
});