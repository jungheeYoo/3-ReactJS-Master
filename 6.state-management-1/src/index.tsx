// // 5-9
// // React Query part one

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { QueryClient, QueryClientProvider } from 'react-query';
// import { ThemeProvider } from 'styled-components';
// import App from './App';
// import { theme } from './theme';

// const queryClient = new QueryClient();

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <div>
//     <QueryClientProvider client={queryClient}>
//       <ThemeProvider theme={theme}>
//         <App />
//       </ThemeProvider>
//     </QueryClientProvider>
//   </div>
// );

// ✅ 6-0. Dark Mode part One
// ✅ state management 사용하지 않고 다크 모드/라이트 모드 스위치 구현하기
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';

// 🔶 ThemeProvider => App.tsx 로 옮기기
// 왜 ThemeProvider 를 index 에서 App 으로 옮기는지?
// theme 을 바꾸기 위해서 state를 사용해야한다
// 우리 어플리케이션의 state 에 기반하여 바꾸려고 했던 것
// 그리고 ligthTheme 과 darkTheme 을 만들었음
// 이렇게 하면 ThemeProvider를 수정할 수 있다

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </div>
);
