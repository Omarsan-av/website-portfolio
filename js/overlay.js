let boton = document.getElementById('burger-menu');
// let cerrar = document.getElementById('cerrar');
let overlay = document.getElementById('overlay');

boton.addEventListener("click", () => 
{
   overlay.classList.add('active');
})

cerrar.addEventListener("click", () => 
{
   overlay.classList.remove('active');
})