import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';

// ✨ dark/ligth mode를 갖고 싶다면, property들의 이름이 똑같아야 함
// property 몇 개를 가진 object만 갖고 있으면 됨
const darkTheme = {
  textColor: 'whitesmoke',
  backgroundColor: '#111',
};

const ligthTheme = {
  textColor: '#111',
  backgroundColor: 'whitesmoke',
};

// theme 셋팅
// ThemeProvider 를 styled-components 로부터 import 해줘야 함
// <App /> 은 ThemeProvider 로 감싸줌
// ThemeProvider 는 theme prop 하나가 필요

// property 몇 개를 가진 object만 갖고 있으면
// 그 뒤에 그 object를 ThemeProvider에 전달하면 됨
// 그럼 ThemeProvider안에 있는 모든 component들은 이 object에 접근할 수 있다
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={ligthTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
