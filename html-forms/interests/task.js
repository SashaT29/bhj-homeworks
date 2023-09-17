const checkBoxes = Array.from(document.querySelectorAll(".interest__check"));

checkBoxes.forEach((element) => {
    element.addEventListener("change", (event) => {
        if(!element.closest(".interest_active")) {
            const childCheckBox = Array.from(element.closest(".interest").querySelectorAll(".interest__check"));
            
            if (element.checked){
                childCheckBox.forEach( item => item.checked = true);
            } else {
                childCheckBox.forEach(item => item.checked = false);
            }
        }
    })
})