// // ✅ 6-0. Dark Mode part One
// // ✅ state management 사용하지 않고 다크 모드/라이트 모드 스위치 구현하기

// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Coin from './routes/coin';
// import Coins from './routes/coin';

// function Router() {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route path="/:coinId">
//           <Coin />
//         </Route>
//         <Route path="/">
//           <Coins />
//         </Route>
//       </Switch>
//     </BrowserRouter>
//   );
// }
// export default Router;

// //////////////////////////////////////////////////
// // ✅ 6-1. Dark Mode part Two
// // ✅ state management 사용하지 않고 다크 모드/라이트 모드 스위치 구현하기

// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Coins from './routes/coins';
// import Coin from './routes/coin';

// // 1️⃣ 제목 옆을 클릭해서 다크모드를 끄고 켤 수 있게 하기
// // 2️⃣ toggleDark 를 Coins screen 으로 주어야 함

// // 🔶 Router 로 와서
// // 만약 Router가 function을 받도록 하고 싶다면 function이 어떻게 생겼는지 명시
// // 이 코드는 우리가 toggleDark 라는 함수를 받고자 한다는 것
// interface IRouterProps {
//   toggleDark: () => void;
//   isDark: boolean;
// }

// function Router({ toggleDark, isDark }: IRouterProps) {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route path="/:coinId">
//           <Coin isDark={isDark} />
//         </Route>
//         <Route path="/">
//           <Coins toggleDark={toggleDark} />
//         </Route>
//       </Switch>
//     </BrowserRouter>
//   );
// }
// export default Router;

//////////////////////////////////////////////////
// ✅ 6-2. Introduction to Recoil

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Coins from './routes/coins';
import Coin from './routes/coin';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <Coin />
        </Route>
        <Route path="/">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
