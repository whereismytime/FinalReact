import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/tasksSlice";
import TodoList from "../components/TodoList";

const Tasks = () => {
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector((state) => state.tasks);

  useEffect(() => {
    if (tasks.length === 0) {
      dispatch(fetchTasks());
    }
  }, [dispatch, tasks.length]);

  if (loading) {
    return <div className="loader">Loading tasks...</div>;
  }

  return (
    <div className="tasks-container">
      <h2>Your Tasks</h2>
      <TodoList tasks={tasks} />
    </div>
  );
};

export default Tasks;