// ✅ 5-0. Setup
// 코인 트래킹 어플리케이션

// useParams hook(훅)은
// 네가 URL에서 관심 있어 하는 정보를 잡아낼 수 있게 해줌
// 우리가 만약 console.log 로 파라미터를 확인한다면, URL 의 파라미터들을 보여줌
// locallhost:3000/btc btc 이 부분

import { useParams } from 'react-router';

// 방법 2
// 타입스크립트에게 useParams가 coinId를 포함하는 오브젝트를 반환할 것이라는 것을 말해줌
interface RouteParams {
  coinId: string;
}

function Coin() {
  // const { coinId } = useParams<{coinId:string}>(); // 방법 1
  const { coinId } = useParams<RouteParams>(); // 방법 2
  return <h1>Coin: {coinId}</h1>;
}
export default Coin;
