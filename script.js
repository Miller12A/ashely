document.addEventListener('DOMContentLoaded', function() {
    const aceptoBtn = document.getElementById('aceptoBtn');
    const noBtn = document.getElementById('noBtn');
    const carta = document.getElementById('carta');
  
    aceptoBtn.addEventListener('click', function() {
      carta.innerHTML = 'Quiero que sepas que te quiero todos los 14 de febrero, en cada momento especial y en cada dia comun, te quiero no solo en san valentin, si no los 365 dias del año, Eres mi luz, mi alegria y mi razon para sonreir. Gracias por estas siempre a mi lado, ¡Feliz San Valentin, amor! 💖'; // Puedes personalizar el mensaje aquí
      carta.style.display = 'block';
    });
  
    noBtn.addEventListener('click', function() {
      const rect = noBtn.getBoundingClientRect();
      const maxWidth = window.innerWidth - rect.width;
      const maxHeight = window.innerHeight - rect.height;
      const newX = Math.floor(Math.random() * maxWidth);
      const newY = Math.floor(Math.random() * maxHeight);
      noBtn.style.position = 'absolute'; // Añadimos posición absoluta para que se mueva libremente
      noBtn.style.left = newX + 'px';
      noBtn.style.top = newY + 'px';
    });
  });
  