let clickerCounter = document.getElementById('clicker__counter');
let img = document.getElementById('cookie');

img.onclick = function(){
    clickerCounter.textContent ++;

    if(clickerCounter.textContent % 2 === 0){
        img.width = 500;
    } else {
        img.width = 200;
    }
}