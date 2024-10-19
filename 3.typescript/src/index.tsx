import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 3-2
// ✅ Typing the Props

// const root = ReactDOM.createRoot(document.getElementById('root')); // 타입스크립트 에러 나서 수정
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
