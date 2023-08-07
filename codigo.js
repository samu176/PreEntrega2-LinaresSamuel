// Objeto de libro
function libro(titulo, autor, genero) {
  this.titulo = titulo;
  this.autor = autor;
  this.genero = genero;
}

// Array para guardar los libros de la wishlist
let wishlist = [];

// mostrar los libros agregados a mi wishlist con DOM como una lista
function mostrarwishlist() {
  const wishlistelement = document.getElementById("wishlist");
  wishlistelement.innerHTML = "";

  wishlist.forEach((libro, mostrar) => {
      const li = document.createElement("li");
      li.textContent = `${mostrar + 1}. titulo: ${libro.titulo}, autor: ${libro.autor}, genero: ${libro.genero}`;
      wishlistelement.appendChild(li);
  });
}

// agregar un nuevo libro a mi wishlist con DOM
function agregarlibro() {
  const titulolibro = document.getElementById("titulo").value;
  const autorlibro = document.getElementById("autor").value;
  const generolibro = document.getElementById("genero").value;

  wishlist.push(new libro(titulolibro, autorlibro, generolibro));
  mostrarwishlist();
}

// botón para agregar libros
const agregarlibrobutton = document.getElementById("agregarlibro");
agregarlibrobutton.addEventListener("click", agregarlibro);

// Mensaje en popup avisando que se se termino de agregar los libros
const finalizarbutton = document.getElementById("finalizar");
finalizarbutton.addEventListener("click", () => {
  alert("Terminaste de agregar tus libros");
});
