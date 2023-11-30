import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {
        // accessed tasks in this component from global state in app.js by using props - STATES GET PASSED DOWN

        tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))
      }
    </>
  );
};

export default Tasks;
