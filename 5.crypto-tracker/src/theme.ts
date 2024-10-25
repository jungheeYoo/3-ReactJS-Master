// // ✅ 5-0. Setup
// // 코인 트래킹 어플리케이션

// import { DefaultTheme } from 'styled-components';

// export const theme: DefaultTheme = {
//   bgColor: 'white',
//   textColor: 'black',
//   btnColor: 'tomato',
// };

///////////////////////////////////////////////
// ✅ 5-1. Styles
// flatuicolors.com 색상 참고

import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  bgColor: '#2f3640',
  textColor: '#f5f6fa',
  accentColor: '#9B59B6',
};

// Theme 은 ThemeProvider 에 의해 주어진 것이고,
// 현재 App 은 ThemeProvider 내에 존재한다
// 이 말은 App은 Theme 에 접근할 수 있다는 것
// 이 말은 background-color:${(props) => props.theme.bgColor}; 이렇게 쓸 수 있다
