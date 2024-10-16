// // 2-1. Our First Styled Component
// // ✅ 스타일

// import styled from 'styled-components';

// const Father = styled.div`
//   display: flex;
// `;

// const BoxOne = styled.div`
//   background-color: teal;
//   width: 100px;
//   height: 100px;
// `;
// const BoxTwo = styled.div`
//   background-color: tomato;
//   width: 100px;
//   height: 100px;
// `;
// const Text = styled.span`
//   color: white;
// `;

// // ✅ 구현
// function App() {
//   return (
//     // css 파일 만들 필요 없어서 편하지만,
//     // 괄호도 열어줘야 하고 javascript 방식으로 적어줘야 하기 때문
//     // <div>
//     //   <div style={{ backgroundColor: 'teal', width: 100, height: 100 }}></div>
//     //   <div style={{ backgroundColor: 'tomato', width: 100, height: 100 }}></div>
//     // </div>
//     <Father>
//       <BoxOne>
//         <Text>Hello</Text>
//       </BoxOne>
//       <BoxTwo />
//     </Father>
//   );
// }

// export default App;

////////////////////////////////////////////
// 2-2. Adapting and Extending
// 컴포넌트 설정 - Adapting
// ✅ 설정 변경이 가능한 컴포넌트 만들기
// 설정 변경이 가능한 형태로 세팅하기
// props를 통해 컴포넌트 설정하는 방법
// styled-components에서 props를 받고 사용하는 방법

import styled from 'styled-components';

const Father = styled.div`
  display: flex;
`;
// 보내준 props를 컴포넌트에서 받아줘야함
// props라는 파라미터를 받는 함수를 적어줌
// .bgColor => .$bgColor 에러 때문에 $기호 추가
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;
// 코드 중복 됨 💩
// const Circle = styled.div`
//   background-color: ${(props) => props.bgColor};
//   width: 100px;
//   height: 100px;
//   border-radius: 50px;
// `;
// ✅ 컴포넌트 확장 - Extending
// 기존 컴포넌트의 모든 속성들을 들고 온 다음 추가적으로 더해줌
const Circle = styled(Box)`
  border-radius: 50px;
`;

// ✅ 구현
// props 설정 : 컴포넌트에 데이터를 보내는 방식, 방법
// bgColor 이름은 같아야 함
function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
    </Father>
  );
}

export default App;
