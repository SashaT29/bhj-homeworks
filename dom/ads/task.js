const rotatorCases = Array.from(document.querySelectorAll('.rotator__case'));

const timer = setInterval(() => {
    let index = rotatorCases.findIndex(item => item.classList.contains('rotator__case_active'));

    if(index < rotatorCases.length - 1){
        rotatorCases[index].classList.remove('rotator__case_active');
    } else{
        index =-1;
    }

    rotatorCases[index + 1].classList.add('rotator__case_active');
}, 1000)