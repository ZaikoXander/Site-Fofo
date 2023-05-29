function funcaoTelapequena() {
  let navMenu = document.querySelector('div.nav-menu');
  if (menuGlobal[0] == true && window.innerWidth <= 902 || menuGlobal[1] == true && window.innerWidth <= 1096 || menuGlobal[2] == true && window.innerWidth <= 889) {
    navMenu.style.height = '1440px';
    if (menuGlobal[0] == true && window.innerWidth <= 640) {
      navMenu.style.height = '2500px';
    } else if (menuGlobal[1] == true && window.innerWidth <= 640) {
      navMenu.style.height = '1790px';
    } else {
      navMenu.style.height = '2710px';
    }
  } else {
    navMenu.style.height = '840px';
  }
}

setInterval(funcaoTelapequena, 100)
