// EVENTOS.
// Ejemplo  de ventana flotante. JS

const btnFlotante = document.querySelector('.btn-flotante'); // <-- se selecciona el elemento button con anchor. (class="btn-flotante").
const footer = document.querySelector('.footer'); // <-- se selecciona ya sea la clase o id (ene ste caso ambas se llaman igual).

// El cambio que se espera se agrega en el parametro 1 = 'click'
// /paramtro dos es una funcion anonima que se ejecuta si hay un click.
// eventlistener se lee: quedate atento a que se realice algun cambio en este elemento.


// btnFlotante.addEventListener('click', () => {   Opcion 1 
//     console.log('diste click');
// })



btnFlotante.addEventListener('click', mostrarOcultarFooter)

function mostrarOcultarFooter (){  // <-- Opcion 2 con funcion declarada

    // Dentro css el fotter inicialmente tiene un bottom de menos 100% y al cambiar a clase activo se elimina.
    // footer.classList.add('activo'); //seleccionamos el id o clase y se le agrega 'activo a la clase. hasta aqui solo se quede arriba el footer.
    
    if(footer.classList.contains('activo')){  // si footer contiene la clase activo.
        footer.classList.remove('activo') // le quitamos la clase activo.
        btnFlotante.classList.remove('activo'); // este elemento tambien tiene dos clases.
        // this.classList.remove('activo'); // this hace referencia al btnFlotante del addEvent... Se manda llamar asi o con btnFlo..
        this.textContent = "Idioma y Moneda"  // con esto modificamos el texto del btn segun su estado.
    }else{
        footer.classList.add('activo') // sino tiene la clase activo, ponsela.
        btnFlotante.classList.add('activo'); // este elemento tambien tiene dos clases.
        // this.classList.add('activo'); // this hace referencia al btnFlotante del addEvent... Se manda llamar asi o con btnFlo..
        this.textContent = "X Cerrar" // con esto modificamos el texto del btn segun su estado.
    }
}


// Tipos de eventos (Estos desencadenan acciones en el documento).
// console.log(2);
document.addEventListener('DOMContentLoaded', () =>{ // Este evento esperaa que cargue toda la informacion del html antes de realizar la accion de la funcion.
 console.log(1); // console sera el ultimo en aparecer
})
// console.log(3);

const nav = querySelector('.navegacion'); //<-- Seleccionando el elemento
nav.addEventListener('mouseenter', () => { // mouseenter = cuando el mause se posicione sin hacer click en la seccion.
    console.log('entrando a la navegacion'); // <-- resp en consola.
})

nav.addEventListener('mousedown', () => {
    nav.style.backgorundColor = 'white'; // <-- Al dar click cambia el color de la nav
})


/*
MOUSE EVENTS
mouseenter = Al entrar a la zona indicada.
mouseout = Al salir de la zona indicada.
mousedown = al dar click, pero al soltar se pierde el evento.
mouseup = dar click y al soltarlo se ejecuta.
dblclick = double click.

KEYBOARD EVENTS
keydown = al presionar cualquier tecla.
keyup = al dejar de presionar cualuier tecla
blur = al cliquear cualquier zona fuera el elelemtno seleccionado.
copy
paste
cut 
input = se ejecuta en cualuier accion, excepto blur.
*/

const busqueda = document.querySelector('.busqueda');
busqueda.addEventListener('input', (e) =>{ // <-- input = arroja lo que se escribe en el bucador. puede ser e, event, even, etc = todos se refieren a evento.
    console.log(e);  // en consola aparece directamente cada letra que se escribe en el buscador.
    console.log(e.target); //<-- nos indica en que input se esta realizando la accion.
    console.log(e.target.value); // <-- arroja el texto, tal cual un input en react.
})


// FORM EVENTS
const formulario = document.querySelector('#formulario') // <-- Seleccion del formulario con su id


formulario.addEventListener('submit', () => {  // <-- El evento es submit por que el button debe ser de tipo 'submit'. mas el 'e', ya que el evento desencadena la funcion
    e.preventDefault(); // <-- Previene el envio del evento, un formulario su funcion es enviar la info, pero al no estar nuestra pagina conectada a base de datos, se evita ese envio con el metodo post o get
    // Y de esa forma se puede hacer una valuacion del formulario o enviar los datos a cierto endpoint o api.

    console.log(e);
});


// Eventos de scroll.

window.addEventListener('scroll', () => {
    const scrollPX = window.scrollY; 
    console.log(scrollPX);  // <-- Nos va decir cuantos pixeles he bajado en mi navegador

    // console.log('scrolling');
})

// Elementos apareciendo al dar scroll.

window.addEventListener('scroll', () => {


    const premium = document.querySelector('.premium') // <-- Se selecciona el elemento.
    const ubicacion = premium.getBoundingClientRect(); // <-- Este metodod contiene mucha informacion del elelemtno seleccionado al ser detectado. Entre tanto la distancia faltante para llegar a el.

    if(ubicacion.top < 785) { // <-- El numero hace referencia a los pixeles.
        console.log('ubicacion ya es visile');
    }else{
        console.log('aun no');
    }
})


// Event bubbling = cuando se acciona un evento y el resultado de este se propaga en muchos otros lugares de los esperados.

// e.stopPropagation(); <-- Este metodo evita que al darle click a una zona donde hay diferentes eventos, se disparen todos a la vez.


