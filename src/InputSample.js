import React, { useState } from 'react';

function InputSample() {
    // useState의 기본값을 ''으로 설정
    const [text, setText] = useState('');

    const onChange = (e) => {
        // e.target.value를 통해 이벤트 객체에 담겨있는 텍스트를 setText로 불러옴
        setText(e.target.value);
    };
    const onReset = (e) => {
        // onReset이 실행될 때 setText의 값은 ''로 바뀜
        setText('');
    };
    return (
        <div>
            {/* onChange함수를 통해 input박스의 값을 text로 전달함 */}
            <input onChange={onChange} value={text} />
            {/* onClick함수로 '초기화'버튼을 클릭시 onRest함수가 실행됨 */}
            <button onClick={onReset}>초기화</button>
            <div>
                {/* input박스에서 전달된 text값을 표시함 */}
                <b>값: {text}</b>
            </div>
        </div>
    );
}

export default InputSample;