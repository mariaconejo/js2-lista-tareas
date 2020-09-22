//
// Lista de tareas
//

const formulario = document.getElementById('new-task-form');

formulario.addEventListener('submit', (event) => {
  // Se cancela el comportamiento default del formulario.
  event.preventDefault();
  // Texto introducido por el usuario.
  console.log(formulario.elements[0].value);
})
