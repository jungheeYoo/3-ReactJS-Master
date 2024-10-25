// // ✅ 5-0. Setup
// // 코인 트래킹 어플리케이션
// // Coins 컴포넌트 만들기

// function Coins() {
//   return <h1>Coins</h1>;
// }
// export default Coins;

// ///////////////////////////////////////////////
// // ✅ 5-1. Styles

// import styled from 'styled-components';

// const Title = styled.h1`
//   color: ${(props) => props.theme.accentColor};
// `;

// function Coins() {
//   return <Title>코인</Title>;
// }
// export default Coins;

///////////////////////////////////////////////
// ✅ 5-2. Home part One
// ✅ front page 만들기

import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 화면 가운데 오기
// max-width: 480px;
// margin: 0 auto;
const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

// anchor 안 쓰고 Link를 썼는데, css에서는 anchor 선택
// 이건 모든 react router link들이 결국에는 anchor로 바뀔것이고
// react router dom 이 우리 대신에 설정을 도와 줄 특별한 event listener들이 있다
const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    padding: 20px;
    transition: color 0.2s ease-in;
    display: block;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

// coinpaprika API에서 온 response를 기반으로 데이터 가져옴
const coins = [
  {
    id: 'btc-bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    rank: 1,
    is_new: false,
    is_active: true,
    type: 'coin',
  },
  {
    id: 'eth-ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    rank: 2,
    is_new: false,
    is_active: true,
    type: 'coin',
  },
  {
    id: 'hex-hex',
    name: 'HEX',
    symbol: 'HEX',
    rank: 3,
    is_new: false,
    is_active: true,
    type: 'token',
  },
];

function Coins() {
  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      <CoinsList>
        {coins.map((coin) => (
          <Coin key={coin.id}>
            {/* Bitcoin 등을 누르면 페이지로 이동 */}
            {/* Link 사용 */}
            {/* to ={}에 link가 필요한 property 넣어줘야 함 */}
            {/* 가려고 하는 URL엔 '/' 슬래시 다음에 코인의 id가 필요 */}
            {/* /:coinId */}
            {/* 위에 데이터가 있음 /${coin.id} */}
            <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
          </Coin>
        ))}
      </CoinsList>
    </Container>
  );
}
export default Coins;

// react.js의 router를 사용하기 때문에 <a href="" 이렇게 사용하지 않는다
// 이걸 사용하면 페이지가 새로고침 되어버리기 때문이다
// 대신에 react router dom을 통해 Link component를 사용한다
