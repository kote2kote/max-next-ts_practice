const TodoItem: React.FC<{ text: string; id: string }> = (props) => {
  return (
    <li>
      {props.text} | {props.id}
    </li>
  );
};
export default TodoItem;
