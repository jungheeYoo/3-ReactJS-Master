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

// ///////////////////////////////////////////////
// // ✅ 5-2. Home part One
// // ✅ front page 만들기

// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// // 화면 가운데 오기
// // max-width: 480px;
// // margin: 0 auto;
// const Container = styled.div`
//   padding: 0px 20px;
//   max-width: 480px;
//   margin: 0 auto;
// `;

// const Header = styled.header`
//   height: 15vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const CoinsList = styled.ul``;

// // anchor 안 쓰고 Link를 썼는데, css에서는 anchor 선택
// // 이건 모든 react router link들이 결국에는 anchor로 바뀔것이고
// // react router dom 이 우리 대신에 설정을 도와 줄 특별한 event listener들이 있다
// const Coin = styled.li`
//   background-color: white;
//   color: ${(props) => props.theme.bgColor};
//   border-radius: 15px;
//   margin-bottom: 10px;
//   a {
//     padding: 20px;
//     transition: color 0.2s ease-in;
//     display: block;
//   }
//   &:hover {
//     a {
//       color: ${(props) => props.theme.accentColor};
//     }
//   }
// `;

// const Title = styled.h1`
//   font-size: 48px;
//   color: ${(props) => props.theme.accentColor};
// `;

// // coinpaprika API에서 온 response를 기반으로 데이터 가져옴
// const coins = [
//   {
//     id: 'btc-bitcoin',
//     name: 'Bitcoin',
//     symbol: 'BTC',
//     rank: 1,
//     is_new: false,
//     is_active: true,
//     type: 'coin',
//   },
//   {
//     id: 'eth-ethereum',
//     name: 'Ethereum',
//     symbol: 'ETH',
//     rank: 2,
//     is_new: false,
//     is_active: true,
//     type: 'coin',
//   },
//   {
//     id: 'hex-hex',
//     name: 'HEX',
//     symbol: 'HEX',
//     rank: 3,
//     is_new: false,
//     is_active: true,
//     type: 'token',
//   },
// ];

// function Coins() {
//   return (
//     <Container>
//       <Header>
//         <Title>코인</Title>
//       </Header>
//       <CoinsList>
//         {coins.map((coin) => (
//           <Coin key={coin.id}>
//             {/* Bitcoin 등을 누르면 페이지로 이동 */}
//             {/* Link 사용 */}
//             {/* to ={}에 link가 필요한 property 넣어줘야 함 */}
//             {/* 가려고 하는 URL엔 '/' 슬래시 다음에 코인의 id가 필요 */}
//             {/* /:coinId */}
//             {/* 위에 데이터가 있음 /${coin.id} */}
//             <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
//           </Coin>
//         ))}
//       </CoinsList>
//     </Container>
//   );
// }
// export default Coins;

// // react.js의 router를 사용하기 때문에 <a href="" 이렇게 사용하지 않는다
// // 이걸 사용하면 페이지가 새로고침 되어버리기 때문이다
// // 대신에 react router dom을 통해 Link component를 사용한다

/////////////////////////////////////////////
// ✅ 5-3. Home part Two
// API로부터 데이터를 fetch(가져오기) 하기

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 🔶 화면 가운데 오기
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

const Loader = styled.span`
  text-align: center;
  display: block;
`;

// 🔶 API 데이터의 interface 만들기
// 만든 데이터이든, API 데이터로 가져오는 것일 때도
// 똑같이 typescript에게 무엇이 오는지 알려줘야 함
// 코인이 어떻게 생겼는지 typescript에게 말해줌
interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  // 🔶 state안에 coin 만듦
  // typescript에게 우리의 coins State는 coins로 이루어진 array라고 알려줌
  // state가 coin으로 된 array라고 말해줌
  // 기본 값: 빈 배열
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  // 🔶 load 함수
  const [loading, setLoading] = useState(true);

  // 🔶 useEffect() 사용 - 특정한 시기에만 코드 실행 하기 위해서
  // component 가 처음으로 시작할 때 한 번만 실행하도록 함
  // 새로운 function 만들지 않고 모두 useEffect 안에서 함
  useEffect(() => {
    // 🌱 즉시 실행 함수 : 이 자리에서 바로 function을 실행할 수 있는 함수
    (async () => {
      const response = await fetch('https://api.coinpaprika.com/v1/coins');
      const json = await response.json();
      setCoins(json.slice(0, 100)); // 100개 정도만 가져옴
      // state 안에 코인이 다 세팅되면 loading 함수 false로 바꿈
      setLoading(false);
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      {/* loading 참이면 Loading... 보여주고 */}
      {/* 거짓이면 CoinsList만 보여줌 */}
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}
export default Coins;

// 🤔 async...await, setLoading 이렇게 안하고 React Query로 할 수 있다
// 여기서는 페이지로 돌아오면 다시 load가 된다. API를 request하는 것이다.
// 이러한 일이 일어나는 이유는
// screen이 바뀔 때, state가 사라지고
// Coins screen에서 coin 개별 화면으로 갈 때도 갖고 있던 모든 state가 사라진다
// 그러니까 user가 다시 돌아왔을 때마다 API를 다시 fetch해야 하는 것이다
