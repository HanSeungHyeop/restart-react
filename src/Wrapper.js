import React from 'react';

function Wrapper({ children }) {//Wrapper 내부에 내용이 보여지기 위해서 props.children을 렌더링 해줘야됨.
    const style = {
        border: '2px solid black',
        padding: '16px',
    };
    return (
        <div style={style}>
            {/* {children} 추가 */}
            {children}
        </div>
    )
}

export default Wrapper;