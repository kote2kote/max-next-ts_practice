// import HelloWorld from '@components/hello-world';
import Todos from '@components/Todos';
import Todo from '../models/todo';
const Index = () => {
  const todos = [
    new Todo('ラテくんかわいいね'),
    new Todo('オレオくんかわいいね'),
  ];

  return (
    <div className="bg-gray-200">
      {/* <Todos items={['ラテのオシッコ片付ける', 'オレオの吐瀉物を片付ける']} /> */}
      <Todos items={todos} />
    </div>
  );
};

export default Index;
