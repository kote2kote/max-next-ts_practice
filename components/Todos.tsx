import React, { useContext } from 'react';
import TodoItem from '../components/TodoItem';
import { TodosContext } from '../store/todos-context';

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          // bind(thisの値, arg1, arg2...)になるので
          // item.idを引数として渡すとうこと
        />
      ))}
    </ul>
  );
};
export default Todos;
