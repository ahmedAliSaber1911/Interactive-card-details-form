const nameInput = document.querySelector('.name');
const numberInput =document.querySelector(".number");
const monthInput = document.querySelector('.month');
const yearInput =document.querySelector(".year");
const cvcInput =document.querySelector(".cvcInput ");

const inputs = document.querySelectorAll('input')
const confirm = document.querySelector('.confirm');

let name = document.querySelector(".cardBottomName");
let number = document.querySelector(".cardNumber");
let month = document.querySelector(".monthvalue");
let year = document.querySelector(".yearvalue");
let cvc = document.querySelector(".backCardText");



nameInput.addEventListener('change',()=>{
    name.innerHTML = nameInput.value
})
numberInput.addEventListener('change',()=>{
    number.innerHTML = numberInput.value.match(/.{1,4}/g).join(' ')
})
monthInput.addEventListener('change',()=>{
    month.innerHTML = monthInput.value
})
yearInput.addEventListener('change',()=>{
    year.innerHTML = yearInput.value
})
cvcInput.addEventListener('change',()=>{
    cvc.innerHTML = cvcInput.value
})
confirm.addEventListener('click', ()=>{
    console.log('ahmed')
    inputs.forEach(input=>{
        if(input.value.length == 0){
            input.classList.add('error');
            
        }
    })
})