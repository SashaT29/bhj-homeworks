const texrArea = document.getElementById('editor');

texrArea.value = localStorage.text;
texrArea.oninput = () => localStorage.text = texrArea.value;
