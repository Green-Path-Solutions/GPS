// Js de mica

// *-------------------------------------------- dark & light

const btnMoonMode = document.getElementById('moon-mode');
const btnSunMode = document.getElementById('sun-mode');


btnMoonMode.addEventListener('click',function() {
   document.body.classList.add('dark');
})

btnSunMode.addEventListener('click',function() {
   document.body.classList.remove('dark');
})

// *-------------------------------------------- botones clientes/ noclientes

// document.getElementById('solicitar-reco').addEventListener('click', function() {
//    window.location.href = '#';
//  });
 
//  document.getElementById('solicitar-info').addEventListener('click', function() {
//    window.location.href = '#';
//  });


// * ------------------------------------------------ counter nosotros

function animateNumber(elementId, target) {
   let currentNumber = 0

   const element = document.getElementById(elementId)
   const increment = Math.ceil(target / 200)
   const duration = 2000
   const intervalTime = Math.ceil(duration / (target / increment));

   const interval = setInterval(() => {
       currentNumber += increment;
       if (currentNumber >= target) {
           currentNumber = target;
           clearInterval(interval);
       }
       element.textContent = `+${currentNumber.toLocaleString()} Ton`;
   }, intervalTime);
}

function checkScroll() {
   const container = document.querySelector('.section-counter-nosotros');
   const containerPosition = container.getBoundingClientRect().top;
   const screenPosition = window.innerHeight;

   if (containerPosition < screenPosition) {
       animateNumber("recolectado-nosotros", 150000);
       animateNumber("recuperado-nosotros", 100000);
       window.removeEventListener('scroll', checkScroll);
   }
}

window.addEventListener('scroll', checkScroll);
document.addEventListener("DOMContentLoaded", checkScroll);