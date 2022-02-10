// import HelloWorld from '@components/hello-world';
import Todos from '@components/Todos';
const Index = () => {
  return (
    <div className="bg-gray-200">
      <Todos items={['ラテのオシッコ片付ける', 'オレオの吐瀉物を片付ける']} />
    </div>
  );
};

export default Index;
