// 3-2
// ✅ Typing the Props

// Prop Types는 prop이 거기에 있는지 없는지 확인해주지만, 코드를 실행한 '후'에만 확인 가능하다
// 우리가 TypeScript를 사용하는 이유는 코드가 실행되기 '전'에 오류를 확인하기 위해서이다
// 그래서 Prop Types를 사용하지 않을 것임
// 우리의 prop들을 TypeScript로 보호해줄 것이다

import styled from 'styled-components';

// object shape(객체모양)을 TypeScript에게 설명
interface CircleProps {
  bgColor: string;
}

const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

// interface CircleProps {
//   bgColor: string;
// }

// 이 bgColor의 타입은 CircleProps의 object 이다 라고 말해주고 있는 것임
// function Circle(props: CircleProps) {
function Circle({ bgColor }: CircleProps) {
  // return <Container bgColor={props.bgColor}></Container>;
  return <Container bgColor={bgColor}></Container>;
}

export default Circle;

////////////////////////////////////////////////
// 예시
interface PlayerShape {
  name: string;
  age: number;
}

const sayHello = (playlerObj: PlayerShape) => `
Hello ${playlerObj.name} you are ${playlerObj.age} years old.
`;

sayHello({ name: 'nico', age: 12 });
sayHello({ name: 'hi', age: 12 });
