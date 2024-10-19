// import original module declarations
// 1. styled-components를 임포트하고
import 'styled-components';

// and extend them!
// 2. 나의 styled-components의 테마 정의를 확장
declare module 'styled-components' {
  export interface DefaultTheme {
    // 이 아래 부분이 내 테마가 어떻게 보일지를 설명할 부분
    textColor: string;
    bgColor: string;
    btnColor: string;
  }
}
