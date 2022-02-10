import React from 'react';
// import { FC } from "react"

import Todo from '../models/todo'; // class Todoの追加
import TodoItem from '../components/TodoItem';

// type Todos
// ----------------------------------------- //
// React.FC(FunctionComoponents)で<{ items: string[] }>のジェネリクス型をreturnする。
// <Todos items={["A", "B", "C"]} />のように記述してitems: string[]リストを受け取り
// リスト表示する

// const Todos: React.FC<{ items: string[] }> = (props) => {

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  // class Todoの追加による変更
  return (
    <ul>
      {props.items.map((item) => (
        // <li key={item}>{item}</li> // class Todoの追加による変更

        // <li key={item.id}>
        //   {item.text} | {item.id}
        // </li>

        <TodoItem key={item.id} text={item.text} id={item.id} />
      ))}
    </ul>
  );
};
export default Todos;
