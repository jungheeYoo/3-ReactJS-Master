// // 3-5. Forms
// // ✅ event들에 타입을 추가하는 방법

// // FormEvent 이런건 공식 문서 또는 구글링으로 필요할 때 찾아서 씀
// // FormEvent React.FormEvent<T = Element>
// // FormEvent 내에서 하나의 Element를 보낼 수 있다
// // 이 상황에서 우리는 어떤 종류의 Element가 이 onChange 이벤트를 발생시킬지를 특정할 수 있다
// // 타입스크립트는 이 onChange 함수가 InputElement에 의해서 실행될 것을 아는 것

// // 셋팅
// // input의 value를 state와 연결. useState 사용.
// // onChange 함수는 input의 onChange event에 함수 onChange 연결
// // 이 onChange 함수에서 원하는 것은, evnet 에 접근하는 것

// import { useState } from 'react';

// function App() {
//   const [value, setValue] = useState('');
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     // console.log(event.currentTarget.value);
//     const {
//       currentTarget: { value },
//     } = event;
//     setValue(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log('hello', value);
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input
//           value={value}
//           onChange={onChange}
//           type="text"
//           placeholder="username"
//         />
//         <button>Log in</button>
//       </form>
//     </div>
//   );
// }

// export default App;

////////////////////////////////////////////////
// 3-6
// ✅ Themes
// 타입스크립트와 styled components 테마 연결

import styled from 'styled-components';

// bgColor이 틀리면 이제 타입스크립트는 말해준다.
const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

interface DummyProps {
  text: string;
  active?: boolean;
}

function Dummy({ text, active = false }: DummyProps) {
  return <h1>{text}</h1>;
}

function App() {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {};
  return (
    <Container>
      <H1>protected</H1>
      {/* <Dummy active={true} text="hello" /> => active이것과 같은 것 */}
      <Dummy active text="hello" />
      <button onClick={onClick}>click me</button>
    </Container>
  );
}

export default App;

// 함수와 인자들의 타입 지정하는 법
// 컴포넌트의 prop들의 타입 지정하는 법
// 어떻게 하면 prop들을 선택적으로 만들 수 있는지, 또는 필수적으로 만드는지
// prop에 기본 값 주는 방법
// event 이벤트에 타입 지정하는 법
