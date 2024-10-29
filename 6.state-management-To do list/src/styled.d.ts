//////////////////////////////////////////////////
// ✅ 6-5. To Do Setup

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
    cardBgColor: string;
  }
}
