import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App() {
  return (
    <>
      {/* div태그로 감싸기 애매할때 Fragment라는걸 사용 */}
      <Hello />
      <div>안녕히계세요</div>
    </>
  );
}

export default App;
