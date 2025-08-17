document.addEventListener('DOMContentLoaded', function() {
    const enterBtn = document.getElementById('enter-btn');
    const splashScreen = document.getElementById('splash-screen');
    const cardWrapper = document.querySelector('.card-wrapper');

    if (enterBtn) {
        enterBtn.addEventListener('click', () => {
            // Oculta la portada con una transición suave
            splashScreen.classList.add('hidden');

            // Muestra la ficha del personaje y la anima
            setTimeout(() => {
                if (cardWrapper) {
                    cardWrapper.style.display = 'flex'; // O el display que use por defecto
                    // Forzamos un reflow para que la transición funcione
                    void cardWrapper.offsetWidth; 
                    cardWrapper.style.opacity = 1;
                }
            }, 500); // Espera medio segundo para empezar a mostrar la ficha
        });
    }
});
