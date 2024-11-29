  document.addEventListener('DOMContentLoaded', function() {
    
    if (!localStorage.getItem('cookiesAccepted')) {
      document.getElementById('aviso-cookies').style.display = 'block'
      document.getElementById('fondo-cookies').style.display = 'block'
    }
  
    document.getElementById('close-icon').addEventListener('click', function() {
      document.getElementById('aviso-cookies').style.display = 'none'
      document.getElementById('fondo-cookies').style.display = 'none'
    })
  
    document.getElementById('aceptar-cookies').addEventListener('click', function() {
      document.getElementById('aviso-cookies').style.display = 'none'
      document.getElementById('fondo-cookies').style.display = 'none'
      localStorage.setItem('cookiesAccepted', 'true');
      // Código de las cookies
    })
  
    document.getElementById('rechazar-cookies').addEventListener('click', function() {
      document.getElementById('aviso-cookies').style.display = 'none'
      document.getElementById('fondo-cookies').style.display = 'none'
      localStorage.setItem('cookiesAccepted', 'false');
      // Rechazo de las cookies: Aquí no se incluye ningún script
    })
  });