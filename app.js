var menu = document.querySelector(".hamburger_menu");
var modal = document.querySelector(".modal");
var closeButton = document.querySelector(".close");
var modalLinks = document.querySelectorAll(".modal_contents__link");
//var modalLinkedIn = document.querySelector('');

menu.addEventListener('click',function(){
    modal.style.display = 'block';
    modalLinks.forEach( function(modalLink) {
        modalLink.style.display = 'block';
    })
});

closeButton.addEventListener('click',function(){
    modal.style.display = 'none';
});