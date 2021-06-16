import React, { useState } from 'react';

function Counter() {
    // useState함수를 사용해 컴포넌트의 상태를 관리함.
    // useState함수를 사용할때는 상태의 기본값을 파라미터로 넣어서 호출. 지금은 기본값이 '0'.
    const [number, setNumber] = useState(0);

    const onIncrease = () => { //onIncrease함수 생성
        console.log('+1');
        setNumber(prevNumber => prevNumber + 1);
    }
    const onDecrease = () => { //onDecrease함수 생성
        console.log('-1');
        setNumber(prevNumber => prevNumber - 1);
    }
    return (
        <div>
            {/* h1태그에서 {number}값을 보여줌. 초기에는 0이 표시됨. */}
            <h1>{number}</h1>
            {/* button의 onClick으로 onIncrease와 onDecrease를 각각 연결 */}
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;