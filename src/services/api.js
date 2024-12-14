import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data.slice(0, 10); // Берём только 10 задач
};

export const addTask = async (task) => {
  const response = await axios.post(API_URL, task);
  return response.data;
};

export const updateTask = async (task) => {
  const response = await axios.put(`${API_URL}/${task.id}`, task);
  return response.data;
};

export const deleteTask = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
