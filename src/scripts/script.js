let menuGlobal = [false, false, false];
let menuItem = document.getElementsByClassName('menu-item');
/**
* Por algum motivo o *:hover* do CSS não está funcionando muito bem,
* tive que apelar para essas funções :/ .
*/

function mouseoverMenuItem(index) {
  menuItem[index].style.backgroundColor = 'rgba(179, 134, 168, 1)';
  menuItem[index].style.color = 'rgba(255, 251, 238, 1)';
}
function mouseoutMenuItem(index) {
  if (menuGlobal[index] != true) {
    menuItem[index].style.backgroundColor = 'rgba(255, 251, 238, 1)';
    menuItem[index].style.color = 'rgba(179, 134, 168, 1)';
  }
}

function fofoNav(menu) {
  let navMenu = document.querySelector('div.nav-menu');
  let navMenuTutoriais = document.getElementById('tutoriais');
  let navMenuReferencias = document.getElementById('referencias');
  let navMenuExercicios = document.getElementById('exercicios');
  let simbolo = document.getElementsByClassName('simbolo');
  
  /**
  * Função que reseta os elementos por índice.
  */
  function reseta(index1, index2 = null, index3 = null) {
    let displayNone = [
      function() {
        navMenuTutoriais.style.display = '';
      },
      function() {
        navMenuReferencias.style.display = '';
      },
      function() {
        navMenuExercicios.style.display = '';
      }
    ]
    
    if (index2 == null && index3 == null) {
      menuItem[index1].style.backgroundColor = 'rgba(255, 251, 238, 1)';
      menuItem[index1].style.color = 'rgba(179, 134, 168, 1)';
      simbolo[index1].classList.replace('fa-caret-up', 'fa-caret-down');
      displayNone[index1]();
      menuGlobal[index1] = false;
    } else if (index3 == null) {
      // Repete o código dentro de eval 2 vezes e adiciona índices de 1 a 2
      for (let i = 1; i < 3; i++) {
        eval(
          `menuItem[index${i}].style.backgroundColor = 'rgba(255, 251, 238, 1)';
          menuItem[index${i}].style.color = 'rgba(179, 134, 168, 1)';
          simbolo[index${i}].classList.replace('fa-caret-up', 'fa-caret-down');
          displayNone[index${i}]();
          menuGlobal[index${i}] = false;`
          )
        }
      } else {
        // Repete o código dentro de eval 3 vezes e adiciona índices de 1 a 3
        for (let i = 1; i < 4; i++) {
          eval(
            `menuItem[index${i}].style.backgroundColor = 'rgba(255, 251, 238, 1)';
            menuItem[index${i}].style.color = 'rgba(179, 134, 168, 1)';
            simbolo[index${i}].classList.replace('fa-caret-up', 'fa-caret-down');
            displayNone[index${i}]();
            menuGlobal[index${i}] = false;`
            )
          }
          navMenu.style.display = '';
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
    if (menuGlobal[0] == true) {
      reseta(0, 1, 2);
    } else {
      menuGlobal[0] = true;
      reseta(1, 2);
    }
    break;
    case 'referencias':
    if (menuGlobal[1] == true) {
      reseta(0, 1, 2);
    } else {
      menuGlobal[1] = true;
      reseta(0, 2);
    }
    break;
    case 'exercicios':
    if (menuGlobal[2] == true) {
      reseta(0, 1, 2);
    } else {
      menuGlobal[2] = true;
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
  if(menuGlobal.includes(true)) {
    navMenu.style.display = 'block';
    if (menuGlobal[0] == true) {
      navMenuTutoriais.style.display = 'block';
      menuItem[0].style.backgroundColor = 'rgba(179, 134, 168, 1)';
      menuItem[0].style.color = 'rgba(255, 251, 238, 1)';
      simbolo[0].classList.replace('fa-caret-down', 'fa-caret-up');
    } else if (menuGlobal[1] == true) {
      navMenuReferencias.style.display = 'block';
      menuItem[1].style.backgroundColor = 'rgba(179, 134, 168, 1)';
      menuItem[1].style.color = 'rgba(255, 251, 238, 1)';
      simbolo[1].classList.replace('fa-caret-down', 'fa-caret-up');
    } else {
      navMenuExercicios.style.display = 'block';
      menuItem[2].style.backgroundColor = 'rgba(179, 134, 168, 1)';
      menuItem[2].style.color = 'rgba(255, 251, 238, 1)';
      simbolo[2].classList.replace('fa-caret-down', 'fa-caret-up');
    }
  }
}