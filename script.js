let menuglobal = [false, false, false, false];
let nav_menus = document.querySelector('nav.nav-menus');
let nav_menus_tutoriais = document.querySelector('div.nav-menus-tutoriais');
let nav_menus_referencias = document.querySelector('div.nav-menus-referencias');
let nav_menus_exercicios = document.querySelector('div.nav-menus-exercicios');
let nav_menus_videos = document.querySelector('div.nav-menus-videos');
function fofo_nav(menu) {
    let simbolo = document.getElementsByClassName('simbolo');
    nav_menus.classList.toggle('ativo');
    switch (menu) {
        case 'tutoriais':
            nav_menus_tutoriais.classList.toggle('ativo');
            break;
        case 'referencias':
            nav_menus_referencias.classList.toggle('ativo');
        default:
            break;
    }
    /*
    if(!menuglobal.includes(true)) {
        nav_menus.style.display = 'block';
        switch (menu) {
            case 'tutoriais':
                nav_menus_tutoriais.style.display = 'block';
                simbolo[0].innerHTML = '&utrif;';
                menuglobal[0] = true;
                break;
            case 'referencias':
                nav_menus_referencias.style.display = 'block';
                simbolo[1].innerHTML = '&utrif;';
                menuglobal[1] = true;
                break;
                case 'exercicios':
                nav_menus_exercicios.style.display = 'block';
                simbolo[2].innerHTML = '&utrif;';
                menuglobal[2] = true;
                break;
            case 'videos':
                nav_menus_videos.style.display = 'block';
                simbolo[3].innerHTML = '&utrif;';
                menuglobal[3] = true;
                break;
            default:
                break;
        }
    } else {
        nav_menus.style.display = '';
        simbolo[0].innerHTML = '&dtrif;';
        simbolo[1].innerHTML = '&dtrif;';
        simbolo[2].innerHTML = '&dtrif;';
        simbolo[3].innerHTML = '&dtrif;';
        nav_menus_tutoriais.style.display = '';
        nav_menus_referencias.style.display = '';
        nav_menus_exercicios.style.display = '';
        nav_menus_videos.style.display = '';
    }
    */
}