const open = document.querySelector('.header__menu_open') 
const block = document.querySelector('.header__menu_block')
const close = document.querySelector('.menu__block_close')
const headerMenu = document.querySelector('.header__menu')

console.log(open)
console.log(close)

close.addEventListener('click', function(){
    block.style.display = 'none'
})

open.addEventListener('click', function(){
    block.style.display = 'flex'

})
