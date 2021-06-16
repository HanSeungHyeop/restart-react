import React from 'react';

function Hello({ color, name }) { //'비구조화 할당'으로 보다 간략하게 표현 가능. Hello 컴포넌트에서 color와 name의 값을 조회.
    return <div style={{ color }}>안녕하세요 {name}</div>
}

Hello.defaultProps = { //name에 값이 설정되지 않았을 때 defaultProps를 통해 default값을 설정.
    name: '이름없음'
}

export default Hello;