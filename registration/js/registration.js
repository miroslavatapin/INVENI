const registration = document.getElementById('registration')
const registrationBtnEnter = document.querySelector('.registration__btn_enter')
const enter = document.getElementById('enter')
const enterBtnRecovery = document.querySelector('.enter__btn_recovery')
const enterBtnRegistration = document.querySelector('.enter__btn_registration')
const recovery = document.getElementById('recovery')
const recoveryBtnEnter = document.querySelector('.recovery__btn_enter')
const recoveryBtnRegistration = document.querySelector('.recovery__btn_registration')



registrationBtnEnter.addEventListener('click', function(){
    registration.style.display = 'none'
    enter.style.display = 'flex'
})

enterBtnRecovery.addEventListener('click', function(){
    enter.style.display = 'none'
    recovery.style.display = 'flex'
})

enterBtnRegistration.addEventListener('click', function(){
    enter.style.display = 'none'
    registration.style.display = 'flex'
})

recoveryBtnEnter.addEventListener('click', function(){
    recovery.style.display = 'none'
    enter.style.display = 'flex'
})

recoveryBtnRegistration.addEventListener('click', function(){
    recovery.style.display = 'none'
    registration.style.display = 'flex'
})

