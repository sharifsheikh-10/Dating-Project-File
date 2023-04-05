const dropdown = document.querySelector('.drop-down');

const list = document.querySelector(".list");

const selected = document.querySelector('.selected');

const selectedimg = document.querySelector('.selectedimg');

dropdown.addEventListener('click', ()=>{
    list.classList.toggle('show');
});

list.addEventListener('click', (e)=>{
    const img = e.target.querySelector('img');
    const text = e.target.querySelector('text')

    selectedimg.src = img.src;
    selected.innerHTML = text.innerHTML;
});