// // 6-0~1
// // Dark Mode
// // Recoil 없이 다크 모드/라이트 모드 스위치 구현하기
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Coin from './routes/coin';
// import Coins from './routes/conis';

// // 만약 Router가 function을 받도록 하고 싶다면 function이 어떻게 생겼는지 명시
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

// //////////////////////////////////////////////////
// // 6-2
// // Introduction to Recoil
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Coin from './routes/coin';
import Coins from './routes/conis';

interface IRouterProps {}

function Router({}: IRouterProps) {
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
