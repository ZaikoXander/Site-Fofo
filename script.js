let menuglobal = [false, false, false];
let menu_item = document.getElementsByClassName('menu-item');
/**
 * Por algum motivo o *:hover* do CSS não está funcionando muito bem,
 * tive que apelar para essas funções :/ .
 */

function mouseover_menu_item(index) {
    menu_item[index].style.backgroundColor = 'rgba(179, 134, 168, 1)';
    menu_item[index].style.color = 'rgba(255, 251, 238, 1)';
}
function mouseout_menu_item(index) {
    if (menuglobal[index] != true) {
        menu_item[index].style.backgroundColor = 'rgba(255, 251, 238, 1)';
        menu_item[index].style.color = 'rgba(179, 134, 168, 1)';
    }
}

function fofo_nav(menu) {
    let nav_menus = document.querySelector('nav.nav-menus');
    let nav_menus_tutoriais = document.getElementById('tutoriais');
    let nav_menus_referencias = document.getElementById('referencias');
    let nav_menus_exercicios = document.getElementById('exercicios');
    let simbolo = document.getElementsByClassName('simbolo');

    /**
     * Função que reseta os elementos por índice.
     */
    function reseta(index1, index2 = null, index3 = null) {
        let displayNone = [
            function() {
                nav_menus_tutoriais.style.display = '';
            },
            function() {
                nav_menus_referencias.style.display = '';
            },
            function() {
                nav_menus_exercicios.style.display = '';
            }
        ]

        if (index2 == null && index3 == null) {
            menu_item[index1].style.backgroundColor = 'rgba(255, 251, 238, 1)';
            menu_item[index1].style.color = 'rgba(179, 134, 168, 1)';
            simbolo[index1].classList.replace('fa-caret-up', 'fa-caret-down');
            displayNone[index1]();
            menuglobal[index1] = false;
        } else if (index3 == null) {
            // Repete o código dentro de eval 2 vezes e adiciona índices de 1 a 2
            for (let i = 1; i < 3; i++) {
                eval(
                    `menu_item[index${i}].style.backgroundColor = 'rgba(255, 251, 238, 1)';
                    menu_item[index${i}].style.color = 'rgba(179, 134, 168, 1)';
                    simbolo[index${i}].classList.replace('fa-caret-up', 'fa-caret-down');
                    displayNone[index${i}]();
                    menuglobal[index${i}] = false;`
                )
            }
        } else {
            // Repete o código dentro de eval 3 vezes e adiciona índices de 1 a 3
            for (let i = 1; i < 4; i++) {
                eval(
                    `menu_item[index${i}].style.backgroundColor = 'rgba(255, 251, 238, 1)';
                    menu_item[index${i}].style.color = 'rgba(179, 134, 168, 1)';
                    simbolo[index${i}].classList.replace('fa-caret-up', 'fa-caret-down');
                    displayNone[index${i}]();
                    menuglobal[index${i}] = false;`
                )
            }
            nav_menus.style.display = '';
        }
    }

    /**
     * O *switch case* abaixo quando algum menu ser chamado irá definir
     * o menu aberto atualmente como *true* e os outros como *false*,
     * utiliza a *function reseta*.
     * Exemplo: Tente abrir o *tutoriais* e logo depois o *referencias*.
     */
    switch(menu) {
        case 'tutoriais':
            if (menuglobal[0] == true) {
                reseta(0, 1, 2);
            } else {
                menuglobal[0] = true;
                reseta(1, 2);
            }
            break;
        case 'referencias':
            if (menuglobal[1] == true) {
                reseta(0, 1, 2);
            } else {
                menuglobal[1] = true;
                reseta(0, 2);
            }
            break;
        case 'exercicios':
            if (menuglobal[2] == true) {
                reseta(0, 1, 2);
            } else {
                menuglobal[2] = true;
                reseta(0, 1);
            }
            break;
        default:
            reseta(0, 1, 2);
            break;
    }

    /**
     * Os *if's* abaixo atualizam as características dos elementos
     * caso algum menu seja chamado.
     */
    if(menuglobal.includes(true)) {
        nav_menus.style.display = 'block';
        if (menuglobal[0] == true) {
            nav_menus_tutoriais.style.display = 'block';
            menu_item[0].style.backgroundColor = 'rgba(179, 134, 168, 1)';
            menu_item[0].style.color = 'rgba(255, 251, 238, 1)';
            simbolo[0].classList.replace('fa-caret-down', 'fa-caret-up');
        } else if (menuglobal[1] == true) {
            nav_menus_referencias.style.display = 'block';
            menu_item[1].style.backgroundColor = 'rgba(179, 134, 168, 1)';
            menu_item[1].style.color = 'rgba(255, 251, 238, 1)';
            simbolo[1].classList.replace('fa-caret-down', 'fa-caret-up');
        } else {
            nav_menus_exercicios.style.display = 'block';
            menu_item[2].style.backgroundColor = 'rgba(179, 134, 168, 1)';
            menu_item[2].style.color = 'rgba(255, 251, 238, 1)';
            simbolo[2].classList.replace('fa-caret-down', 'fa-caret-up');
        }
    }
}