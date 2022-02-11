import { useState } from 'react';

import Todos from '@components/Todos';
import NewTodo from '@components/NewTodo';
import Todo from '../models/todo';

const Index = () => {
  // const todos = [
  //   new Todo('ラテくんかわいいね'),
  //   new Todo('オレオくんかわいいね'),
  // ];

  // useState
  const [todos, setTodos] = useState<Todo[]>([]);

  // 新規Todoを追加した時にpropsから呼び出される
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos(
      // concatしたtodo
      (prevTodos) => {
        return prevTodos.concat(newTodo);
      },
    );
  };

  // Todo削除
  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="bg-gray-200">
      {/* <Todos items={['ラテのオシッコ片付ける', 'オレオの吐瀉物を片付ける']} /> */}
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
};

export default Index;
