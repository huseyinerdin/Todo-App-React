import { useTodo } from "../../../contexts/TodoContext";

const Item = ({ todo }) => {
  const {toggleTodo,destroyTodo} = useTodo();
  return (
    <li className={todo.completed ? "completed" : ""}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={todo.completed} onChange={()=>toggleTodo(todo.id)} />
        <label>{todo.text}</label>
        <button className="destroy" onClick={() => destroyTodo(todo.id)}></button>
      </div>
    </li>
  );
};

export default Item;
