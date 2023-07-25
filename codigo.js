// Objeto de libro
function libro(titulo, autor, genero) {
    this.titulo = titulo;
    this.autor = autor;
    this.genero = genero;
  }
  
  // Array para guardar los libros de la wishlist
  let wishlist = [];
  
  // Función para mostrar los libros agregados a mi wishlist
  function mostrarwishlist() {
    console.log("Esta es mi wishlist");
    wishlist.forEach((libro, muestra) => {console.log(`${muestra + 1}. Titulo: ${libro.titulo}, Autor: ${libro.autor}, Genero: ${libro.genero}`);});
  }
  
  // Función para agregar un nuevo libro a mi wishlist
  function agregarlibro() {
    const titulolibro = prompt("Ingresa el titulo del libro:");
    const autorlibro = prompt("Ingresa el autor del libro:");
    const generolibro = prompt("Ingresa el genero del libro:");
  
    wishlist.push(new libro(titulolibro, autorlibro, generolibro));
    console.log("Agregaste tu libro a la wishlist");
  }
  

  // do while para hacer el prompt que preguntara si se agrega un libro o se finaliza y que pedira los datos del libro que se quiere agregar
 let opcion;
  do {
    mostrarwishlist();
  
    opcion = prompt("Escribi el número indicado para cada opción: 1 para agregar un nuevo libro a la wishlist y 2 para finalizar");
  
    switch (opcion) {
      case "1":
        agregarlibro();
        break;
  
      case "2":
        console.log("Se termino de agregar libros");
        break;
  
      default:
        console.log("Esta opción NO es correcta. Las opciónes correctas son el número 1 o 2");
    }
  } while (opcion !== "2");
  