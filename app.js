// 1. LIGHT/DARK MODE

// Variable para el botón. 
// Le asignamos el valor llamando al elemento 'toggleMode' por su id
const toggleButton = document.getElementById("toggleMode");

// Variable para la imagen del logo, para reemplazarla por su versión invertida al cambiar de modo.
// querySelector es un método que devuelve el primer elemento que cumpla con lo que se le especifica, en este caso el primer elemento que contenga la clase llamada 'nav-logo'
const logo = document.querySelector(".nav-logo");

// Función 'modo oscuro'
// Esta función
function darkMode() {

    // Instrucción para "agregar" la clase del 'modo oscuro' al body del HTML al ejecutarse la función
    document.body.classList.toggle("dark-mode")

    // Instrucción que ejecuta el cambio de modo, verificando si la clase "dark-mode" existe en el documento o no
    // "Si el elemento 'body' contiene la clase 'dark-mode'..."
    if (document.body.classList.contains("dark-mode")) {
        modeIcon.textContent = 'dark_mode';
        logo.src = "./images/logowhite.png"; // Si aparece la clase 'dark-mode', se reemplaza la imagen del logo con la versión blanca para el fondo negro/oscuro

    } else {
        modeIcon.textContent = 'light_mode';
        logo.src = "./images/logo1.png";
        // Cuando se activa el toggle y se quita 'dark-mode' como clase del body, se activan estas instrucciones, que cambian nuevamente el src del logo, y el icono del modo correspondiente.
    }
}

// El botón 'escucha' el evento 'click', el cual tiene asignado la función darkMode de arriba.
toggleButton.addEventListener("click", darkMode)



// 2. BOTÓN LEER MÁS

// Creo una variable y le asigno como valor el contenedor padre, en este caso el <section> 'about-container' de la sección SOBRE MÍ
const aboutContainer = document.querySelector('.about-container');

// Asignamos la 'escucha' del evento a la variable. El evento será el click del usuario. 
// Al usuario clickear el elemento, se ejecuta la función de flecha asignada al objeto 'event', definiendo la funcion del evento.
aboutContainer.addEventListener('click', event => {

    // Cada vez que el evento funcione, la variable 'aboutContainer' será asignada a la variable 'current', para que posteriormente se pueda verificar qué elemento específico dentro de 'aboutContainer' fue clickeado.
    const current = event.target;

    // Variable que verifica si el elemento cliqueado incluye la clase 'read-more-btn' (clase asignada al botón "Read more...")
    const isReadMoreBtn = current.className.includes('read-more-btn');

    // Con este condicional, si la variable anterior es falsa (verificacion usando el operador de negación lógica '!'), el codigo frena y no se ejecuta. Sin esta funcion, el codigo que sigue permite ejecutar la funcion cliqueando en cualquier elemento del contenedor, y rompe el codigo.
    if (!isReadMoreBtn) return;

    // Variable que busca la clase 'read-more-text' dentro del elemento padre cliqueado. Esta variable sirve para posteriormente poder añadir '--show' a la clase con classList.toggle
    const currentText = event.target.parentNode.querySelector('.read-more-text');

    // class.List permite manipular las clases de los elementos, y con 'toggle' indicamos que agregue o elimine la clase 'read-more-text--show', que incluye una instrucción de estilo en style.css
    currentText.classList.toggle('read-more-text--show');

    // textContent obtiene o define el contenido de texto de un elemento. En este paso final se comprueba si el botón dice "Read more" o "Read less". 
    // Esto es un operador ternario, con los simbolos '?' y ':' realizamos la misma comprobación condicional que un 'if else' con mucho menos código.
    current.textContent = current.textContent.includes('Read more') ? "Read less..." : "Read more...";


})

