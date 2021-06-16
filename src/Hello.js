import React from 'react';

function Hello({ color, name, isSpecial }) {
    return (
        <div style={{ color }}>
            {/* isSpecial이 true이면 '*'을 출력, 아니면 null을 보여줌 */}
            {/* null, false, undefined를 렌더링하면 아무것도 나타나지않음 */}
            {isSpecial ? <b>*</b> : null}
            안녕하세요 {name}
        </div>
    );
}

Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;