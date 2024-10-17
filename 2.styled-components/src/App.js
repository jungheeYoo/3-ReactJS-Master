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

// ////////////////////////////////////////////
// // 2-2. Adapting and Extending
// // 컴포넌트 설정 - Adapting
// // ✅ 설정 변경이 가능한 컴포넌트 만들기
// // 설정 변경이 가능한 형태로 세팅하기
// // props를 통해 컴포넌트 설정하는 방법
// // styled-components에서 props를 받고 사용하는 방법

// import styled from 'styled-components';

// const Father = styled.div`
//   display: flex;
// `;
// // 보내준 props를 컴포넌트에서 받아줘야함
// // props라는 파라미터를 받는 함수를 적어줌
// // .bgColor => .$bgColor 에러 때문에 $기호 추가
// const Box = styled.div`
//   background-color: ${(props) => props.bgColor};
//   width: 100px;
//   height: 100px;
// `;
// // 코드 중복 됨 💩
// // const Circle = styled.div`
// //   background-color: ${(props) => props.bgColor};
// //   width: 100px;
// //   height: 100px;
// //   border-radius: 50px;
// // `;
// // ✅ 컴포넌트 확장 - Extending
// // 기존 컴포넌트의 모든 속성들을 들고 온 다음 추가적으로 더해줌
// const Circle = styled(Box)`
//   border-radius: 50px;
// `;

// // ✅ 구현
// // props 설정 : 컴포넌트에 데이터를 보내는 방식, 방법
// // bgColor 이름은 같아야 함
// function App() {
//   return (
//     <Father>
//       <Box bgColor="teal" />
//       <Circle bgColor="tomato" />
//     </Father>
//   );
// }

// export default App;

// ////////////////////////////////////////////
// // 2-3. 'As' and Attrs

// // ✅ As
// // 다수의 컴포넌트를 다룰 때
// // 컴포넌트의 태그를 바꾸고 싶은데 스타일은 바꾸고 싶지 않을 때

// // ✅ Attrs
// // HTML 태그의 속성을 설정할 수 있음
// // styled components가 컴포넌트를 생성할 때, 속성 값을 설정할 수 있게 해줌

// import styled from 'styled-components';

// const Father = styled.div`
//   display: flex;
// `;

// // const Btn = styled.button`
// //   color: white;
// //   background-color: tomato;
// //   border: 0;
// //   border-radius: 15px;
// // `;

// // input으로 전달 될 모든 속성을 가진 오브젝트 담을 수 있다
// const Input = styled.input.attrs({ required: true })`
//   background-color: tomato;
// `;

// function App() {
//   return (
//     <Father as="header">
//       {/* <Btn>Log in</Btn>
//       버튼을 a태그로 바꿈
//       <Btn as="a" href="/">
//         Log in
//       </Btn> */}
//       <Input />
//       <Input />
//       <Input />
//       <Input />
//       <Input />
//     </Father>
//   );
// }

// export default App;

// ////////////////////////////////////////////
// // 2-4. Animations and Pseudo Selectors

// // ✅ 애니메이션 keyframes 사용
// // ✅ styled component 안의 element를 선택하는 방법 1
// // styled component 만들지 않고 만든 것에 다른 태그들도 선택해서 써줄 수 있음
// // 다른 element도 target 할 수 있다
// // 즉, 한 component만 styled 처리해주고 다른 건 target 처리 하는 것
// // &:hover, active 만들 수 있다 = span:hover와 같음

// import styled, { keyframes } from 'styled-components';

// const Wrapper = styled.div`
//   display: flex;
// `;

// const rotationAnimation = keyframes`
//   0% {
//     transform:rotate(0deg);
//     border-radius:0px;
//   }
//   50% {
//     border-radius:100px;
//   }
//   100%{
//     transform:rotate(360deg);
//     border-radius:0px;
//   }
// `;

// const Box = styled.div`
//   height: 200px;
//   width: 200px;
//   background-color: tomato;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   animation: ${rotationAnimation} 1s linear infinite;
//   span {
//     font-size: 36px;
//     &:hover {
//       font-size: 48px;
//     }
//     &:active {
//       opacity: 0;
//     }
//   }
// `;

// function App() {
//   return (
//     <Wrapper>
//       <Box>
//         <span>🤩</span>
//       </Box>
//     </Wrapper>
//   );
// }

// export default App;

////////////////////////////////////////////
// 2-5. Pseudo Selectors part Two

// ✅ styled component 안의 element를 선택하는 방법 2
// 태그를 바꿔줄 때? 다 바꿔줘야하니 태그명에 의존하고 싶지 않다면?

import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const rotationAnimation = keyframes`
   0% {
     transform:rotate(0deg);
     border-radius:0px;
   }
   50% {
     border-radius:100px;
   }
  100%{
     transform:rotate(360deg);
    border-radius:0px;
   }
 `;

// Emoji로 직접 만들어서 스타일 적용
const Emoji = styled.span`
  font-size: 36px;
`;

// Box 컴포넌트 안에 Emoji 컴포넌트를 직접적으로 타겟팅 할 수 있음
// 태그에 의존하지 않고 Emoji로 쓰면 태그명이 달라도 상관 없다
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  ${Emoji}:hover {
    font-size: 98px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji as="span">🤩</Emoji>
      </Box>
      <Emoji>🔥</Emoji>
    </Wrapper>
  );
}

export default App;
