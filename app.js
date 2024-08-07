document.querySelectorAll('.accordian').forEach(accordion => {
    const question = accordion.querySelector('.question');
    const answer = accordion.querySelector('.answer');
    const icon = accordion.querySelector('.icon');

    question.addEventListener('click', () => {
        const isActive = answer.style.maxHeight;

        document.querySelectorAll('.answer').forEach(el => el.style.maxHeight = null);
        document.querySelectorAll('.icon').forEach(el => el.classList.remove('active'));

        if (!isActive) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            icon.classList.add('active');
        }
    });
});
