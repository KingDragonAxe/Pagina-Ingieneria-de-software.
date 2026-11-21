var bancoCuestionarios = {
    1: [
        {
            pregunta: "1. ¿Cuál es la capa que sirve como cimiento de toda la Ingeniería de Software según Pressman?",
            opciones: {
                a: "Las herramientas CASE",
                b: "El compromiso organizacional con la calidad",
                c: "Los lenguajes de cuarta generación"
            },
            correcta: "b",
            explicacion: "Las 4 capas descansan sobre el Enfoque de Calidad; encima van el Proceso, los Métodos y las Herramientas."
        },
        {
            pregunta: "2. ¿Qué afirma la Ley de Brooks respecto al mito de gestión de personal?",
            opciones: {
                a: "Añadir más programadores a un proyecto de software atrasado lo retrasará aún más.",
                b: "Duplicar el equipo reduce el tiempo de entrega exactamente a la mitad.",
                c: "El software se desgasta igual que el hardware siguiendo la curva de la bañera."
            },
            correcta: "a",
            explicacion: "Al agregar personas crecen los canales de comunicación C = n(n-1)/2 y se invierte tiempo en capacitarlos."
        },
        {
            pregunta: "3. ¿En qué situación es más recomendable utilizar el Modelo de Construcción de Prototipos?",
            opciones: {
                a: "Cuando todos los requisitos están completamente fijos desde el primer día.",
                b: "Cuando el cliente define objetivos generales pero no identifica con detalle las entradas, pantallas o salidas.",
                c: "Únicamente cuando se programa en lenguaje ensamblador."
            },
            correcta: "b",
            explicacion: "El prototipo sirve como mecanismo rápido para descubrir y refinar requisitos junto con el usuario."
        },
        {
            pregunta: "4. En el modelo CMMI del SEI, ¿qué caracteriza al Nivel 3 (Definido)?",
            opciones: {
                a: "El proceso es caótico e impredecible.",
                b: "El proceso de software está documentado, estandarizado e integrado en toda la organización.",
                c: "No se documenta ninguna actividad del proyecto."
            },
            correcta: "b",
            explicacion: "En el Nivel 3 (Definido), la organización cuenta con un proceso estándar institucionalizado."
        },
        {
            pregunta: "5. En la arquitectura de sistemas de Hatley y Pirbhai, ¿qué muestra el Diagrama de Contexto de Arquitectura (ACD)?",
            opciones: {
                a: "El código fuente en C# de cada función.",
                b: "El sistema completo como un solo nodo rodeado de las entidades externas con las que intercambia información.",
                c: "Las tablas normalizadas en tercera forma normal."
            },
            correcta: "b",
            explicacion: "El ACD establece la frontera del sistema y sus flujos con entidades externas."
        }
    ],
    2: [
        {
            pregunta: "1. Según los principios del análisis de Davis, ¿hacia dónde debe avanzar el análisis de requisitos?",
            opciones: {
                a: "De la información esencial (qué hace el sistema) hacia el detalle de implementación (cómo lo hace).",
                b: "Escribir primero el código y después preguntar los requisitos al cliente.",
                c: "Omitir el modelo de datos y programar directamente la base de datos."
            },
            correcta: "a",
            explicacion: "Primero se comprende la vista lógica o esencial del problema antes de tomar decisiones físicas de implementación."
        },
        {
            pregunta: "2. ¿Qué elemento se ubica en el núcleo central del modelo de análisis estructurado?",
            opciones: {
                a: "El Diccionario de Datos (DD)",
                b: "El código compilado",
                c: "El manual de instalación"
            },
            correcta: "a",
            explicacion: "El Diccionario de Datos está al centro y conecta el DER (datos), el DFD (función) y el DTE (comportamiento)."
        },
        {
            pregunta: "3. En un Diagrama de Flujo de Datos (DFD), ¿en qué consiste la Regla del Equilibrio (balanceo)?",
            opciones: {
                a: "En que todos los procesos deben tener el mismo color.",
                b: "En que los flujos que entran y salen de una burbuja padre deben ser los mismos que entran y salen de su diagrama hijo refinado.",
                c: "En no usar almacenes de datos en ningún nivel."
            },
            correcta: "b",
            explicacion: "Al refinar un proceso del Nivel 0 al Nivel 1 o 2, las entradas y salidas deben conservarse sin aparecer ni desaparecer datos."
        },
        {
            pregunta: "4. En la notación del Diccionario de Datos, ¿qué representan las llaves { }?",
            opciones: {
                a: "Un comentario opcional.",
                b: "Repetición (iteración) de un elemento de datos.",
                c: "Igualdad o asignación."
            },
            correcta: "b",
            explicacion: "En el Diccionario de Datos: '=' es compuesto de, '+' es secuencia, '[|]' es selección, '{}' es repetición y '()' es opcional."
        },
        {
            pregunta: "5. ¿Qué estándar define la estructura recomendada para la Especificación de Requisitos de Software (ERS)?",
            opciones: {
                a: "IEEE Std 830 / ISO/IEC/IEEE 29148",
                b: "ISO 9000-1",
                c: "RFC 2616"
            },
            correcta: "a",
            explicacion: "El estándar clásico IEEE 830 (y su actualización ISO/IEC/IEEE 29148) guía la redacción de la ERS."
        }
    ],
    3: [
        {
            pregunta: "1. ¿Cuáles son las cuatro P fundamentales de la gestión de proyectos de software?",
            opciones: {
                a: "Precio, Publicidad, Plaza y Promoción",
                b: "Personal, Producto, Proceso y Proyecto",
                c: "Pantallas, Programas, Pruebas y Paquetes"
            },
            correcta: "b",
            explicacion: "Pressman estructura la gestión eficaz de proyectos en torno a Personal, Producto, Proceso y Proyecto."
        },
        {
            pregunta: "2. En la estimación de tres puntos, ¿cuál es la fórmula del valor esperado S?",
            opciones: {
                a: "S = (Sopt + 4·Sm + Spes) / 6",
                b: "S = (Sopt + Spes) / 2",
                c: "S = Sopt × Sm × Spes"
            },
            correcta: "a",
            explicacion: "El valor más probable (Sm) recibe un peso de 4, sumado al optimista (1) y al pesimista (1), dividido entre 6."
        },
        {
            pregunta: "3. ¿Cómo se calcula la Exposición al Riesgo (RE) durante el análisis de riesgos?",
            opciones: {
                a: "RE = Probabilidad (P) × Costo del impacto (C)",
                b: "RE = Líneas de código / Tiempo",
                c: "RE = Errores + Defectos"
            },
            correcta: "a",
            explicacion: "La exposición al riesgo multiplica la probabilidad de ocurrencia por la pérdida estimada si el riesgo se materializa."
        },
        {
            pregunta: "4. ¿Qué mide la Eficiencia en la Eliminación de Defectos: EED = E / (E + D)?",
            opciones: {
                a: "La velocidad del procesador del servidor.",
                b: "La proporción de errores filtrados por el equipo antes de entregar el software frente al total de defectos.",
                c: "El sueldo mensual de los programadores."
            },
            correcta: "b",
            explicacion: "Un EED cercano a 1 (o 100%) demuestra que las revisiones y pruebas detectaron los errores antes de que llegaran al cliente."
        },
        {
            pregunta: "5. En Gestión de la Configuración (GCS), ¿qué herramienta permite el control de versiones del código fuente?",
            opciones: {
                a: "Git / GitHub",
                b: "Paint",
                c: "Calculadora de Windows"
            },
            correcta: "a",
            explicacion: "Git registra el historial de cambios, ramas y versiones de cada elemento de configuración (ECS)."
        }
    ],
    4: [
        {
            pregunta: "1. ¿Qué combinación caracteriza a un diseño modular efectivo con alta independencia funcional?",
            opciones: {
                a: "Baja cohesión y alto acoplamiento",
                b: "Alta cohesión (funcional) y bajo acoplamiento (de datos)",
                c: "Usar únicamente variables globales entre todos los módulos"
            },
            correcta: "b",
            explicacion: "Alta cohesión significa que el módulo se enfoca en una sola tarea; bajo acoplamiento reduce el impacto de cambios entre módulos."
        },
        {
            pregunta: "2. ¿Cuál de las siguientes NO es una de las tres reglas de oro de Theo Mandel para el diseño de interfaces?",
            opciones: {
                a: "Dar el control al usuario",
                b: "Reducir la carga de memoria del usuario",
                c: "Obligar al usuario a memorizar códigos internos de base de datos"
            },
            correcta: "c",
            explicacion: "Las tres reglas de Mandel son: dar el control al usuario, reducir su carga de memoria y lograr una interfaz consistente."
        },
        {
            pregunta: "3. Según Glenford Myers, ¿cuál es el objetivo principal de probar el software?",
            opciones: {
                a: "Ejecutar un programa con la intención de encontrar un error.",
                b: "Demostrar que el software no tiene ningún error en absoluto.",
                c: "Evitar que el cliente use el sistema."
            },
            correcta: "a",
            explicacion: "Una prueba exitosa es aquella que logra descubrir un error no detectado previamente."
        },
        {
            pregunta: "4. ¿Qué técnica de prueba de Caja Negra evalúa los valores justo en los bordes de un rango de entrada?",
            opciones: {
                a: "Análisis de Valores Límite (AVL)",
                b: "Complejidad Ciclomática de McCabe",
                c: "Diagrama de cajas Nassi-Shneiderman"
            },
            correcta: "a",
            explicacion: "Los errores suelen concentrarse en las fronteras del dominio de entrada (por ejemplo, 17, 18, 65 y 66 para el rango 18..65)."
        },
        {
            pregunta: "5. Si el grafo de flujo de un módulo tiene P = 4 nodos predicado (decisiones), ¿cuál es su Complejidad Ciclomática V(G)?",
            opciones: {
                a: "V(G) = 2",
                b: "V(G) = 5",
                c: "V(G) = 10"
            },
            correcta: "b",
            explicacion: "Aplicando la fórmula de McCabe V(G) = P + 1 = 4 + 1 = 5 caminos linealmente independientes."
        }
    ]
};

function renderizarCuestionarioUnidad(numUnidad, idContenedor) {
    var contenedor = document.getElementById(idContenedor);
    if (!contenedor || !bancoCuestionarios[numUnidad]) return;

    var preguntas = bancoCuestionarios[numUnidad];
    var html = "<form onsubmit='return calificarCuestionarioUnidad(" + numUnidad + ", event)'>";

    for (var i = 0; i < preguntas.length; i++) {
        var q = preguntas[i];
        var nombreRadio = "u" + numUnidad + "_preg_" + i;
        html += "<div style='margin-bottom:14px; padding-bottom:10px; border-bottom:1px solid #d1d5db;'>";
        html += "<p style='font-weight:bold; margin-bottom:6px;'>" + q.pregunta + "</p>";

        for (var clave in q.opciones) {
            html += "<label style='display:block; font-size:13px; margin-bottom:4px; cursor:pointer;'>";
            html += "<input type='radio' name='" + nombreRadio + "' value='" + clave + "' style='width:auto; margin-right:6px;'> ";
            html += clave.toUpperCase() + ") " + q.opciones[clave];
            html += "</label>";
        }
        html += "</div>";
    }

    html += "<button type='submit' class='boton boton-verde'>Calificar Cuestionario de la Unidad " + numUnidad + "</button> ";
    html += "<button type='button' class='boton boton-secundario' onclick='reiniciarCuestionarioUnidad(" + numUnidad + ")'>Reiniciar</button>";
    html += "</form>";
    html += "<div id='resultadoQuizUnidad" + numUnidad + "' style='display:none; margin-top:12px;'></div>";

    contenedor.innerHTML = html;
}
function calificarCuestionarioUnidad(numUnidad, evento) {
    if (evento) evento.preventDefault();

    var preguntas = bancoCuestionarios[numUnidad];
    var aciertos = 0;
    var detalle = "<ul style='margin-top:8px;'>";

    for (var i = 0; i < preguntas.length; i++) {
        var q = preguntas[i];
        var nombreRadio = "u" + numUnidad + "_preg_" + i;
        var seleccionado = document.querySelector("input[name='" + nombreRadio + "']:checked");
        var valor = seleccionado ? seleccionado.value : "";

        if (valor === q.correcta) {
            aciertos++;
            detalle += "<li><strong>Pregunta " + (i + 1) + " (Correcta):</strong> " + q.explicacion + "</li>";
        } else {
            detalle += "<li><strong>Pregunta " + (i + 1) + " (Incorrecta — Era la opción " + q.correcta.toUpperCase() + "):</strong> " + q.explicacion + "</li>";
        }
    }
    detalle += "</ul>";

    var calificacion = Math.round((aciertos / preguntas.length) * 100);
    var cajaResultado = document.getElementById("resultadoQuizUnidad" + numUnidad);
    if (cajaResultado) {
        cajaResultado.className = "caja-alerta " + (calificacion >= 60 ? "alerta-exito" : "alerta-error");
        cajaResultado.innerHTML = "<strong>Calificación obtenida: " + calificacion + " / 100 (" + aciertos + " de " + preguntas.length + " aciertos).</strong>" + detalle;
        cajaResultado.style.display = "block";
    }
    return false;
}

function reiniciarCuestionarioUnidad(numUnidad) {
    var idContenedor = "contenedorQuizU" + numUnidad;
    renderizarCuestionarioUnidad(numUnidad, idContenedor);
}

document.addEventListener("DOMContentLoaded", function() {
    renderizarCuestionarioUnidad(1, "contenedorQuizU1");
    renderizarCuestionarioUnidad(2, "contenedorQuizU2");
    renderizarCuestionarioUnidad(3, "contenedorQuizU3");
    renderizarCuestionarioUnidad(4, "contenedorQuizU4");
});
