let accordians=document.querySelectorAll('.accordian');

accordians.forEach(accordian =>{
    let icon=accordian.querySelector('.icon');
    let answer=accordian.querySelector('.answer');

    accordian.addEventListener('click',()=>{
        icon.classList.toggle('active');
        answer.classList.toggle('active');
    })
})