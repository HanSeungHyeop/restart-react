import React from 'react';

function Hello(props) { //컴포넌트에 전달되는 props는 파라미터를 통해 조회가능. props는 객체형태로 전달됨.
    return <div>안녕하세요 {props.name}</div>
}

export default Hello;