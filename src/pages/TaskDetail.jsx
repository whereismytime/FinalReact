import { useParams } from 'react-router-dom';

const TaskDetail = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Task Detail</h1>
      <p><strong>Task ID:</strong> {id}</p>
      <p><strong>Description:</strong> This is a placeholder for the task description.</p>
    </div>
  );
};

export default TaskDetail;
