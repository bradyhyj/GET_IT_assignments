const btn = document.getElementById('colorBtn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
    text.style.color = 'red';
});

let items = ['사과', '바나나'];

function showItems() {
    const list = document.getElementById('list');
    list.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
}

document.getElementById('addBtn').addEventListener('click', () => {
    items.push('귤');
    showItems();
});

showItems();

const countBtn = document.getElementById('countBtn');
const countDisplay = document.getElementById('countDisplay');
let count = 0;

countBtn.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
});