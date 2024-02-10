document.addEventListener('DOMContentLoaded', function () {
    const aceptoBtn = document.getElementById('aceptoBtn');
    const noBtn = document.getElementById('noBtn');
    const carta = document.getElementById('carta');

    aceptoBtn.addEventListener('click', function () {
        carta.innerHTML = 'Quiero que sepas que te quiero todos los 14 de febrero, en cada momento especial y en cada dia comun, te quiero no solo en san valentin, si no los 365 dias del año, Eres mi luz, mi alegria y mi razon para sonreir. Gracias por estas siempre a mi lado, ¡Feliz San Valentin, amor! 💖'; // Puedes personalizar el mensaje aquí
        carta.style.display = 'block';
    });

    noBtn.addEventListener('click', function () {
        const rect = noBtn.getBoundingClientRect();
        const maxWidth = window.innerWidth - rect.width;
        const maxHeight = window.innerHeight - rect.height;
        const newX = Math.floor(Math.random() * maxWidth);
        const newY = Math.floor(Math.random() * maxHeight);
        noBtn.style.position = 'absolute'; // Añadimos posición absoluta para que se mueva libremente
        noBtn.style.left = newX + 'px';
        noBtn.style.top = newY + 'px';

        // Obtener el texto actual del botón
        let currentText = noBtn.innerHTML;

        // Cambiar el texto del botón
        switch (currentText) {
            case 'No':
                noBtn.innerHTML = '¿Segura que no?';
                break;
            case '¿Segura que no?':
                noBtn.innerHTML = '¡Segurísima que no!';
                break;
            case '¡Segurísima que no!':
                noBtn.innerHTML = '¿Asha estas segura que no?';
                break;
            case '¿Asha estas segura que no?':
                noBtn.innerHTML = 'Veras que voy a llorar :(';
                break;
            case 'Veras que voy a llorar :(':
                noBtn.innerHTML = 'Le voy a decir a tu mamá';
                break;
            case 'Le voy a decir a tu mamá':
                noBtn.innerHTML = 'Ashaaaaa yaaaaaaaaa';
                break;
            case 'Ashaaaaa yaaaaaaaaa':
                noBtn.innerHTML = 'Me caes mal tlj, ya no pongas nada';
                break;
            case 'Me caes mal tlj, ya no pongas nada':
                noBtn.innerHTML = 'No';
                break;
            default:
                noBtn.innerHTML = 'No';
        }
    });
});
