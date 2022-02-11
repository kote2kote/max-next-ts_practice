const TodoItem: React.FC<{
  text: string;
  id: string;
  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <li onClick={props.onRemoveTodo}>
      {props.text} | {props.id}
    </li>
  );
};
export default TodoItem;
