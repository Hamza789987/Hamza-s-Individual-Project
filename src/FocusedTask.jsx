import React from "react";
import "./FocusedTask.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const FocusedTask = ({ tasks }) => {
  const { id } = useParams();
  console.log(id, tasks);

  const foundTask = tasks.find((task) => `:${task.id}` === id);

  console.log(foundTask);
  return (
    <div className='focusedTask'>
      <div>
        <h2>Task {foundTask.id}: </h2>
      </div>
      <div>
        <h3>{foundTask.text}</h3>

        <p>{foundTask.day}</p>
        <Link className='link2' to={"/"}>
          <img
            className='img2'
            src='https://www.svgrepo.com/show/458545/back.svg'
            alt=''
          />
          Back To All Tasks
        </Link>
      </div>
    </div>
  );
};

export default FocusedTask;
