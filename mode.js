const btnMoonMode = document.getElementById('moon-mode');
const btnSunMode = document.getElementById('sun-mode');


btnMoonMode.addEventListener('click',function() {
   document.body.classList.add('dark');
})

btnSunMode.addEventListener('click',function() {
   document.body.classList.remove('dark');
})

