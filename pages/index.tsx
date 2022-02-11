// import HelloWorld from '@components/hello-world';
import Todos from '@components/Todos';
import NewTodo from '@components/NewTodo';
import Todo from '../models/todo';
const Index = () => {
  const todos = [
    new Todo('ラテくんかわいいね'),
    new Todo('オレオくんかわいいね'),
  ];
  const addTodoHandler = (todoText: string) => {};
  return (
    <div className="bg-gray-200">
      {/* <Todos items={['ラテのオシッコ片付ける', 'オレオの吐瀉物を片付ける']} /> */}
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
};

export default Index;
