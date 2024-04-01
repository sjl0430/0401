import React from 'react';
import Props0 from './myProps/Props0';
import Props1 from './myProps/Props1';
import Props2 from './myProps/Props2';
function App() {
  return (
    <div>
        <Props0 name='이승준' hobby='배드민턴'/>
        <Props1 colorName='파란색' color='blue'/>
        <Props2 work='과제'/>
    </div>
  );
}

export default App;

//10line을 <Props2 />로 변경하면 디폴트값 출력
//src/App.js에 복사