import { useRef } from 'react';

// typescriptの基本的な考えは、どういう型のデータを返すのか、または関数に渡すのか(void)を
// 厳格に定義すること。
// NewTodoコンポーネントを考えるときは
// onAddTodo関数にenteredText(文字列)を
// 発動させるFC型(FC型はFunctionコンポーネントと言うこと)ということになる。
const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    props.onAddTodo(enteredText);
    // todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
