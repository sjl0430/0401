import React from 'react';

function Props1(props) {
    return (
        <div>
            <props1>
                <h1>
                    제가 좋아하는 색은 <d style={{color: props.color}}>{props.colorName}</d>입니다.
               </h1>
           </props1>
        </div>
    );
}

export default Props1;
//css 스타일에서 쓰는 {}와 컴포넌트의 속성 {}가 만나 {{}} 의 구조를 가짐
//함수형 컴포넌트