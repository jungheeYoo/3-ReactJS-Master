// ✅ 6-0. Dark Mode part One
// ✅ state management 사용하지 않고 다크 모드/라이트 모드 스위치 구현하기

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
    cardBgColor: string;
  }
}
