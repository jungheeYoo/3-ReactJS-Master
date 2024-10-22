// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// 3-2
// ✅ Typing the Props

// TypeScirpt에게 React component를 설명하는 법
// 어떻게 component가 필요로 하는 prop을 TypeScirpt에게 설명할 수 있는지?
// component를 type 한다는 건, component에게 type을 준다는 뜻
// component를 type 준다는 것은, TypeScirpt에게 뭐가 뭔지 설명해줄 수 있다는 것

// const root = ReactDOM.createRoot(document.getElementById('root')); // 타입스크립트 에러 나서 수정
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

////////////////////////////////////////////////
// 3-3
// ✅ Optional Props
// ✅ default props

import React from 'react';
import ReactDOM from 'react-dom/client';
import AppCircle from './App-circle';

// const root = ReactDOM.createRoot(document.getElementById('root')); // 타입스크립트 에러 나서 수정
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppCircle />
  </React.StrictMode>
);
