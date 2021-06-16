import React from 'react';

function Hello({ color, name, isSpecial }) {
    return (
        <div style={{ color }}>
            {/* isSpecial이 true면 '*'을 출력, false일땐 false가 됨 */}
            {isSpecial && <b>*</b>}
            안녕하세요 {name}
        </div>
    );
}

Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;