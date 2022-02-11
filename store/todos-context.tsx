import React, { useState } from 'react';
import Todo from '../models/todo';

type TodosContextObj = {
  items: Todo[]; // modelsに記述したclass構造を持つ配列
  addTodo: (text: string) => void; // 新規Todo用void
  removeTodo: (id: string) => void; // 削除用void
};

// データexport
export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // 新規Todo用void
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText); // Todoインスタンス作成

    setTodos((prevTodos) => {
      // 無名関数。Todoインスタンスをconcat(結合)して追加
      return prevTodos.concat(newTodo);
    });
  };

  // 削除用void
  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      // todo.id が todoIdに該当するもの以外を取得→該当するのを削除
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  // TodosContext.Providerの属性をまとめてvalueに突っ込む
  const contextValue: TodosContextObj = {
    items: todos, // todosの値 => useStateのやつ
    addTodo: addTodoHandler, // addTodoHandlerを発動
    removeTodo: removeTodoHandler, // removeTodoHandlerを発動
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
