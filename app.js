function slidesPlugin(activeSlide) {
  const slides = document.querySelectorAll('.slide')

  slides[activeSlide].classList.add('active')

  for (const slide of slides) {
    slide.addEventListener('click', () => {
      claerActiveClass()
      slide.classList.add('active')
    })
  }

  function claerActiveClass() {
    slides.forEach((slide) => {
      slide.classList.remove('active')
    })
  }  
}  

slidesPlugin(Math.ceil(Math.random()*4))
