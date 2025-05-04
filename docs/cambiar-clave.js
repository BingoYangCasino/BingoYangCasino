// Importar las funciones necesarias de Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js';

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA9jE8fu9UPZI-7UBx_Gy00cqYgmuY-ASs",
    authDomain: "bingo-yangg.firebaseapp.com",
    databaseURL: "https://bingo-yangg-default-rtdb.firebaseio.com",
    projectId: "bingo-yangg",
    storageBucket: "bingo-yangg.appspot.com",
    messagingSenderId: "978098281950",
    appId: "1:978098281950:web:3ec7eab66e2e486012114f"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Función para cambiar la clave principal
function changePassword() {
    const newPassword = document.getElementById('new-password').value;

    if (newPassword.trim() === "") {
        document.getElementById('message').style.display = 'block';
        return;
    }

    // Referencia a la clave principal en la base de datos
    const claveRefPrincipal = ref(database, 'config/clavePrincipal');

    // Actualizar la clave en la base de datos
    set(claveRefPrincipal, newPassword)
        .then(() => {
            alert('Clave cambiada exitosamente');
            document.getElementById('new-password').value = '';
            document.getElementById('message').style.display = 'none';
        })
        .catch((error) => {
            console.error('Error al cambiar la clave:', error);
            alert('Error al cambiar la clave. Inténtalo de nuevo.');
        });
}

// Función para alternar la visibilidad de la contraseña
function togglePasswordVisibility() {
    const passwordField = document.getElementById('new-password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}

// Asignar las funciones a los eventos correspondientes
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('button').addEventListener('click', changePassword);
    document.querySelector('.toggle-password').addEventListener('click', togglePasswordVisibility);
});