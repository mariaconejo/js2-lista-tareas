//
// Lista de tareas
//

//
//MODELO
//

/*-------------------------------------------------------------------------------------------------------------------------------*/

//Lista de tareas(array)
let tareas = [];

// No de error al no tener datos
let datosLocalStorage = localStorage.getItem('tareas');
      
  if (datosLocalStorage !== null){
      tareas = JSON.parse(datosLocalStorage);
  }
    console.log(tareas);

// Contador de tareas (asigna un id unico a cada tarea)
let count = 0;

//Funcion que agrega tareas
function addTask(nameTarea, dateTarea, completTarea) {

// Crea un objeto que representa la nueva tarea
  const homework = {
    id: count,
    name: nameTarea,
    complet: completTarea,
    fecha: dateTarea,
  };

// Agrega al array
tareas.push(homework);

//Incrementa el contador de tareas  
count++;

appendTaskDom(homework);
// Agarra una variable y transformar en string usando Json
localStorage.setItem('tareas', JSON.stringify(tareas));

}
//
//VISTA
//
//

/*--------------------------------------------------------------------*/
const list = document.getElementById('task-list');

function appendTaskDom(tarea) {

// Item de la lista
const item = document.createElement('li')
item.className = 'task-list__item';
//item.classList.add('task-list__item')

//Checkbox
const checkbox = document.createElement('input');
checkbox.setAttribute('type', 'checkbox');
checkbox.setAttribute('id', `tarea-${tarea.id}`);
    
//Label
const label = document.createElement('label');
label.setAttribute('for', `tarea-${tarea.id}`);
count++
label.innerHTML = `${tarea.nameTarea}-${tarea.dateTarea}`;

// Se agregan elementos
item.appendChild(checkbox);
item.appendChild(label);
list.appendChild(item);
      
}

for(let i = 0; i < tareas.length; i++){
  appendTaskDom(tareas)
}

//
//CONTROLADOR
//

/*-------------------------------------------------------------------------------------*/
const formulario = document.getElementById('new-task-form');

formulario.addEventListener('submit', (event) => {
// Se cancela el comportamiento default del formulario.
event.preventDefault();
//llama a la funcion
addTask(formulario.elements[0].value, formulario.elements[1].value, false);
  
// Resetear
formulario.elements[0].value = " ";
formulario.elements[1].value = " ";

});

