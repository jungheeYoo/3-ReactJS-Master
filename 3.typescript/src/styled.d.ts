// 3-6
// ✅ Themes
// 타입스크립트와 styled components 테마 연결

// declaration 선언 파일
// styled.d.ts 파일의 주요 용도
// 커스텀 테마 타입 정의
// 전역 모듈 확장 (Module Augmentation)

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
