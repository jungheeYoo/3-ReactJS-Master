// 3-6
// ✅ Themes
// 타입스크립트와 styled components 테마 연결

import { DefaultTheme } from 'styled-components/dist/types';

export const ligthTheme: DefaultTheme = {
  bgColor: 'white',
  textColor: 'black',
  btnColor: 'tomato',
};

export const darkTheme: DefaultTheme = {
  bgColor: 'black',
  textColor: 'white',
  btnColor: 'teal',
};
