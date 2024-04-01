import React from 'react';
import PropTypes from 'prop-types';
function Props2(props) {
    return (
        <div>
            <props2>
                <h1>저는 지금 {props.work}를 하고 있습니다.</h1>
            </props2>
        </div>
    );
}

Props2.propTypes = {
    work: PropTypes.string
}
Props2.defaultProps = {
    work: '과제'
}

export default Props2;
//함수형 컴포넌트
//프로퍼티 타입 지정
//프로퍼티 기본값(default) 지정