function sendData() {
    const user = document.getElementById('user').value.trim();
    const passwd = document.getElementById('passwd').value.trim();

    if (!user || !passwd) {
        alert('Por favor, ingrese el usuario y la contraseña.');
        return;
    }

    if (user === 'jade' && passwd === '1234') {
        window.location.replace('./views/Home.html');
    } else {
        alert('Hubo un error con las credenciales');
    }
}