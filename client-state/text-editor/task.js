const editor = document.getElementById('editor');

editor.value = localStorage.getItem('editor.value');

editor.addEventListener('input', () => {
    localStorage.setItem('editor.value', editor.value);
});