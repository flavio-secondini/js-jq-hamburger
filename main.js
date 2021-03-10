// cerco i tre compopnenti html su cui sono interessato ad interagire e li salvo per js

var hamburgerMenu = $("div.hamburger-menu");

var menuIcon = $(".fas.fa-bars");

var closeMenu = $(".fas.fa-times");

// funzione 1: se clicco sull'icona "menu", mostra il div nascosto con classe hamburger-menu
// funzione 2: se clicco l'icona "X" dell'hamburger menu, quest'ultimo torna nascosto

menuIcon.on("click", function(event) {
  hamburgerMenu.show();
})

closeMenu.on("click", function(event) {
  hamburgerMenu.hide();
})
