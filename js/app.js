const pictures = [
  "https://cdn2.thecatapi.com/images/1bn.png",
  "https://cdn2.thecatapi.com/images/eds.jpg",
  "https://cdn2.thecatapi.com/images/c38.jpg",
  "https://cdn2.thecatapi.com/images/53h.jpg",
  "https://cdn2.thecatapi.com/images/9hl.jpg"
];

//¿Qué variable de estado vamos a necesitar?

let index = 4;

//¿Cómo se establece la imagen de fondo de un elemento mediante un estilo en línea?
function actualizarCarrusel(){
  document.querySelector(".img-container").style.backgroundImage = `url(${pictures[index]})`;
};

// Antes de empezar a codificar los addEventListener, probad de cambiar el valor de la variable de estado
// Si cambia también el gato, entonces es que vais por buen camino

// Cuando tengais esto, podeis codificar los eventos

let botonIzq = document.querySelector(".btn-left");
let botonDer = document.querySelector(".btn-right");


botonIzq.addEventListener("click", function (){
  console.log("boton izquierdo funciona");
  index--;
   // si index vale -1, tenemos que hacer que index 4 
 //(o para cualquier tamaño de array pictures.length - 1)
  if (index == -1){
    index = pictures.length - 1;
  }
  actualizarCarrusel();
});


botonDer.addEventListener("click", function(){
  console.log("boton derecho funciona");
  index++;
  // si hemos llegado a una index=5, en realidad lo que tenemos que hacer, 
// es modificar la varible index para que valga 0 . Lo podemos conseguir con un if
  if (index == pictures.length){
    index = 0;
  };
  actualizarCarrusel();
});

