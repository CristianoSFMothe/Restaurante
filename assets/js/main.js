/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)
  
  // Validate that variables exist
  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          // Adicionamos a classe show-menu à tag div com a classe nav__menu
          nav.classList.toggle('show-menu')
      })
  }
}
showMenu('nav-toggle','nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // Quando clicamos em cada nav__link, removemos a classe show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']')
            .classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']')
            .classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
  const nav = document.getElementById('header')
  // Quando a rolagem for maior que 200 na altura da janela de visualização, 
  // adicione a classe scroll-header à tag de cabeçalho
  if(this.scrollY >= 200) nav.classList.add('scroll-header'); 
   else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
  const scrollTop = document.getElementById('scroll-top');
  // Quando a rolagem é superior a 560 altura da janela de visualização, adicione a 
  // classe show-scroll à tag a com a classe scroll-top
  if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); 
  else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)