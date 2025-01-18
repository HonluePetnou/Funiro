document.getElementById('mobile-menu').addEventListener('click', function() {
    document.getElementById('drawer').classList.add('open');
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('drawer').classList.remove('open');
});
