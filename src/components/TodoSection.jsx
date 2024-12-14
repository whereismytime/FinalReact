import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TodoList from './TodoList';
import { fetchTasks } from '../services/api';
import { setTasks } from '../redux/tasksSlice';

const TodoSection = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadTasks = async () => {
      const tasks = await fetchTasks();
      dispatch(setTasks(tasks));
    };
    loadTasks();
  }, [dispatch]);

  return (
    <section>
      <h1>Your Tasks</h1>
      <TodoList />
    </section>
  );
};

export default TodoSection;
