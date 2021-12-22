const shape = document.getElementById('sotiphicated_shape');

window.addEventListener('scroll', function() {
    const valueY = window.scrollY;
    shape.style.top = valueY * 1 + 'px';
});