const p = document.getElementById('timer');
const decrease = () => {p.textContent = Number(p.textContent) - 1;
    if (p.textContent == -1) {
    alert('Вы победили в конкурсе');
    clearInterval(interval);
    } 
}
const interval = setInterval(decrease, 1000);