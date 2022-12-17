const nav = document.querySelector('#navigation')
let expDetail = document.querySelectorAll('#exp .card .details');


function onScroll() {
  showNavOnScroll()
  toggleBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(stacks)
  activateMenuAtCurrentSection(projects)
  activateMenuAtCurrentSection(exp)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop

  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  const sectionEndsAt = sectionTop + sectionHeight

  //verificar se a sessão passou da linha
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  //limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine //top passou e bottom ainda nao passou

  const menuElement = document.querySelector(
    `.menu a[href *= ${section.getAttribute('id')}]`
  ) //selecionando elemento do menu

  menuElement.classList.remove('active')

  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 53) {
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
}

function toggleBackToTopButtonOnScroll() {
  if (scrollY > 300) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

function toggleDetails(el){
  

    if(el.parentNode.classList.contains('details-opened')){
      el.parentNode.classList.remove('details-opened'); 
      el.lastElementChild.style.display = 'none';   
      el.open = false;
      
    }else{
      el.parentNode.classList.add('details-opened');

      el.lastElementChild.style.display = 'block';   
      openedCards = document.querySelectorAll('#exp .details-opened details');  
    }
   
                          
 

  //tempo do elemento receber o open do details
 /* setTimeout(()=>{
    
    if (el.open)
    {
      el.parentNode.classList.add('details-opened');
    }else{
      el.parentNode.classList.remove('details-opened');
    }
  
  },1)*/

}



expDetail.forEach(xpDetail => {
                                  
                                  xpDetail.addEventListener("click", function(){ toggleDetails(this);})

                              }); 

/*
closeExpCardAction.forEach(card => {

  card.addEventListener("click",function(){this.firstElementChild.open = false;  toggleDetails(this.firstElementChild); })

});
*/


ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`#home,
           #home img,
           #home .stats,
           #stacks,
           #stacks header,
           #stacks .card,
           #projects,
           #projects list-wrapper,
           #projects projects-list,
           #projects .tiny-card,
           #about,
           #about header,
           #about .content`)

window.addEventListener(
  'scroll',
  onScroll
) /*tirar do HTML e colocar no JS as chamadas de funções evitam os erros antes da página carregar.  */
