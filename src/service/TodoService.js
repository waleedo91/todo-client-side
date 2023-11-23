import axios from "axios";

const BASE_TODO_API_URL = "http://localhost:8080/api/todos";

export const getAllTodo = () => axios.get(BASE_TODO_API_URL);

export const saveTodo = (todo) => axios.post(BASE_TODO_API_URL, todo);
