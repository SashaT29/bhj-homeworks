let taskList = document.querySelector(".tasks__list");
let taskAdd = document.querySelector(".tasks__add");
let taskInput = document.querySelector(".tasks__input");

taskAdd.addEventListener('click', (event) => {
    event.preventDefault();
     const text = taskInput.value;
     if (text != "") {
        taskList.innerHTML += `<div class="task">
        <div class="task__title">
          ${text}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>`

        taskInput.value = "";
     }

     onclick = (e) => {
        if (e.target.classList.contains('task__remove')){
            e.target.parentElement.remove();
        }
     }
})