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

///////////////////////////////////////////////
// ✅ 5-4. Route States
// ✅ 개별 coin 화면 만들기

// coin component에서 API를 부르고 있지 않음
// 직접 API 부르지 않고, user한테 보여줄 수 있다
// 이렇게 하면 이 앱이 빠르게 구동되는 것처럼 보이게 할 수 있다
// 왜냐하면 이미 코인의 name을 갖고 있으니, API가 줄 때까지 기다릴 필요가 없다

import { useState } from 'react';
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

// 타입스크립트에게 useParams가 coinId를 포함하는 오브젝트를 반환할 것이라는 것을 말해줌
interface RouteParams {
  coinId: string;
}
interface RouteState {
  name: string;
}

// coins 에서 코인의 name 을 이용해서 State 를 보내니까
// id 를 이용해 보내는 것보다 좀 못생김
// react router DOM이 보내주는 location object에 접근하기만 하면 됨
// location 을 콘솔로그 해보면 무슨 정보가 오는지 알 수 있음
// 이렇게 하면 타이틀에 coin의 name 직접 뿌려줄 수 있다

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();

  console.log(state.name);

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

// Coins 화면, 즉 Home 에 있을 때와
// 뭔가를 클릭해서 이동할 때, state 가 home 에서 다른 화면으로 보내진다
// 그런데 문제는, 만약 시크릿 창으로 화면을 열어보면 에러가 난다
// 'name' 이 undefined 라고 나오는데
// 이 에러가 나는 이유가 state 가 정의되지 않아서이다
// 만약 누군가 Coin 페이지로 바로 접속하려고 하면 에러가 난다
// 왜냐면 state 가 생성되려면 Home 화면을 먼저 열어야 하기 때문이다
// 우리가 클릭할 때 state가 만들어지기 때문
// 그 다음에야 우리 Coin 화면이 state 를 거쳐서 title 도 보여줄 수 있다
// 만약 coinId가 들어간 URl 을 이용해
// 페이지로 바로 접속한다면, app 상에 state 가 만들어지지 못한다

// 이렇게 수정
// state가 존재하면? name을 가져오고
// state가 존재하지 않을 때는 Loading을 보여줘

// 이러면 시크릿 모드에서 상세화면 URL 을 바로 치고 들어오면 Loading 화면만 보게 됨
// Home 화면을 통해서 들어온다면, 클릭을 통해 생성 된 state 를 볼 수 있음
