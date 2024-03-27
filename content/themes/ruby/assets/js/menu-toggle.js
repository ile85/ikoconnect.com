document.addEventListener('DOMContentLoaded', function() {
    var burger = document.querySelector('.gh-burger');
    if(burger) {
        burger.addEventListener('click', function() {
            document.body.classList.toggle('is-open');
        });
    }
});