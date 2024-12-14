import { useDispatch } from 'react-redux';
import { updateTask, deleteTask } from '../redux/tasksSlice';

const TodoItem = ({ task }) => {
  const dispatch = useDispatch();

  const toggleComplete = () => {
    dispatch(updateTask({ ...task, completed: !task.completed }));
  };

  const removeTask = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <li>
      <input type="checkbox" checked={task.completed} onChange={toggleComplete} />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>
      <button onClick={removeTask}>Delete</button>
    </li>
  );
};

export default TodoItem;
