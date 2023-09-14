const fontSize = Array.from(document.querySelectorAll('.font-size'));
const bookContent = document.getElementById('book');

fontSize.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();

        let lastIndex = fontSize.findIndex((el) => el.classList.contains('font-size_active'));
        fontSize[lastIndex].classList.remove('font-size_active');

        element.classList.add('font-size_active');
        bookContent.classList.remove('book_fs-small', 'book_fs-big');
        bookContent.classList.add(`book_fs-${element.dataset.size}`);
    })
})