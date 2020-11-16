// header-menu
new WOW().init()

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


function slider(){
  let slides = document.querySelectorAll('.slider__item');
  let points = document.querySelectorAll('.slider__pagination-item');
 
  points.forEach((point,index)=>{

    point.addEventListener('click',function(e){
      e.preventDefault()
      slides.forEach((item)=>{
        item.style.display = 'none';
        item.classList.remove(
      "animate__animated",
      "animate__fadeInRight"
    );
      })
      slides[index].style.display = 'block';
      slides[index].classList.add(
        "animate__animated",
        "animate__fadeInRight"
      );
    })
  })

}

slider()