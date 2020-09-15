const mobile = document.querySelector('.mobile')
const lSide = document.querySelector('.l-side')
const menuDrop = document.querySelectorAll('.drop')
let menuDropActive = document.querySelector('.drop.active')

if(mobile || lSide) {
  mobile.addEventListener('click', ()=> {
    mobile.classList.toggle('active')
    lSide.classList.toggle('active')
    document.querySelector('body').classList.toggle('active')
  })
}

if(menuDrop) {
  menuDrop.forEach(item => {
    item.addEventListener('click', function () {  
      if(menuDropActive) {
        menuDropActive.classList.remove('active')
        if(menuDropActive == this) {
          menuDropActive.classList.remove('active')
          menuDropActive = ''
        } else {
          this.classList.add('active')
          menuDropActive = this
        }
      } else {
        this.classList.add('active')
        menuDropActive = this
      }
    })
  })
}