const texrArea = document.getElementById('editor');

texrArea.value = localStorage.text;
texrArea.oninput = () => localStorage.text = texrArea.value;

const clearBtn = document.getElementById('clearBtn');

clearBtn.addEventListener('click', function() {
    localStorage.clear();
});