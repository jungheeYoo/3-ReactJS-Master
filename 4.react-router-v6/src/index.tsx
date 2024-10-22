// // ✅ 4-1. BrowserRouter
// // 초기 셋팅
// // BrowserRouter (v5버전) vs createBrowserRouter

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './Root';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

////////////////////////////////////////////////
// ✅ 4-2. createBrowserRouter
// BrowserRouter (v5버전) vs createBrowserRouter

// 우린 App => Root 컴포넌트를 더 이상 render 하지 않음
// 대신 우리는 RouterProvider 라는 것을 render 함
// 이 친구는 router라고 불리우는 prop을 가짐
// 이건 바로 우리가 Router 파일에 있는 createBrowserRouter 함수를 통해서 만들어낸 것이다

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
