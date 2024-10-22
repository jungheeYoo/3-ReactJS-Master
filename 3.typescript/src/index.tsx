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

// ////////////////////////////////////////////////
// // 3-3
// // ✅ Optional Props
// // ✅ default props

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import AppCircle from './App-circle';

// // const root = ReactDOM.createRoot(document.getElementById('root')); // 타입스크립트 에러 나서 수정
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <AppCircle />
//   </React.StrictMode>
// );

// ////////////////////////////////////////////////
// // 3-5. Forms
// // ✅ event들에 타입을 추가하는 방법

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// // const root = ReactDOM.createRoot(document.getElementById('root')); // 타입스크립트 에러 나서 수정
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

////////////////////////////////////////////////
// 3-6
// ✅ Themes
// 타입스크립트와 styled components 테마 연결

// ThemeProvider 는 styled components 로부터 오는 하나의 컴포넌트
// ThemeProvider 는 어떤 Theme 오브젝트를 필요로 한다
// 만약 어떤 컴포넌트를 ThemeProvider 안에 넣게 된다면, 그 모든 컴포넌트들은 어떤 Theme Object 에 접근할 수 있다
// <ThemeProvider theme={darkTheme}>

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './theme';

// const root = ReactDOM.createRoot(document.getElementById('root')); // 타입스크립트 에러 나서 수정
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
