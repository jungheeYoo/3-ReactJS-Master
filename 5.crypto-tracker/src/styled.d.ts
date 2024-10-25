// // ✅ 5-0. Setup
// // 코인 트래킹 어플리케이션

// import 'styled-components';

// declare module 'styled-components' {
//   export interface DefaultTheme {
//     textColor: string;
//     bgColor: string;
//     btnColor: string;
//   }
// }

///////////////////////////////////////////////
// ✅ 5-1. Styles

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
  }
}
