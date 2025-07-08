document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('pooBtn');
    const body = document.body;
    
    btn.addEventListener('click', function() {
        // Создаем 50 смайлов какашек
        for (let i = 0; i < 50; i++) {
            createPoo();
        }
    });
    
    function createPoo() {
        const poo = document.createElement('div');
        poo.className = 'poo';
        poo.innerHTML = '💩';
        
        // Случайная позиция по X
        const xPos = Math.random() * window.innerWidth;
        poo.style.left = `${xPos}px`;
        
        // Начальная позиция по Y (над экраном)
        poo.style.top = `-30px`;
        
        // Случайная скорость падения (2-5 секунд)
        const duration = 2 + Math.random() * 3;
        poo.style.animationDuration = `${duration}s`;
        
        // Случайный размер
        const size = 20 + Math.random() * 30;
        poo.style.fontSize = `${size}px`;
        
        body.appendChild(poo);
        
        // Удаляем элемент после завершения анимации
        setTimeout(() => {
            poo.remove();
        }, duration * 1000);
    }
});
