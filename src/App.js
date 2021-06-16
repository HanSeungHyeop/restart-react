import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App() {
  const name = 'react';
  return (
    <>
      <Hello />
      <div>{name}</div>
      {/* 자바스크립트의 변수를 보여줄 때 {}로 감싸서 보여줌 */}
    </>
  );
}

export default App;
