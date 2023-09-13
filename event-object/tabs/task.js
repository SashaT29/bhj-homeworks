const tab = Array.from(document.querySelectorAll('.tab'));
const content = Array.from(document.querySelectorAll('.tab__content'));

tab.forEach((el, index) => {
    el.addEventListener ('click', (e) => {
        for (let el of tab){
            el.classList.remove('tab_active')
        }

        for (let el of content){
            el.classList.remove('tab__content_active')
        }

        tab[index].classList.add('tab_active')
        content[index].classList.add('tab__content_active')

        el.preventDefault();
    })
})