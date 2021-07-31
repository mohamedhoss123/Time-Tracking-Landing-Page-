const icon1 = document.querySelector('#nav-icn1')
const icon2 = document.querySelector('#nav-icn2')
const div2 = document.querySelector('#div2')

icon1.addEventListener('click' , () =>{
    icon1.classList.add('display-none');
    icon2.classList.remove('display-none')
    div2.classList.remove('display-none')
})
icon2.addEventListener('click' , () =>{
    icon2.classList.add('display-none');
    icon1.classList.remove('display-none')
    div2.classList.add('display-none')
})