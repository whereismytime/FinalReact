import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10");
  return response.data;
});

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: JSON.parse(localStorage.getItem("tasks")) || [],
    loading: false,
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.loading = false;
        localStorage.setItem("tasks", JSON.stringify(action.payload));
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { addTask, deleteTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;