const open = document.querySelector('.header__menu_open') 
const block = document.querySelector('.header__menu_block')
const close = document.querySelector('.menu__block_close')
const headerMenu = document.querySelector('.header__menu')

close.addEventListener('click', function(){
    block.style.display = 'none'
})

open.addEventListener('click', function(){
    block.style.display = 'flex'

})

