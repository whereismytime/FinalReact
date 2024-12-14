import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../redux/tasksSlice";
import EditTaskModal from "./EditTaskModal";
import { useState } from "react";

const TodoItem = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className={`todo-item ${task.completed ? "completed" : ""}`}>
      <input type="checkbox" checked={task.completed} onChange={handleToggle} />
      <span>{task.title}</span>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      {isEditing && <EditTaskModal task={task} onClose={() => setIsEditing(false)} />}
    </div>
  );
};

export default TodoItem;