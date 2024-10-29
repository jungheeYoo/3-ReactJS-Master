// // ✅ 6-0. Dark Mode part One
// // ✅ state management 사용하지 않고 다크 모드/라이트 모드 스위치 구현하기

// import { createGlobalStyle, ThemeProvider } from 'styled-components';
// import Router from './Router';
// // import { ReactQueryDevtools } from 'react-query/devtools';
// import { darkTheme, lightTheme } from './theme';
// import { useState } from 'react';

// const GlobalStyle = createGlobalStyle`
// @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
// html, body, div, span, applet, object, iframe,
// h1, h2, h3, h4, h5, h6, p, blockquote, pre,
// a, abbr, acronym, address, big, cite, code,
// del, dfn, em, img, ins, kbd, q, s, samp,
// small, strike, strong, sub, sup, tt, var,
// b, u, i, center,
// dl, dt, dd, menu, ol, ul, li,
// fieldset, form, label, legend,
// table, caption, tbody, tfoot, thead, tr, th, td,
// article, aside, canvas, details, embed,
// figure, figcaption, footer, header, hgroup,
// main, menu, nav, output, ruby, section, summary,
// time, mark, audio, video {
//   margin: 0;
//   padding: 0;
//   border: 0;
//   font-size: 100%;
//   font: inherit;
//   vertical-align: baseline;
// }
// /* HTML5 display-role reset for older browsers */
// article, aside, details, figcaption, figure,
// footer, header, hgroup, main, menu, nav, section {
//   display: block;
// }
// /* HTML5 hidden-attribute fix for newer browsers */
// *[hidden] {
//     display: none;
// }
// body {
//   line-height: 1;
// }
// menu, ol, ul {
//   list-style: none;
// }
// blockquote, q {
//   quotes: none;
// }
// blockquote:before, blockquote:after,
// q:before, q:after {
//   content: '';
//   content: none;
// }
// table {
//   border-collapse: collapse;
//   border-spacing: 0;
// }
// * {
//   box-sizing: border-box;
// }
// body {
//   font-weight: 300;
//   font-family: 'Source Sans Pro', sans-serif;
//   background-color:${(props) => props.theme.bgColor};
//   color:${(props) => props.theme.textColor};
//   line-height: 1.2;
// }
// a {
//   text-decoration:none;
//   color:inherit;
// }
// `;

// // 🔶 ThemeProvider => App.tsx 로 옮기기
// // 왜 옮기냐면 state를 사용하려고
// // theme을 바꾸고 싶은데
// // 어플리케이션의 state 에 기반하여 바꾸려고 했던 것
// // 이렇게 하면 ThemeProvider를 수정할 수 있다

// function App() {
//   const [isDark, setIsDark] = useState(false);
//   // isDark가 true면 false를 return, false면 true를 return
//   // 이 function 은 argument를 받지 않고 아무것도 리턴하지 않음
//   const toggleDark = () => setIsDark((current) => !current);
//   return (
//     <>
//       {/* isDark 이면 darkTheme, isDark가 false이면 ligthTheme */}
//       <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
//         <button onClick={toggleDark}>Toggle Mode</button>
//         <GlobalStyle />
//         <Router />
//         {/* <ReactQueryDevtools initialIsOpen={true} /> */}
//       </ThemeProvider>
//     </>
//   );
// }

// export default App;

//////////////////////////////////////////////////
// ✅ 6-1. Dark Mode part Two
// ✅ state management 사용하지 않고 다크 모드/라이트 모드 스위치 구현하기

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Router from './Router';
// import { ReactQueryDevtools } from 'react-query/devtools';
import { darkTheme, lightTheme } from './theme';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor};
  line-height: 1.2;
}
a {
  text-decoration:none;
  color:inherit;
}
`;

// 1️⃣ 제목 옆을 클릭해서 다크모드를 끄고 켤 수 있게 하기
// 2️⃣ toggleDark 를 Coins screen 으로 주어야 함

// 🔶 toggle버튼을 코인 Title 옆으로 옮김
// 여기서 지우고 coins 로 보냄
// App 에서 버튼을 지우면 toggleDark function 을 Coins 로 보내야 함
// Coins screen 은 Router 내부에 있음
// 이 경우 이 function 을 Router 로 보내야 함
// 이 경우 function 은 argument를 받지 않고 아무것도 리턴하지 않음
// 이것이 이 함수의 signature 이다. 이 함수의 type
// const toggleDark: () => void

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleDark = () => setIsDark((current) => !current);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        {/* 여기서 지우고 coins 로 보냄 */}
        {/* <button onClick={toggleDark}>Toggle Mode</button> */}
        <Router isDark={isDark} toggleDark={toggleDark} />
        {/* <ReactQueryDevtools initialIsOpen={true} /> */}
      </ThemeProvider>
    </>
  );
}

export default App;

// ✨ global state
// 어플리케이션 전체에서 공유되는 state 이다
// global state 는 어플리케이션이 무언가를 인지해야 할 때 사용함
// 컴포넌트가 어디에 있던지, 누가 접근하고자 하는지에 상관 없다
// global state 는 어플리케이션이 특정 value 에 접근해야 할 때 쓴다
// 대부분의 경우 어플리케이션 전체에서 무언가를 공유해야 할 때
// 예를 들면, 유저의 로그인 여부
// 유저가 로그인했다면, 많은 component 에서 보이는 모습이 달라져야 한다
