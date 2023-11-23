import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllTodo } from "../service/TodoService";

const ListTodoComponent = () => {
  const [todos, setTodos] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    listTodos();
  }, []);

  function listTodos() {
    getAllTodo()
      .then((response) => {
        console.log(response.data);
        setTodos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewTodo() {
    navigator("/add-todo");
  }

  return (
    <div className="container">
      <h2 className="text-center">List of Todos</h2>
      <button className="btn btn-primary mb-2" onClick={addNewTodo}>
        Add Todo
      </button>
      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <th>{todo.id}</th>
                <th>{todo.title}</th>
                <th>{todo.description}</th>
                <th>{todo.completed ? "YES" : "NO"}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTodoComponent;
