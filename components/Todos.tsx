import React from 'react';
// import { FC } from "react"

// type Todos
// ----------------------------------------- //
// React.FC(FunctionComoponents)で<{ items: string[] }>のジェネリクス型をreturnする。
// <Todos items={["A", "B", "C"]} />のように記述してitems: string[]リストを受け取り
// リスト表示する

const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};
export default Todos;
