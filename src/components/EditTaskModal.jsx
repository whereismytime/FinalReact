import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTask } from '../redux/tasksSlice';

function EditTaskModal({ task, onClose }) {
  const [title, setTitle] = useState(task.title);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const updatedTask = { ...task, title };
    dispatch(updateTask(updatedTask));
    onClose();
  };

  return (
    <div className="modal">
      <h2>Edit Task</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleSubmit}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}

export default EditTaskModal;
