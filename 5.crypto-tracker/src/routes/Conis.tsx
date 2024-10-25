// // ✅ 5-0. Setup
// // 코인 트래킹 어플리케이션
// // Coins 컴포넌트 만들기

// function Coins() {
//   return <h1>Coins</h1>;
// }
// export default Coins;

///////////////////////////////////////////////
// ✅ 5-1. Styles

import styled from 'styled-components';

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

function Coins() {
  return <Title>코인</Title>;
}
export default Coins;
