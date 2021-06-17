import React, { useState } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        // name과 nickname의 초기값을 각각 ''로 설정
        name: '',
        nickname: ''
    });

    const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

    const onChange = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
            ...inputs, // 기존의 inputs 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    const onReset = () => {
        setInputs({
            // onReset이 실행되면 setInputs함수에 의해 name과 nickname의 값이 각각 ''로 바뀜
            name: '',
            nickname: '',
        })
    };


    return (
        <div>
            {/* 첫번째 input박스의 키값을 name으로 설정함. onChange함수로 전달된 이벤트 값 'name'을 표시함. */}
            <input name="name" placeholder="이름" onChange={onChange} value={name} />
            {/* 두번째 input박스의 키값을 nickname으로 설정함. onChange함수로 전달된 이벤트 값 'nickname'을 표시함. */}
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
            {/* onClick함수로 초기화 버튼을 클릭시 onRest함수가 실행돼 name과 nickname의 값이 각각 ''로 바뀜 */}
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {/* setInputs로 전달받은 name과 nickname 값을 각각 표시 */}
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;