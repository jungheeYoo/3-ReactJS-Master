// // ✅ 5-0. Setup
// // 코인 트래킹 어플리케이션

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { ThemeProvider } from 'styled-components';
// import App from './App';
// import { theme } from './theme';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <div>
//     <ThemeProvider theme={theme}>
//       <App />
//     </ThemeProvider>
//   </div>
// );

// // react-router-dom v5 버전 사용시URL 은 변하는데 렌더링이 안되는 이슈가 있습니다.
// // 이 문제를 겪으시는 분은
// // 1. index..tsx 에서 렌더 내부의 React.StrictMode 를 div 로 바꾸거나
// // 2. react-router-dom v6을 사용하시면 됩니다.

// // Home -
// // 이 화면내에서는 모든 코인들이 보여짐
// // :id -> /btc -> Coin Detail
// // 코인 아이디에 맞춰서 코인으로 들어감

// // Nested(중첩된) Router를 사용할 예정
// // 한 스크린내에 또 다른 Router를 가질 수 있는 것
// // /btc/information btc 내에 information 가기
// // /btc/chart btc 내에 chart 보기

///////////////////////////////////////
// ✅ 5-9. React Query part one

// 🔶 리액트 쿼리 설치
// Create a client
// 1. const queryClient = new QueryClient(); 이것을 만들고
// 2. provider 만들기

// queryClientProvider 안에 있는 것은 queryClient에 접근할 수 있음
// 리액트 쿼리는 로직들을 축약해줌

import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { theme } from './theme';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </div>
);
