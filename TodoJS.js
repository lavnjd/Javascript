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
               <img onClick="editTask(${index})"></img>
               <button onClick="deleteTask(${index})" id="delete">X</button>
        </div>`;
        taskItem.addEventListener('change',()=> toggleTaskComplete(index))
        taskList.append(taskItem);
    })
    updateStatus();
}

const updateStatus = () => {    
    const completedTasks = tasks.filter(task => task.completed).length;
    const a = (completedTasks/tasks)*100;
    document.getElementById('numbers').innerHTML = completedTasks+"/"+tasks.length;
    document.getElementById('progress').style.width=`${a}%`;
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
})