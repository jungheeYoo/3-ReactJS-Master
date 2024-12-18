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

// /////////////////////////////////////////////
// // ✅ 5-6. Data Types
// // ✅ 타입스크립트에게 데이터 설명
// // 타입스크립트는 info, priceInfo 가 빈 object 라고 생각함
// // 타입스크립트에게 설명해줘야 함

// // 🔶 방법
// // infoData, priceData 를 가각 console.log 함
// // console에서 마우스 오른쪽 클릭 해서 store object as global varible 누름
// // 그럼 이 object 데이터가 temp1에 저장 됨
// // 그럼 우리가 infoData가 필요할 때 temp1 에 접근하면 된다
// // 여기 있는 데이터를 사용하기 위해서는 이 과정이 필요하다
// // 그리고 console에 Object.keys(temp1) 입력
// // console에 Object.keys(temp1).join() 으로 string 으로 만듦
// // Object.values(temp1) values 받아오기
// // value 를 받아왔지만 이 자체를 쓰려는게 아니라 타입이 필요하니
// // Object.values(temp1).map(v => typeof v).join() values의 type 받아오기
// // object로 이루어진 array

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

// // ✨ 타입스크립트 코드 베이스를 보면 interface 이름 지을 때 앞에 I를 붙인다
// interface InfoData {
//   id: string;
//   name: string;
//   symbol: string;
//   rank: number;
//   is_new: boolean;
//   is_active: boolean;
//   type: string;
//   description: string;
//   message: string;
//   open_source: boolean;
//   started_at: string;
//   development_status: string;
//   hardware_wallet: boolean;
//   proof_type: string;
//   org_structure: string;
//   hash_algorithm: string;
//   first_data_at: string;
//   last_data_at: string;
// }

// interface PriceData {
//   id: string;
//   name: string;
//   symbol: string;
//   rank: number;
//   circulating_supply: number;
//   total_supply: number;
//   max_supply: number;
//   beta_value: number;
//   first_data_at: string;
//   last_updated: string;
//   quotes: {
//     USD: {
//       ath_date: string;
//       ath_price: number;
//       market_cap: number;
//       market_cap_change_24h: number;
//       percent_change_1h: number;
//       percent_change_1y: number;
//       percent_change_6h: number;
//       percent_change_7d: number;
//       percent_change_12h: number;
//       percent_change_15m: number;
//       percent_change_24h: number;
//       percent_change_30d: number;
//       percent_change_30m: number;
//       percent_from_price_ath: number;
//       price: number;
//       volume_24h: number;
//       volume_24h_change_24h: number;
//     };
//   };
// }

// function Coin() {
//   const [loading, setLoading] = useState(true);
//   const { coinId } = useParams<RouteParams>();
//   const { state } = useLocation<RouteState>();
//   const [info, setInfo] = useState<InfoData>();
//   const [priceInfo, setPriceInfo] = useState<PriceData>();
//   setLoading(false);
//   // API로부터 데이터를 request 한 후에 setLoading 을 false로 바꿔줘야 함
//   useEffect(() => {
//     (async () => {
//       const infoData = await (
//         await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
//       ).json();
//       console.log(infoData);
//       const priceData = await (
//         await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
//       ).json();
//       console.log(priceData);
//       setInfo(infoData);
//       setPriceInfo(priceData);
//     })();
//   }, [coinId]);
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

// /////////////////////////////////////////////
// // ✅ 5-7. Nested Routes part One
// // ✅ screen 을 paint 하기

// // 🔶 react router 에 있는 nested router 사용
// // ✨ Nested Routes 혹은 nested route 는 route 안에 있는 또 다른 route 이다
// // 웹사이트에서 탭을 사용할 때 많이 도와줄 것임
// // 스크린 안에 많은 섹션이 나뉘어진 곳에서도 유용

// // 탭을 사용해서 만드는데 이 탭들을 State 에서 컨트롤 (할 수 있음) 하는 것 대신에
// // URL 에서 컨트롤 한다. 더 사용성이 높음
// // 이렇게 만들면 유저들이 스크린과 차트에 바로 접속할 수 있다
// // http://localhost:3000/btc-bitcoin/price
// // 이렇게 오면 스크린으로 오게 되고 price 탭이 선택되어 있을 것임

// import { useEffect, useState } from 'react';
// import { Switch, Route, useLocation, useParams } from 'react-router';
// import styled from 'styled-components';
// import Price from './Price';
// import Chart from './Chart';

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

// const Overview = styled.div`
//   display: flex;
//   justify-content: space-between;
//   background-color: rgba(0, 0, 0, 0.5);
//   padding: 10px 20px;
//   border-radius: 10px;
// `;
// const OverviewItem = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   span:first-child {
//     font-size: 10px;
//     font-weight: 400;
//     text-transform: uppercase;
//     margin-bottom: 5px;
//   }
// `;
// const Description = styled.p`
//   margin: 20px 0px;
// `;

// interface RouteParams {
//   coinId: string;
// }
// interface RouteState {
//   name: string;
// }
// interface InfoData {
//   id: string;
//   name: string;
//   symbol: string;
//   rank: number;
//   is_new: boolean;
//   is_active: boolean;
//   type: string;
//   description: string;
//   message: string;
//   open_source: boolean;
//   started_at: string;
//   development_status: string;
//   hardware_wallet: boolean;
//   proof_type: string;
//   org_structure: string;
//   hash_algorithm: string;
//   first_data_at: string;
//   last_data_at: string;
// }
// interface PriceData {
//   id: string;
//   name: string;
//   symbol: string;
//   rank: number;
//   circulating_supply: number;
//   total_supply: number;
//   max_supply: number;
//   beta_value: number;
//   first_data_at: string;
//   last_updated: string;
//   quotes: {
//     USD: {
//       ath_date: string;
//       ath_price: number;
//       market_cap: number;
//       market_cap_change_24h: number;
//       percent_change_1h: number;
//       percent_change_1y: number;
//       percent_change_6h: number;
//       percent_change_7d: number;
//       percent_change_12h: number;
//       percent_change_15m: number;
//       percent_change_24h: number;
//       percent_change_30d: number;
//       percent_change_30m: number;
//       percent_from_price_ath: number;
//       price: number;
//       volume_24h: number;
//       volume_24h_change_24h: number;
//     };
//   };
// }

// function Coin() {
//   const [loading, setLoading] = useState(true);
//   const { coinId } = useParams<RouteParams>();
//   const { state } = useLocation<RouteState>();
//   const [info, setInfo] = useState<InfoData>();
//   const [priceInfo, setPriceInfo] = useState<PriceData>();
//   useEffect(() => {
//     (async () => {
//       const infoData = await (
//         await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
//       ).json();
//       const priceData = await (
//         await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
//       ).json();
//       setInfo(infoData);
//       setPriceInfo(priceData);
//       setLoading(false); // API 로부터 데이터를 request 한 후에 setLoading false 하기
//     })();
//   }, [coinId]);
//   // 컴포넌트 시작에서 한 번만 코드를 실행하고 싶다면 [] 이렇게 해줘야 한다
//   // 이곳에 무언가를 넣으면 변하게 되고 변하면 다시 실행될텐데 우린 그것을 원하지 않는다
//   // 하지만 hooks 는 최선의 성능을 위해서는 hook 안에서 사용한 것은 그게 어떤 것이든
//   // 여기에 dependency 를 넣어야한다고 함
//   // 그래서 이 hooks 에서 coinId 라고 불리는 것을 사용하고 있다고 알려줌
//   // 만약 coinId 가 변한다면 이 코드들이 다시 실행될 것임
//   // 하지먄 coinId 는 URL 에 위치에 있기 때문에 절대 변하지 않음
//   // coinId 는 절대 바뀌지 않기 때문에 이 모든 API request 가 한 번만 이뤄질 것임
//   return (
//     <Container>
//       <Header>
//         <Title>
//           {state?.name ? state.name : loading ? 'Loading...' : info?.name}
//         </Title>
//       </Header>
//       {loading ? (
//         <Loader>Loading...</Loader>
//       ) : (
//         <>
//           <Overview>
//             <OverviewItem>
//               <span>Rank:</span>
//               <span>{info?.rank}</span>
//             </OverviewItem>
//             <OverviewItem>
//               <span>Symbol:</span>
//               <span>${info?.symbol}</span>
//             </OverviewItem>
//             <OverviewItem>
//               <span>Open Source:</span>
//               <span>{info?.open_source ? 'Yes' : 'No'}</span>
//             </OverviewItem>
//           </Overview>
//           <Description>{info?.description}</Description>
//           <Overview>
//             <OverviewItem>
//               <span>Total Suply:</span>
//               <span>{priceInfo?.total_supply}</span>
//             </OverviewItem>
//             <OverviewItem>
//               <span>Max Supply:</span>
//               <span>{priceInfo?.max_supply}</span>
//             </OverviewItem>
//           </Overview>
//           {/* 한 번에 하나의 route만 render 하려고 Switch 사용 */}
//           {/* 또 다른 route를 render 하는 route 만듦 */}
//           {/* route 는 paht 를 가져야 함 */}
//           <Switch>
//             <Route path={`/${coinId}/price`}>
//               <Price />
//             </Route>
//             <Route path={`/${coinId}/chart`}>
//               <Chart />
//             </Route>
//           </Switch>
//         </>
//       )}
//     </Container>
//   );
// }
// export default Coin;

// /////////////////////////////////////////////
// // ✅ 5-8. Nested Routes part Two
// // ✅ price 와 chart 를 스위치 하는 탭 만들기

// import { useEffect, useState } from 'react';
// import {
//   Switch,
//   Route,
//   useLocation,
//   useParams,
//   useRouteMatch,
// } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import Chart from './Chart';
// import Price from './Price';

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

// const Overview = styled.div`
//   display: flex;
//   justify-content: space-between;
//   background-color: rgba(0, 0, 0, 0.5);
//   padding: 10px 20px;
//   border-radius: 10px;
// `;
// const OverviewItem = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   span:first-child {
//     font-size: 10px;
//     font-weight: 400;
//     text-transform: uppercase;
//     margin-bottom: 5px;
//   }
// `;
// const Description = styled.p`
//   margin: 20px 0px;
// `;

// const Tabs = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   margin: 25px 0px;
//   gap: 10px;
// `;

// // 🌱 isActive prop 추가
// // Tab styled component는 isActive 라고 불리는 prop 가짐
// // 이건 boolean 형태
// // prop이 isActive인지 확인하고 만약 Acitve라면 accentColor을 theme 적용
// // 아니라면 prop의 theme의 색은 그냥 기본 textColor
// const Tab = styled.span<{ isActive: boolean }>`
//   text-align: center;
//   text-transform: uppercase;
//   font-size: 12px;
//   font-weight: 400;
//   background-color: rgba(0, 0, 0, 0.5);
//   padding: 7px 0px;
//   border-radius: 10px;
//   color: ${(props) =>
//     props.isActive ? props.theme.accentColor : props.theme.textColor};
//   a {
//     display: block;
//   }
// `;

// interface RouteParams {
//   coinId: string;
// }
// interface RouteState {
//   name: string;
// }
// interface InfoData {
//   id: string;
//   name: string;
//   symbol: string;
//   rank: number;
//   is_new: boolean;
//   is_active: boolean;
//   type: string;
//   description: string;
//   message: string;
//   open_source: boolean;
//   started_at: string;
//   development_status: string;
//   hardware_wallet: boolean;
//   proof_type: string;
//   org_structure: string;
//   hash_algorithm: string;
//   first_data_at: string;
//   last_data_at: string;
// }
// interface PriceData {
//   id: string;
//   name: string;
//   symbol: string;
//   rank: number;
//   circulating_supply: number;
//   total_supply: number;
//   max_supply: number;
//   beta_value: number;
//   first_data_at: string;
//   last_updated: string;
//   quotes: {
//     USD: {
//       ath_date: string;
//       ath_price: number;
//       market_cap: number;
//       market_cap_change_24h: number;
//       percent_change_1h: number;
//       percent_change_1y: number;
//       percent_change_6h: number;
//       percent_change_7d: number;
//       percent_change_12h: number;
//       percent_change_15m: number;
//       percent_change_24h: number;
//       percent_change_30d: number;
//       percent_change_30m: number;
//       percent_from_price_ath: number;
//       price: number;
//       volume_24h: number;
//       volume_24h_change_24h: number;
//     };
//   };
// }

// function Coin() {
//   const [loading, setLoading] = useState(true);
//   const { coinId } = useParams<RouteParams>();
//   const { state } = useLocation<RouteState>();
//   const [info, setInfo] = useState<InfoData>();
//   const [priceInfo, setPriceInfo] = useState<PriceData>();

//   // 🌱 routematch에게 우리가 coinId/price 라는 URL 에 있는지 확인
//   const priceMatch = useRouteMatch('/:coinId/price');
//   const chartMatch = useRouteMatch('/:coinId/chart');
//   useEffect(() => {
//     (async () => {
//       const infoData = await (
//         await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
//       ).json();
//       const priceData = await (
//         await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
//       ).json();
//       setInfo(infoData);
//       setPriceInfo(priceData);
//       setLoading(false);
//     })();
//   }, [coinId]);
//   return (
//     <Container>
//       <Header>
//         <Title>
//           {state?.name ? state.name : loading ? 'Loading...' : info?.name}
//         </Title>
//       </Header>
//       {loading ? (
//         <Loader>Loading...</Loader>
//       ) : (
//         <>
//           <Overview>
//             <OverviewItem>
//               <span>Rank:</span>
//               <span>{info?.rank}</span>
//             </OverviewItem>
//             <OverviewItem>
//               <span>Symbol:</span>
//               <span>${info?.symbol}</span>
//             </OverviewItem>
//             <OverviewItem>
//               <span>Open Source:</span>
//               <span>{info?.open_source ? 'Yes' : 'No'}</span>
//             </OverviewItem>
//           </Overview>
//           <Description>{info?.description}</Description>
//           <Overview>
//             <OverviewItem>
//               <span>Total Suply:</span>
//               <span>{priceInfo?.total_supply}</span>
//             </OverviewItem>
//             <OverviewItem>
//               <span>Max Supply:</span>
//               <span>{priceInfo?.max_supply}</span>
//             </OverviewItem>
//           </Overview>

//           {/* 기본적으로 탭들은 링크가 되어야 함 */}
//           {/* isActive를 priceMatch나 chartMatch에서 받아옴 */}
//           {/* 만약 isActve라면, 만약 chartMatch가 null과 같지 않다면  */}
//           {/* 만약 찾고 있는 URL에 들어와 있다면 object를 받게 됨 반대면 null */}
//           <Tabs>
//             <Tab isActive={chartMatch !== null}>
//               <Link to={`/${coinId}/chart`}>Chart</Link>
//             </Tab>
//             <Tab isActive={priceMatch !== null}>
//               <Link to={`/${coinId}/price`}>Price</Link>
//             </Tab>
//           </Tabs>

//           <Switch>
//             {/* react router 는 여기에 뭐가 들어오는지 알 수 있다 */}
//             {/* :coinId 변수 사용 */}
//             <Route path={`/:coinId/price`}>
//               <Price />
//             </Route>
//             <Route path={`/:coinId/chart`}>
//               <Chart />
//             </Route>
//           </Switch>
//         </>
//       )}
//     </Container>
//   );
// }
// export default Coin;

// // 🔶 스위치 탭 만들기
// // 기본적으로 탭들은 링크가 되어야 함
// // 여기서 nested route를 사용하기 때문에
// // onClickEvent 와 같은 것을 갖고 있는 버튼이 필요 없다
// // 그저 URL을 바꿔주기만 하면 됨
// // URL을 어떻게 바꿔줘야 하냐면 Link를 사용하면 됨

// // 우리가 원하는 것은 http://localhost:3000/btc-bitcoin/price
// // 지금 내가 있는 곳 뒤에 /price 나 /chart 를 붙이고 싶다
// // 이렇게 하기 위해서 우리 URL에서 갖고 있는 coinId를 사용
// // useParams는 우리의 URL에서 변수의 정보를 가져다 준다
// // 그래서 내가 어디있는지 알고 싶다면, 여기 뭐가 있는지 알고 싶다면
// // coinId를 사용
// // URL 에 따라서 어떤 것을 보여주고 숨길 수 있다
// // URL 변화 없이 react.js 의 State 만으로 구현할 수도 있었겠지만
// // 링크를 사용해서 URL을 바꿈으로써 트리거가 되어서 re-render를 할 수 있다
// // 페이지 자체는 re-render 가 일어나지 않고
// // Chart 누르면 Chart 보이고 Price는 숨기고 여기 부분만 바뀜
// // 그리고 유저들이 URL 로 직접 들어올 수 있다
// // btc-bitcoin 에 들어와서 price 를 눌러서 들어올 필요가 없다

// // 🔶 그럼 어떻게 유저와 소통할 수 있는지?
// // 어떤 탭을 유저가 클릭했는지 보면서
// // 예를 들어 만약 유저가 price 를 클릭했다면 ?
// // 유저와 이것이 현재 선택 된 탭인지 말해주며 소통한다
// // 그럼 지금 있는 곳의 URL의 대한 정보를 줘야 한다

// // 🔶 useRouteMatch 훅
// // 유저가 어느 탭에 지금 있는지 알려주면서 유저와 소통하는 방법
// // 네가 특정한 URL 에 있는지의 여부를 알려줌

///////////////////////////////////////////////
// ✅ 5-10. React Query part Two

import { useQuery } from 'react-query';
import {
  Switch,
  Route,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchCoinInfo, fetchCoinTickers } from '../api';
import Chart from './Chart';
import Price from './Price';

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

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    padding: 7px 0px;
    display: block;
  }
`;

interface RouteParams {
  coinId: string;
}
interface RouteState {
  name: string;
}
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
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  const priceMatch = useRouteMatch('/:coinId/price');
  const chartMatch = useRouteMatch('/:coinId/chart');
  // const [loading, setLoading] = useState(true);
  //   const [info, setInfo] = useState<InfoData>();
  //   const [priceInfo, setPriceInfo] = useState<PriceData>();
  //   const priceMatch = useRouteMatch('/:coinId/price');
  //   const chartMatch = useRouteMatch('/:coinId/chart');
  //   useEffect(() => {
  //     (async () => {
  //       const infoData = await (
  //         await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
  //       ).json();
  //       const priceData = await (
  //         await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
  //       ).json();
  //       setInfo(infoData);
  //       setPriceInfo(priceData);
  //       setLoading(false);
  //     })();
  //   }, [coinId]);
  // userQuery hook 사용

  // ✨ 여기 fetcher 함수는 argumnet를 전달 받고 있어서 coinId를 알아야 함
  // ✨ fetchCoinInfo 함수를 불러와서 URL로부터 오는 coinId를 넣어줌
  // ✨ 두 가지의 query를 만들었는데 이 둘은 모두 같은 query key를 갖고 있음
  // 하지만 React query의 query 는 각각의 고유한 id를 갖고 있어야함
  // React query 가 우리의 query를 인식하는 방법은 key 를 보고 인식한다
  // React query는 key 를 array 로 감싸서 표현함 ['allCoins'] 이런식
  // 그래서 이렇게 만듦 ['info', coinId], ['tickers', coinId]

  // React Query 안에는 isLoading이라는 상태가 포함되어 있다
  // 여기서도 isLoading 이름이 같기 때문에 isLoading: infoLoading 이름을 이렇게 바꿔줌
  // data 도 마찬가지로 바꿔준다
  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(
    ['info', coinId],
    () => fetchCoinInfo(coinId)
  );
  const { isLoading: tickersLoading, data: tickersData } = useQuery<PriceData>(
    ['tickers', coinId],
    () => fetchCoinTickers(coinId)
  );
  // isLoading 은 두 가지로 구성되어 있다. 그래서 새로운 변수를 만듦
  // loading 은 infoLoading 혹은 tickersLoading 이면 true
  const loading = infoLoading || tickersLoading;
  return (
    <Container>
      <Header>
        <Title>
          {state?.name ? state.name : loading ? 'Loading...' : infoData?.name}
        </Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source:</span>
              <span>{infoData?.open_source ? 'Yes' : 'No'}</span>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{tickersData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{tickersData?.max_supply}</span>
            </OverviewItem>
          </Overview>

          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>

          <Switch>
            <Route path={`/:coinId/price`}>
              <Price />
            </Route>
            <Route path={`/:coinId/chart`}>
              <Chart />
            </Route>
          </Switch>
        </>
      )}
    </Container>
  );
}
export default Coin;
