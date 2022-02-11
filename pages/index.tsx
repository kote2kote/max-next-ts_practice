// Todoリスト
import Todos from '@components/Todos';
// 新規Todo
import NewTodo from '@components/NewTodo';
// 状態管理。Todoの一連のデータ管理。
import TodosContextProvider from '../store/todos-context';

const Index = () => {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
};

export default Index;
