var menu = document.querySelector(".hamburger_menu");
var modal = document.querySelector(".modal");
var closeButton = document.querySelector(".close");
var modalLinks = document.querySelectorAll(".modal_contents__link");
var introPara = document.querySelector("#myIntroduction");
var aboutMeOption = document.querySelector('.modal_contents > a:nth-of-type(2)');

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
    //introPara.style.boxShadow= '10px 5px 5px rgb(231 207 73)';
    modal.style.display = 'none';
});