var CLAVE_USUARIOS = "uadec_isw_usuarios_2026";
var CLAVE_SESION = "uadec_isw_sesion_activa_2026";
var CLAVE_MODO = "uadec_isw_modo_oscuro_2026";

var usuariosBase = [
    {
        id: 1,
        nombre: "Axel Gabriel Sifuentes Hernández",
        email: "axelsifuentes@uadec.edu.mx",
        password: "123456",
        rol: "Estudiante ISC - 7C"
    },
    {
        id: 2,
        nombre: "Miguel Ángel Andrade de los Santos",
        email: "miguelandrade@uadec.edu.mx",
        password: "123456",
        rol: "Estudiante ISC - 7C"
    },
    {
        id: 3,
        nombre: "M.I. Liliana Guadalupe Alonso Sánchez",
        email: "liliana.alonso@uadec.edu.mx",
        password: "123456",
        rol: "Docente Titular"
    }
];

function inicializarBaseDatosSimulada() {
    try {
        var guardados = localStorage.getItem(CLAVE_USUARIOS);
        if (!guardados) {
            localStorage.setItem(CLAVE_USUARIOS, JSON.stringify(usuariosBase));
        }
    } catch (e) {}
}

function obtenerUsuarios() {
    try {
        var guardados = localStorage.getItem(CLAVE_USUARIOS);
        if (guardados) {
            return JSON.parse(guardados);
        }
    } catch (e) {}
    return usuariosBase;
}

function obtenerSesionActiva() {
    try {
        var sesion = localStorage.getItem(CLAVE_SESION);
        if (sesion) {
            return JSON.parse(sesion);
        }
    } catch (e) {}
    return null;
}

function registrarUsuario(evento) {
    if (evento) evento.preventDefault();

    var txtNombre = document.getElementById("regNombre");
    var txtEmail = document.getElementById("regEmail");
    var txtPass = document.getElementById("regPassword");
    var cajaMensaje = document.getElementById("mensajeRegistro");

    var nombre = txtNombre ? txtNombre.value.trim() : "";
    var email = txtEmail ? txtEmail.value.trim().toLowerCase() : "";
    var password = txtPass ? txtPass.value.trim() : "";

    if (nombre === "" || email === "" || password === "") {
        mostrarMensaje(cajaMensaje, "Error: Todos los campos (nombre, correo y contraseña) son obligatorios.", "alerta-error");
        return false;
    }
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        mostrarMensaje(cajaMensaje, "Error: Ingresa un correo electrónico válido (ejemplo: alumno@uadec.edu.mx).", "alerta-error");
        return false;
    }
    if (password.length < 6) {
        mostrarMensaje(cajaMensaje, "Error: La contraseña debe tener al menos 6 caracteres.", "alerta-error");
        return false;
    }

    var lista = obtenerUsuarios();
    for (var i = 0; i < lista.length; i++) {
        if (lista[i].email.toLowerCase() === email) {
            mostrarMensaje(cajaMensaje, "Aviso: Este correo ya está registrado. Por favor inicia sesión.", "alerta-error");
            return false;
        }
    }

    var nuevoUsuario = {
        id: lista.length + 1,
        nombre: nombre,
        email: email,
        password: password,
        rol: "Estudiante Registrado"
    };

    lista.push(nuevoUsuario);
    try {
        localStorage.setItem(CLAVE_USUARIOS, JSON.stringify(lista));
        localStorage.setItem(CLAVE_SESION, JSON.stringify(nuevoUsuario));
    } catch (e) {}

    mostrarMensaje(cajaMensaje, "¡Registro exitoso! Sesión iniciada como " + nombre + ".", "alerta-exito");
    if (txtNombre) txtNombre.value = "";
    if (txtEmail) txtEmail.value = "";
    if (txtPass) txtPass.value = "";

    actualizarInterfazSesion();
    return false;
}

function iniciarSesion(evento) {
    if (evento) evento.preventDefault();

    var txtEmail = document.getElementById("loginEmail");
    var txtPass = document.getElementById("loginPassword");
    var cajaMensaje = document.getElementById("mensajeLogin");

    var email = txtEmail ? txtEmail.value.trim().toLowerCase() : "";
    var password = txtPass ? txtPass.value.trim() : "";

    if (email === "" || password === "") {
        mostrarMensaje(cajaMensaje, "Error: Debes ingresar tu correo electrónico y tu contraseña.", "alerta-error");
        return false;
    }

    var lista = obtenerUsuarios();
    var usuarioEncontrado = null;

    for (var i = 0; i < lista.length; i++) {
        if (lista[i].email.toLowerCase() === email && lista[i].password === password) {
            usuarioEncontrado = lista[i];
            break;
        }
    }

    if (!usuarioEncontrado) {
        mostrarMensaje(cajaMensaje, "Credenciales incorrectas. Verifica tu correo y contraseña o regístrate.", "alerta-error");
        return false;
    }

    try {
        localStorage.setItem(CLAVE_SESION, JSON.stringify(usuarioEncontrado));
    } catch (e) {}

    mostrarMensaje(cajaMensaje, "¡Bienvenido(a) " + usuarioEncontrado.nombre + "! Ya puedes acceder a las 4 unidades.", "alerta-exito");
    actualizarInterfazSesion();
    return false;
}

function cerrarSesion() {
    try {
        localStorage.removeItem(CLAVE_SESION);
    } catch (e) {}

    var ruta = window.location.pathname;
    if (ruta.indexOf("unidad") !== -1) {
        window.location.href = "index.html";
    } else {
        actualizarInterfazSesion();
    }
}

function abrirUnidad(urlDestino) {
    var sesion = obtenerSesionActiva();
    if (!sesion) {
        var aviso = document.getElementById("avisoBloqueoUnidades");
        if (aviso) {
            mostrarMensaje(aviso, "Acceso restringido: Primero debes iniciar sesión o registrarte arriba para consultar las unidades.", "alerta-error");
            aviso.scrollIntoView({ behavior: "smooth" });
        }
        return false;
    }

    window.location.href = urlDestino;
    return true;
}

function actualizarInterfazSesion() {
    var sesion = obtenerSesionActiva();
    var etiquetaUsuario = document.getElementById("etiquetaUsuarioActivo");
    var btnCerrar = document.getElementById("btnCerrarSesion");
    var panelLogin = document.getElementById("seccionFormulariosAcceso");
    var panelSesionIniciada = document.getElementById("seccionSesionActiva");
    var nombreBienvenida = document.getElementById("nombreUsuarioBienvenida");
    var correoBienvenida = document.getElementById("correoUsuarioBienvenida");
    var estadoCandado = document.getElementById("estadoAccesoUnidades");

    if (sesion) {
        if (etiquetaUsuario) etiquetaUsuario.innerText = sesion.nombre;
        if (btnCerrar) btnCerrar.style.display = "inline-block";
        if (panelLogin) panelLogin.style.display = "none";
        if (panelSesionIniciada) panelSesionIniciada.style.display = "block";
        if (nombreBienvenida) nombreBienvenida.innerText = sesion.nombre;
        if (correoBienvenida) correoBienvenida.innerText = sesion.email + " (" + sesion.rol + ")";
        if (estadoCandado) {
            estadoCandado.className = "caja-alerta alerta-exito";
            estadoCandado.innerText = "Sesión verificada: El acceso a los contenidos de las 4 unidades está desbloqueado.";
        }
    } else {
        if (etiquetaUsuario) etiquetaUsuario.innerText = "Iniciar sesión";
        if (btnCerrar) btnCerrar.style.display = "none";
        if (panelLogin) panelLogin.style.display = "grid";
        if (panelSesionIniciada) panelSesionIniciada.style.display = "none";
        if (estadoCandado) {
            estadoCandado.className = "caja-alerta alerta-info";
            estadoCandado.innerText = "Nota: Los contenidos de las 4 unidades solo son accesibles tras iniciar sesión.";
        }
    }
}

function mostrarMensaje(elemento, texto, clase) {
    if (!elemento) return;
    elemento.className = "caja-alerta " + clase;
    elemento.innerText = texto;
    elemento.style.display = "block";
}

function mostrarSubtema(PrefijoGrupo, idSubtema, botonPresionado) {
    var secciones = document.querySelectorAll("." + PrefijoGrupo);
    for (var i = 0; i < secciones.length; i++) {
        secciones[i].classList.remove("activo");
    }

    var destino = document.getElementById(idSubtema);
    if (destino) {
        destino.classList.add("activo");
    }

    if (botonPresionado && botonPresionado.parentNode) {
        var botones = botonPresionado.parentNode.querySelectorAll(".boton-subtema");
        for (var j = 0; j < botones.length; j++) {
            botones[j].classList.remove("activo");
        }
        botonPresionado.classList.add("activo");
    }
}

function cargarModoTema() {
    try {
        var modo = localStorage.getItem(CLAVE_MODO);
        if (modo === "oscuro") {
            document.body.classList.add("modo-oscuro");
        }
    } catch (e) {}
    actualizarTextoBotonModo();
}

function cambiarModoTema() {
    document.body.classList.toggle("modo-oscuro");
    var esOscuro = document.body.classList.contains("modo-oscuro");
    try {
        localStorage.setItem(CLAVE_MODO, esOscuro ? "oscuro" : "claro");
    } catch (e) {}
    actualizarTextoBotonModo();
}

function actualizarTextoBotonModo() {
    var botones = document.querySelectorAll(".btn-modo-tema");
    var esOscuro = document.body.classList.contains("modo-oscuro");
    for (var i = 0; i < botones.length; i++) {
        botones[i].innerHTML = esOscuro ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
        botones[i].title = esOscuro ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro";
    }
}

function verificarAccesoEnPaginaUnidad() {
    var ruta = window.location.pathname;
    if (ruta.indexOf("unidad") !== -1) {
        var sesion = obtenerSesionActiva();
        var avisoUnidad = document.getElementById("avisoSesionEnUnidad");
        if (!sesion && avisoUnidad) {
            avisoUnidad.style.display = "block";
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    inicializarBaseDatosSimulada();
    cargarModoTema();
    actualizarInterfazSesion();
    verificarAccesoEnPaginaUnidad();
});