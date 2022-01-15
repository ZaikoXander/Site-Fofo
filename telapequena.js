setInterval(function() {funcao_telapequena();}, 100);
function funcao_telapequena() {
    let nav_menu = document.querySelector('div.nav-menu');
    if (menuglobal[0] == true && window.innerWidth <= 902 || menuglobal[1] == true && window.innerWidth <= 1096 || menuglobal[2] == true && window.innerWidth <= 889) {
        nav_menu.style.height = 'calc(720px * 2)';
    } else {
        nav_menu.style.height = '840px';
    }
}