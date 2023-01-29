//  Document object model

let elemento;
// Seleccionar elementos en el documento.

elemento = document; // <-- en consola muestra todo el documento, selecciona todo lo que hay en el navegador
elemento = document.all; // <-- Arroja un html collection con el total de etiquetas del poryecto (169 ene espa pag)
elemento = document.head; // <-- Todo en la etiqueta head del html.
elemento = document.body; // <-- Todo el body.
elemento = document.domain; // El dominio o localhost

elemento = document.forms;// <-- Colleccion de html
elemento = document.forms[0];// <-- Colleccion de html
elemento = document.forms[0].id;// <-- Colleccion de html
elemento = document.forms[0].class;// <-- Colleccion de html
elemento = document.forms[0].method;// <-- Colleccion de html
elemento = document.forms[0].method;// <-- Colleccion de html
elemento = document.forms[0].actions;// <-- Colleccion de html

elemento = document.links;
elemento = document.links[4];
elemento = document.links[4].classList;

elemento = document.images;
elemento = document .scripts;

// console.log(elemento);



//  ================================================== SELECTORS ==============================

// Funcion  ---> getElementsByClassName.   YA EN POCO USO

// Se lee: la variable header, hace referencia al elemento con la clase
// 'header', la cual esta dentro del document y la mando llamar a traves de su clase.

const header  = document.getElementsByClassName('header')
// console.log(header);

const hero = document.getElementsByClassName('hero');
// console.log(hero);

const noExiste = document.getElementsByClassName('no-Existe');
// console.log(noExiste); // <-- devuelve un arreglo vacio.


// Funcion getElementById.   MUY USADO.


const formulario = document.getElementById('formulario');
// console.log(formulario);
 

// Funcion QuerySelector EL MAS USADO...
// Aqui se selecciona como en css

const card = document.querySelector('.card');  //<-- arroja el primer resultado de la lista.
// console.log(card);

const info = document.querySelector('.premium .info');
// console.log(info);

const segundoCard = document.querySelector('section.hospedaje .card'); //<-- Arroja el primer resultado de esa seccion// En este caso una atributo.
// console.log(segundoCard);

const segundoCard2 = document.querySelector('section.hospedaje .card:nth-child(3)'); //<-- Arroja el resultado seleccionado de esa seccion
// console.log(segundoCard2);

const nav = document.querySelector('nav'); // <-- Seleccion de un elemento.
// console.log(nav);

const cards = document.querySelectorAll('.card');  // <-- Todos los elementos con la clase card.
// console.log(cards);






//  ============================================================ Editar Textos o imagenes ========


// const encabezado = document.querySelector('.contenido-hero h1').textContent;  // <-- Tipo Chaining 
const encabezado = document.querySelector('.contenido-hero h1');
// console.log(encabezado);

// console.log(encabezado.innerHTML); // <-- Trae el html
// console.log(encabezado.innerText); // <-- Trae el texto
// console.log(encabezado.textContent); // <-- Trae el texto, incluso si esta oculto con css Visibility:hidden


const nuevoHeading = 'Nuevo Texto';

document.querySelector('.contenido-hero h1').textContent = nuevoHeading;  // <-- Forma 1 
document.querySelector('.contenido-hero h1').textContent = 'Nuevo Texto 2'; //Forma 2


const imagen = document.querySelector('.card img');   //<-- Aqui se indica cual se va alterar
// imagen.src = 'img/hacer2.jpg' //<-- con que imagen se va alterar.






// ========================================================== alterar css con js


const encabezado2 = document.querySelector('h1');  //<-- Seleccion del elemento.
encabezado2.style.backgroundColor = 'red' // propiedad alterada.
encabezado2.style.fontFamily = "Arial" // propiedad alterada.
encabezado2.style.textTransform = 'uppercase' // propiedad alterada.

// Agregar o quitar clases con js

const card2 = document.querySelector('.card');  // <-- selecionamiento comun de un elemento.
card2.classList.add('nueva-clase', 'segunda-clase'); // <-- agregarndo clases al elemento.
card2.classList.remove('card'); // <-- eliminando una clase del elemento.








//  ============================================================= Traversing the dom


const navigation = document.querySelector('.navegacion') 

console.log(navigation);
console.log(navigation.childNodes); //<-- Los espacios entre los elementos del nav son text en consola.
console.log(navigation.children); // <-- Aqui no muestra los espacios en blanco, lista los hijos de ese navigation.
console.log(navigation.firstElementChild);// <-- Primer elemento del Nav.
console.log(navigation.lastElementChild); // <-- Ultimo elemento del nav.


const card3 = document.querySelector('.card');
console.log(card.children); // <-- va listar los elementos de card.
console.log(card.children[1]); // <-- muestra los hijos del elemento uno de card.
console.log(card.children[1].children); //<-- Muestra los hijos del elemento card pero listados.


card.children[1].children[1].textContent = 'Nuevo Heading desde traversing the dom' // <-- Cambiando texto combinado con traversing
card.children[0].src = 'img/hacer3.jpg' // <-- Cambaindo la imagen con traversing y js.




//  ============================================= Brincar del hijo al padre en el arbol html

console.log(card.parentElement.parentElement.parentElement);  //<-- subiendo desde card hasta contenedor main 

console.log(card.nextElementSibling); // <-- avanzamos en los elementos que tengan ña misma jerarquia.
console.log(card.nextElementSibling.nextSibling); // <-- avanzamos en los elementos que tengan la misma jerarquia.

const ultimoCard = document.querySelector('.card:nth-child(4)'); // <-- Accediendo al ultimo elemento de las cards.
console.log(ultimoCard);
console.log(ultimoCard.previousElementSibling); // <-- Accediendo al penultimo elemento usando como punto de partida ultimoCard.





//  ============================================ Elminar un elemento con Dom

const primerEnlace = document.querySelector('.navegacion a'); // <-- Seleccion del elemento
console.log(primerEnlace);// corroboro.

primerEnlace.remove() // <-- Eliminacion.

// Eliminar desde el padre.

const navElement = document.querySelector('.navegacion') // <-- Seleccion de todo el elelemtno.
console.log(navElement.children); //<-- Para observar el numero del nodo/child a eliminar. 
navElement.removeChild(navElement.children[1]) // <-- Eliminacion del elemento deseado.



// ============================================================== Generar html desde JS.

const enlace = document.createElement('a');//<-- Aqui se coloca la etiqueta tipo html que se va crear. (enlace)
enlace.textContent = 'Nuevo Enlace desde js' // <-- Texto del enlace
enlace.href = '/nuevo-enlace'  //<-- Direccion del enlace

// Seleccion del elelemtno al que se agregara el enlace
const navUpdate = document.querySelector('.navegacion'); // <-- Seleccion del elemento.
navUpdate.appendChild(enlace); //<-- Agregar enlace en elemento deseado. (Append lo inserta al final).

// En navUpdate.insertar el nuevo enlace antes del hijo con la posicion numero 1 del elemento navegacion.
navUpdate.insertBefore(enlace, navUpdate.children[1]) // <-- Mas control de donde se inserta.
//                 ¿Que se agrega y en donde.

console.log(enlace);

// Funcionalidad y atributos al elemento nuevo, con solo un createElement.

enlace.target = "_blank"; //<-- el enlace abre una nueva pagina.
enlace.setAttribute('data-enlace',  'nuevo-enlace');
enlace.classList.add('algunaClase');
enlace.onclick = myFunction;

function myFunction(){
    alert('diste click jefe')
}




// Crear un card.

const parrafo1 = document.createElement('p');   // <-- Creacion de los parrrafos
parrafo1.textContent = "concierto";
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');   // <-- Creacion de los parrrafos
parrafo2.textContent = "concierto de Rock";
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');   // <-- Creacion de los parrrafos
parrafo3.textContent = "800 por persona";
parrafo3.classList.add('precio');

console.log(parrafo2);

const info3 = document.createElement('div');  //<-- Contenedor que almacenara los parrafos.
info.classList.add('info');
info3.appendChild(parrafo1); // Agregando parrafos en info3
info3.appendChild(parrafo2); // Agregando parrafos en info3
info3.appendChild(parrafo3); // Agregando parrafos en info3

console.log(info3);

const img3 = document.createElement('img'); //<-- Crear elemento imagen.
img3.src='img/hacer2.jpg'; // <-- fuente imagen

const card4 = document.createElement('div'); //< Crear la card que contendra info3 y la imagen.
card.classList.add('card'); //<-- agregando clase 
card4.appendChild(img3); // <-- Agregar imagen a card
card4.appendChild(info3); // <-- Agregando info3 a card

console.log(card4);


const contenedor = document.querySelector('.hacer .contenedor-cards'); //<-- Seleccionamos donde se agregara la card creada.
// contenedor.appendChild(card4);
contenedor.insertBefore(card4, contenedor.children[0]);