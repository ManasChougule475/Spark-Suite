import { useState } from "react";
import "./ToDoForm.css";
import { useDispatch , useSelector} from "react-redux";
import { notificationSelector , resetNotificationAction} from "../../redux/reducers/notificationReducer";
import { addTodo } from "../../redux/reducers/todoReducer";
function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
  const message = useSelector(notificationSelector);

  if(message){
    setTimeout(()=> dispatch(resetNotificationAction()) , 2500);  // resets notification & then re-renders form
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todoText));
    setTodoText("");
  };

    return (
    <div className="container">
        
        { 
        message && 
        <div className="alert alert-success" role="alert">
            {message}
        </div>
        }

        <form onSubmit={handleSubmit}>
            <input
            type="text"
            className="form-control mb-3"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            />
            <button className="btn btn-success float-end" type="submit">Create Todo</button>
        </form>
    </div>
    );
}

export default ToDoForm;
