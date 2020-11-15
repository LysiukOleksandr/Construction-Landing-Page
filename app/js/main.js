// header-menu


function headerMenu(){

  let menu = document.querySelector('.header__top-list');
  let icon = document.querySelector('.header__top-burger');

  icon.onclick = function(){
    icon.classList.toggle('header__top-burger--active');
    menu.classList.toggle('header__top-list--open');
    document.body.classList.toggle('hidden');
  }

  menu.addEventListener('click',function(e){
    if(e.target.tagName === 'A'){
      icon.classList.remove('header__top-burger--active')
      menu.classList.remove('header__top-list--open')
      document.body.classList.remove('hidden')
    }
  })
  
}

headerMenu()