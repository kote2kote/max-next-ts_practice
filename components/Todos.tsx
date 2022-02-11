import React, { useContext } from 'react';
// import { FC } from "react"

import Todo from '../models/todo'; // class Todoの追加
import TodoItem from '../components/TodoItem';
import { TodosContext } from '../store/todos-context';

// type Todos
// ----------------------------------------- //
// React.FC(FunctionComoponents)で<{ items: string[] }>のジェネリクス型をreturnする。
// <Todos items={["A", "B", "C"]} />のように記述してitems: string[]リストを受け取り
// リスト表示する

// const Todos: React.FC<{ items: string[] }> = (props) => {

// const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
//   props,
// ) => {
const Todos: React.FC = () => {
  // class Todoの追加による変更
  const todosCtx = useContext(TodosContext);
  // return (
  //   <ul>
  //     {props.items.map((item) => (
  //       // <li key={item}>{item}</li> // class Todoの追加による変更

  //       // <li key={item.id}>
  //       //   {item.text} | {item.id}
  //       // </li>

  //       <TodoItem
  //         key={item.id}
  //         text={item.text}
  //         id={item.id}
  //         onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
  //       />
  //     ))}
  //   </ul>
  // );
  return (
    <ul>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default Todos;
