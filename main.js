const nav = document.querySelector('#navigation')

function onScroll() {
  showNavOnScroll()
  toggleBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
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

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`#home,
           #home img,
           #home .stats,
           #services,
           #services header,
           #services .card,
           #about,
           #about header,
           #about .content`)

window.addEventListener(
  'scroll',
  onScroll
) /*tirar do HTML e colocar no JS as chamadas de funções evitam os erros antes da página carregar.  */
