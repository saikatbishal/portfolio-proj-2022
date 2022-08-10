const clickEventListener = () => {
    const btn = document.createElement('button');
    document.body.appendChild(btn);
    btn.classList.add('btn-primary');
    btn.addEventListener('click', () => {
        console.log('click event encountered');
    });
}
export default clickEventListener;