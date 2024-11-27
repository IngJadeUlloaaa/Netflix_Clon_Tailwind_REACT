const netflix = document.getElementById('logoNetflix');

window.addEventListener('load', () => {
    netflix.classList.add('animate__animated', 'animate__slideInLeft');

    // Quita la clase después de que termine la animación (1s en este caso)
    netflix.addEventListener('animationend', () => {
        netflix.classList.remove('animate__animated', 'animate__slideInLeft');
    });
})

const formLogin = document.getElementById('formLogin');

window.addEventListener('load', () => {
    formLogin.classList.add('animate__animated', 'animate__zoomIn');

    formLogin.addEventListener('animationend', () => {
        formLogin.classList.remove('animate__animated', 'animate__zoomIn');
    })
})