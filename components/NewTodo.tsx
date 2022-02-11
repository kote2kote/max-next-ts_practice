// useRef => input.value取り出し
import { useRef, useContext } from 'react';
// 状態管理。Todoの一連のデータ管理。
import { TodosContext } from '../store/todos-context';

const NewTodo: React.FC = () => {
  // TodoリストCtx取り出し
  const todosCtx = useContext(TodosContext);
  // input.value取り出し用の変数。初期値はnull
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  // SubmitはReact.FormEvent
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // useRefは変数名.current.valueで取り出す。!はnullやundefunedにしない。空なら空文字が返る
    const enteredText = todoTextInputRef.current!.value;

    // 文字未入力の場合はそこで試合終了
    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    // データをCtxのaddTodoに送る
    todosCtx.addTodo(enteredText);
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
