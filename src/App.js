import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';


function App() {
  return (
    <Wrapper>
      {/* true는 자바스크립트의 값이기 때문에 중괄호로 감싸줌 */}
      <Hello name="react" color="red" isSpecial={true} />
      <Hello color="pink" />
    </Wrapper>
  )
}

export default App;