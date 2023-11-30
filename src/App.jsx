import Header from "./Header";
import Tasks from "./Tasks";
import AddTask from "./AddTask";
import Footer from "./Footer";
import About from "./About";
import { Routes, Route } from "react-router-dom";
import "./app.css";
import FocusedTask from "./FocusedTask";
import { useState } from "react";
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Task1",
      day: "Date1",
    },
    {
      id: 2,
      text: "Task2",
      day: "Date2",
    },
    {
      id: 3,
      text: "Task3",
      day: "Date3",
    },
  ]); // makes it our global state then used in different components passed in as props

  const deleteTask = (target) =>
    setTasks(tasks.filter((task) => task.id !== target));

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const addTask = (task) => {
    const id = tasks.length + 1;
    /*will spread the properties in task (which is an object of task, day & reminder) out to get it along in tasks array*/
    setTasks([...tasks, { id, ...task }]);
  };
  console.log("updated", tasks);

  return (
    <div className='container'>
      <Header
        title={`My Task Tracking App`}
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      <Routes>
        <Route
          path='/'
          element={
            <>
              {/* if show add is true then show the component of the form */}
              {showAddTask && <AddTask onAdd={addTask} />}

              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                "No Tasks To Show"
              )}
            </>
          }
        />
        <Route path='/:task/:id' element={<FocusedTask tasks={tasks} />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
