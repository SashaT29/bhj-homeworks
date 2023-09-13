const dropDownList = document.querySelector('.dropdown__list');
console.log(dropDownList);

const dropDownValue = document.querySelector('.dropdown__value');
console.log(dropDownValue);

const dropDownItem = Array.from(document.querySelectorAll('.dropdown__item'));
const dropDownLink = Array.from(document.querySelectorAll('.dropdown__link'));
console.log(dropDownLink);

dropDownValue.addEventListener('click', () => { 
    dropDownList.classList.toggle('dropdown__list_active')
})

for (let element of dropDownItem){
    element.addEventListener('click', (el) => {
        let activeElement = element.closest('.dropdown__item').querySelector('.dropdown__link');
        el.preventDefault();
        dropDownValue.textContent = activeElement.textContent;
        dropDownList.classList.remove('dropdown__list_active');
    })
}

