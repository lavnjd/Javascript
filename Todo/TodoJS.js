let tasks=[];

const addTask = ()=>{
    const taskInput = document.getElementById('taskInput');
    const text = taskInput.value.trim();
    if(text){
        tasks.push({text:text,completed:false});
        taskInput.value="";
        updateTasksList();
    }
}
const toggleTaskComplete = (index) =>{
    tasks[index].completed = !tasks[index].completed;
    updateTasksList();
}
const updateTasksList = () =>{
    const taskList = document.getElementById('task-list');
    taskList.innerHTML="";
    tasks.forEach((task,index) => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
        <div class="taskItem">
            <div class="task ${task.completed ? "completed":""}">
              <input type="checkbox" class="checkbox" ${task.completed ? "checked":""}/>
              <p>${task.text}</p>
            </div>
            <div class="icons">
               <img src="./img/pen.png"onClick="editTask(${index})" id="delete"></img>
               <img src="./img/trash.png" onClick="deleteTask(${index})" id="delete"></img>
        </div>`;
        taskItem.addEventListener('change',()=> toggleTaskComplete(index))
        taskList.append(taskItem);
    })
    updateStatus();
}

const updateStatus = () => {    
    const completedTasks = tasks.filter(task => task.completed).length;
    document.getElementById('numbers').innerHTML = completedTasks+"/"+tasks.length;
    if(tasks.length !=0 && completedTasks == tasks.length){
        toggleConfetti();
    }
}

const editTask = (index) =>{
    const taskInput = document.getElementById('taskInput');
    taskInput.value = tasks[index].text;
    tasks.splice(index,1);
    updateTasksList();
}

const deleteTask = (index) =>{
    tasks.splice(index,1);
    updateTasksList();
}

document.getElementById('newTask').addEventListener('click',(e)=>{
    e.preventDefault();
    addTask();
});

const toggleConfetti = () =>{
    const end = Date.now() + 5 * 100;

// go Buckeyes!
const colors = ["#FFBD00", "#ffffff"];

(function frame() {
  confetti({
    particleCount: 5,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors,
  });

  confetti({
    particleCount: 5,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors,
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
})();
}

