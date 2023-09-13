let popUp = document.getElementById('modal_main');

popUp.classList.add('modal_active')

let close = document.querySelectorAll('.modal__close');

for (let element of close){
    element.addEventListener('click', () => {
        element.closest('.modal').classList.remove('modal_active')
    })
}

let button = document.querySelector('.btn');
let modalSuccess = document.getElementById('modal_success');

button.addEventListener('click', () => {
    modalSuccess.classList.add('modal_active')
})
