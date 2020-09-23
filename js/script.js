//
// Lista de tareas
//

const formulario = document.getElementById('new-task-form');
let count = 0;
const list = document.getElementById('task-list');
const tarea = [];

formulario.addEventListener('submit', (event) => {
  // Se cancela el comportamiento default del formulario.
  event.preventDefault();
  // Item de la lista
  const item = document.createElement('li')
  item.className = 'task-list__item';
  //item.classList.add('task-list__item')
  //Checkbox
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', `tarea-${count}`);
  //Label
    const label = document.createElement('label');
    label.setAttribute('for', `tarea-${count}`);
    count++
    label.innerHTML = `${formulario.elements[0].value}-${formulario.elements[1].value}`;
  // Se agregan elementos
  item.appendChild(checkbox);
  item.appendChild(label);
  list.appendChild(item);
  

  //Objeto

  const homeworks = {
    id: count,
    name: formulario.elements[0].value,
    complet: false,
    fecha: formulario.elements[1].value,
  };
  // Agrega al array
  tarea.push(homeworks);
  console.log(tarea);
  count++;
  
  // Resetear
  formulario.elements[0].value = " ";
});
