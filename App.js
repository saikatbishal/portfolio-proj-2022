const clickEventListener = () => {
    const btn = document.createElement('button');
    document.body.appendChild(btn);
    btn.classList.add('btn-primary');
    btn.addEventListener('click', () => {
        console.log('click event encountered');
    });
}
export default clickEventListener;
/*
New comment on the App.js file -- changed locally
Another change done  in the new work branch
*/