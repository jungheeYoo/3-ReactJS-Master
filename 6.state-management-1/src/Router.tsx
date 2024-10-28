// ✅ 6-0~1. Dark Mode part One
// ✅ state management 사용하지 않고 다크 모드/라이트 모드 스위치 구현하기

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Coin from './routes/coin';
import Coins from './routes/coin';

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
