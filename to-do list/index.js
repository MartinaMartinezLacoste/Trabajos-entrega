var taskId = 1; //cada ves que el usuario escriba una tarea se le va a ir sumando uno (identificador de cada una de las tareas).

//funcion para agregar una tarea
function addtask(){
    var taskInput = document.getElementById("task"); //Busca dentro del documento el id que tiene ese elemento en el html
    var taskText = taskInput.value.trim(); //taskText es lo que escribe el usuario y taskImput es lo que trae del html

    if (taskText === "") {
        alert("Por Favor, ingrese una tarea valida.");
        return;
    }

    var listItem = document.createElement("li"); //esto hace la creacion de una lista porque en mi html le doy la indicacion de que sea en forma de lista.
    listItem.setAttribute("id", "task-" + taskId); //Estos son los atributos que me van a aparecer cada vez que agrego una tarea.
    listItem.classList.add("task"); //Aca se le agregan clases para que en el css le doy el estilo que quiero y que cada vez que agrego una tarea arranque con esa clase.
    listItem.classList.add("new");
    listItem.innerHTML = `<span class="task-text">${taskText}</span> 
                          <select class="task-status">
                             <option value="new">Nueva</option>
                             <option value="in-progress">En Desarrollo</option>
                             <option value="completed">Completado</option>
                             <option value="cancelled">Cancelado</option>
                          </select>`; //creo un html dentro de javaScrip, es un elemento que nos permite seleccionar entre varias opciones. 
    document.getElementById("list").appendChild(listItem); // escucha al el li que contiene al selector que se creo.
    
    taskInput.value = ""; //si esto no esta el campo de ingreso queda escirto despues de haber agregado una tarea.
    taskId++;  //esto va a ir sumando las tareas de la variable de arriba del todo.
}

//funcion para cambiar el estado de una tarea
function changeStatus(event){
    var taskItem = event.target.parentNode; // event (escucha el clic) target (ve donde esta susediendo) y parentNode (selecciona al padre de este elemento). En este caso se selecciona el li  y seria lo mismo de la linea 24.

    var taskId = taskItem.getAttribute("id"); //se obtiene el atribujo id seleccionado anteriormente y se guarda en la variable tasKid

    var taskStatus = event.target.value; //esto te va a decir que opcion fue la que elegiste (accede a el valor a traves de lo que estoy selecionando a traves del evento)

    taskItem.classList.remove("new", "in-progress", "completed", "cancelled"); //remueve todas las posibles clases que yo tengo
    taskItem.classList.add(taskStatus); //agrega la clase segun el estado que seleccione en el evento.
}

//Agregar evento de click al boton para agregar tarea
document.getElementById("add-task").addEventListener("click", addtask);

//Agregar evento de cambio al selector de estado para cambiar el estado de la tarea
document.getElementById("list").addEventListener("change", changeStatus);