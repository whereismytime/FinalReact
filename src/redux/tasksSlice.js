import { createSlice } from '@reduxjs/toolkit';

const loadFromLocalStorage = () => {
  const savedTasks = localStorage.getItem('tasks');
  return savedTasks ? JSON.parse(savedTasks) : [];
};

const saveToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: loadFromLocalStorage(),
  reducers: {
    setTasks: (state, action) => {
      saveToLocalStorage(action.payload);
      return action.payload;
    },
    addTask: (state, action) => {
      const updatedTasks = [...state, action.payload];
      saveToLocalStorage(updatedTasks);
      return updatedTasks;
    },
    updateTask: (state, action) => {
      const updatedTasks = state.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      saveToLocalStorage(updatedTasks);
      return updatedTasks;
    },
    deleteTask: (state, action) => {
      const updatedTasks = state.filter((task) => task.id !== action.payload);
      saveToLocalStorage(updatedTasks);
      return updatedTasks;
    },
  },
});

export const { setTasks, addTask, updateTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
