document.getElementById('grid-view').addEventListener('click', function() {
    document.querySelector('.products-grid').style.gridTemplateColumns = 'repeat(3, 1fr)';
});

document.getElementById('list-view').addEventListener('click', function() {
    document.querySelector('.products-grid').style.gridTemplateColumns = '1fr';
});
