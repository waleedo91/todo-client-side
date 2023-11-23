import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveTodo } from "../service/TodoService";

const TodoComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  const navigator = useNavigate();

  function saveOrUpdateTodo(e) {
    e.preventDefault();
    const todo = { title, description, completed };
    console.log(todo);

    saveTodo(todo)
      .then((response) => {
        console.log(response.data);
        navigator("/todos");
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Add Todo</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Title:</label>
                <input
                  type="text"
                  placeholder="Enter Todo Title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Description:</label>
                <input
                  type="text"
                  placeholder="Enter Todo Description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Completed:</label>
                <select
                  className="form-control"
                  value={completed}
                  onChange={(e) => setCompleted(e.target.value)}
                >
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
              </div>
              <button
                className="btn btn-success"
                onClick={(e) => saveOrUpdateTodo(e)}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoComponent;
