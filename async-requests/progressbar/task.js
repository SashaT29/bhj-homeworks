const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.upload.onprogress = function(event) {
        let total = event.total;
        let loaded = event.loaded;
        progress.value = loaded / total;
    };

    const formData = new FormData(form);
    xhr.send(formData);
    e.preventDefault();
})