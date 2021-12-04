import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

import { useState } from 'react'

const App = () => {

  const [showAddTask, setshowAddTask] = useState(false)
  const [tasks, setTasks] = useState([{
    id: 1,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 6:30pm',
    reminder: false,
  },
  {
    id: 2,
    text: 'Meeting at School',
    day: 'Feb 6th at 1:30pm',
    reminder: false,
  },
  {
    id: 3,
    text: 'Food Shopping',
    day: 'Feb 5th at 6:30pm',
    reminder: false,
  }])


//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random()*10000)+1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask ])
}
//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle Reminder
const toggleReminder = (id) => {
  // console.log(id);
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder:!task.reminder} : task))
}
  // const name = 'Ankush'
  // const flag = false
  return (
    <div className="container">
      <Header onAdd = {() => setshowAddTask(!showAddTask)}
      showAdd = {showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}           
      {/* <Header title='Hello'/> */}
      {/* <h2>Hello Again {name}  {flag ? 'Yes':'No'}!</h2> */}
      {tasks.length > 0 ? (<Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder} />) : ('No Taks To Show')}
    </div>
  );
}

export default App;
