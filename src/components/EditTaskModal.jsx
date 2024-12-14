import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/tasksSlice";

const EditTaskModal = ({ task, onClose }) => {
  const [title, setTitle] = useState(task.title);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(editTask({ id: task.id, title }));
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
};

export default EditTaskModal;