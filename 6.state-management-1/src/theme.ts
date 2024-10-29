// ✅ 6-0. Dark Mode part One
// ✅ state management 사용하지 않고 다크 모드/라이트 모드 스위치 구현하기

import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  bgColor: '#2f3640',
  textColor: 'black',
  accentColor: '#9c88ff',
  cardBgColor: 'white',
};

export const lightTheme: DefaultTheme = {
  bgColor: 'whitesmoke',
  textColor: 'black',
  accentColor: '#9c88ff',
  cardBgColor: 'white',
};
