const body = document.body;
const btn = document.getElementById('nav-button');

btn.addEventListener('click', function(e){
    e.preventDefault()
    body.classList.toggle('show')
});