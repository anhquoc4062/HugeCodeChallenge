const shape = document.getElementById('sotiphicated_shape');

window.addEventListener('scroll', function() {
    console.log('scrolled', shape);
    const valueY = window.scrollY;
    shape.style.top = valueY * 0.5 + 'px';
});