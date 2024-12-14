import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../redux/tasksSlice";

const TodoItem = ({ task }) => {
  const dispatch = useDispatch();

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
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;