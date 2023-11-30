import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./task.css";
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {" "}
        <Link className='link1' to={`/:task/:${task.id}`}>
          {task.text}
          <img
            className='img1'
            src='https://www.svgrepo.com/show/428179/next4.svg'
            alt=''
          />
        </Link>
        <FaTimes // uses react-icons which is a icons library
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>

      <p>{task.day}</p>
    </div>
  );
};

export default Task;
