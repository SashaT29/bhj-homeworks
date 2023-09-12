let timersStartValue = function(){
    let timer = document.getElementById('timer');
    timer.textContent -= 1;

    if (timer.textContent < 0){
        alert ("«Вы победили в конкурсе!»");
        clearInterval(timerId);
    }
}

let timerId = setInterval(timersStartValue, 1000);