setInterval(function() {funcao_telapequena();}, 100);
function funcao_telapequena() {
    let nav_menu = document.querySelector('div.nav-menu');
    if (menuglobal[0] == true && window.innerWidth <= 902 || menuglobal[1] == true && window.innerWidth <= 1096 || menuglobal[2] == true && window.innerWidth <= 889) {
        nav_menu.style.height = '1440px';
        if (menuglobal[0] == true && window.innerWidth <= 640) {
            nav_menu.style.height = '2500px';
        } else if (menuglobal[1] == true && window.innerWidth <= 640) {
            nav_menu.style.height = '1790px';
        } else {
            nav_menu.style.height = '2710px';
        }
    } else {
        nav_menu.style.height = '840px';
    }
}