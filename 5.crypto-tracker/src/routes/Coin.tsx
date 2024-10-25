// // ✅ 5-0. Setup
// // 코인 트래킹 어플리케이션

// // useParams hook(훅)은
// // 네가 URL에서 관심 있어 하는 정보를 잡아낼 수 있게 해줌
// // 우리가 만약 console.log 로 파라미터를 확인한다면, URL 의 파라미터들을 보여줌
// // locallhost:3000/btc btc 이 부분

// import { useParams } from 'react-router';

// // 방법 2
// // 타입스크립트에게 useParams가 coinId를 포함하는 오브젝트를 반환할 것이라는 것을 말해줌
// interface RouteParams {
//   coinId: string;
// }

// function Coin() {
//   // const { coinId } = useParams<{coinId:string}>(); // 방법 1
//   const { coinId } = useParams<RouteParams>(); // 방법 2
//   return <h1>Coin: {coinId}</h1>;
// }
// export default Coin;

// ///////////////////////////////////////////////
// // ✅ 5-4. Route States
// // ✅ 개별 coin 화면 만들기

// // coin component에서 API를 부르고 있지 않음
// // 직접 API 부르지 않고, user한테 보여줄 수 있다
// // 이렇게 하면 이 앱이 빠르게 구동되는 것처럼 보이게 할 수 있다
// // 왜냐하면 이미 코인의 name을 갖고 있으니, API가 줄 때까지 기다릴 필요가 없다

// import { useState } from 'react';
// import { useLocation, useParams } from 'react-router';
// import styled from 'styled-components';

// const Title = styled.h1`
//   font-size: 48px;
//   color: ${(props) => props.theme.accentColor};
// `;

// const Loader = styled.span`
//   text-align: center;
//   display: block;
// `;

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

// // 타입스크립트에게 useParams가 coinId를 포함하는 오브젝트를 반환할 것이라는 것을 말해줌
// interface RouteParams {
//   coinId: string;
// }
// interface RouteState {
//   name: string;
// }

// // coins 에서 코인의 name 을 이용해서 State 를 보내니까
// // id 를 이용해 보내는 것보다 좀 못생김
// // react router DOM이 보내주는 location object에 접근하기만 하면 됨
// // location 을 콘솔로그 해보면 무슨 정보가 오는지 알 수 있음
// // 이렇게 하면 타이틀에 coin의 name 직접 뿌려줄 수 있다

// function Coin() {
//   const [loading, setLoading] = useState(true);
//   const { coinId } = useParams<RouteParams>();
//   const { state } = useLocation<RouteState>();

//   console.log(state.name);

//   return (
//     <Container>
//       <Header>
//         <Title>{state?.name || 'Loading...'}</Title>
//       </Header>
//       {loading ? <Loader>Loading...</Loader> : null}
//     </Container>
//   );
// }
// export default Coin;

// // Coins 화면, 즉 Home 에 있을 때와
// // 뭔가를 클릭해서 이동할 때, state 가 home 에서 다른 화면으로 보내진다
// // 그런데 문제는, 만약 시크릿 창으로 화면을 열어보면 에러가 난다
// // 'name' 이 undefined 라고 나오는데
// // 이 에러가 나는 이유가 state 가 정의되지 않아서이다
// // 만약 누군가 Coin 페이지로 바로 접속하려고 하면 에러가 난다
// // 왜냐면 state 가 생성되려면 Home 화면을 먼저 열어야 하기 때문이다
// // 우리가 클릭할 때 state가 만들어지기 때문
// // 그 다음에야 우리 Coin 화면이 state 를 거쳐서 title 도 보여줄 수 있다
// // 만약 coinId가 들어간 URl 을 이용해
// // 페이지로 바로 접속한다면, app 상에 state 가 만들어지지 못한다

// // 이렇게 수정
// // state가 존재하면? name을 가져오고
// // state가 존재하지 않을 때는 Loading을 보여줘

// // 이러면 시크릿 모드에서 상세화면 URL 을 바로 치고 들어오면 Loading 화면만 보게 됨
// // Home 화면을 통해서 들어온다면, 클릭을 통해 생성 된 state 를 볼 수 있음

// /////////////////////////////////////////////
// // ✅ 5-5. Coin Data
// // ✅ Detail(상세) 화면에 뿌려줄 데이터 가져오기
// // ✅ Home 페이지에서 코인을 누르면 관련된 데이터 보여주기

// // 🔶 먼저, 사용해야 할 두 가지 URL 알아보기
// // 1️⃣ 프로젝트에 필요한 정보 얻어오기 (코인 정보)
// // https://api.coinpaprika.com/v1/coins/btc-bitcoin
// // 2️⃣ 코인의 가격 정보를 갖고 있다
// // https://api.coinpaprika.com/v1/tickers/btc-bitcoin

// import { useEffect, useState } from 'react';
// import { useLocation, useParams } from 'react-router';
// import styled from 'styled-components';

// const Title = styled.h1`
//   font-size: 48px;
//   color: ${(props) => props.theme.accentColor};
// `;

// const Loader = styled.span`
//   text-align: center;
//   display: block;
// `;

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

// interface RouteParams {
//   coinId: string;
// }
// interface RouteState {
//   name: string;
// }

// function Coin() {
//   const [loading, setLoading] = useState(true);
//   const { coinId } = useParams<RouteParams>();
//   const { state } = useLocation<RouteState>();
//   const [info, setInfo] = useState({});
//   const [priceInfo, setPriceInfo] = useState({});

//   // ✨ component가 생성될 때 한 번만 코드를 실행하려면 어떻게?
//   useEffect(() => {
//     (async () => {
//       // 📍 코인 정보
//       const infoData = await (
//         await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
//       ).json();
//       // 📍 가격 정보
//       const priceData = await (
//         await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
//       ).json();
//       setInfo(infoData);
//       setPriceInfo(priceData);
//     })();
//   }, []);
//   return (
//     <Container>
//       <Header>
//         <Title>{state?.name || 'Loading...'}</Title>
//       </Header>
//       {loading ? <Loader>Loading...</Loader> : null}
//     </Container>
//   );
// }
// export default Coin;

// // 타입스크립트는 info, priceInfo 가 빈 object 라고 생각함
// // 타입스크립트에게 설명해줘야 함

/////////////////////////////////////////////
// ✅ 5-6. Data Types
// ✅ 타입스크립트에게 데이터 설명
// 타입스크립트는 info, priceInfo 가 빈 object 라고 생각함
// 타입스크립트에게 설명해줘야 함

// 🔶 방법
// infoData, priceData 를 가각 console.log 함
// console에서 마우스 오른쪽 클릭 해서 store object as global varible 누름
// 그럼 이 object 데이터가 temp1에 저장 됨
// 그럼 우리가 infoData가 필요할 때 temp1 에 접근하면 된다
// 여기 있는 데이터를 사용하기 위해서는 이 과정이 필요하다
// 그리고 console에 Object.keys(temp1) 입력
// console에 Object.keys(temp1).join() 으로 string 으로 만듦
// Object.values(temp1) values 받아오기
// value 를 받아왔지만 이 자체를 쓰려는게 아니라 타입이 필요하니
// Object.values(temp1).map(v => typeof v).join() values의 type 받아오기
// object로 이루어진 array

import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

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

interface RouteParams {
  coinId: string;
}
interface RouteState {
  name: string;
}

// ✨ 타입스크립트 코드 베이스를 보면 interface 이름 지을 때 앞에 I를 붙인다
interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  const [info, setInfo] = useState<InfoData>();
  const [priceInfo, setPriceInfo] = useState<PriceData>();
  setLoading(false);
  // API로부터 데이터를 request 한 후에 setLoading 을 false로 바꿔줘야 함
  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      console.log(infoData);
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      console.log(priceData);
      setInfo(infoData);
      setPriceInfo(priceData);
    })();
  }, [coinId]);
  return (
    <Container>
      <Header>
        <Title>{state?.name || 'Loading...'}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}
export default Coin;
