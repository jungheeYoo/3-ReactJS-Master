// ✅ 5-0. Setup
// 코인 트래킹 어플리케이션

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Coin from './routes/Coin';
import Coins from './routes/Conis';

// switch 는 한 번에 하나의 Router를 렌더링할 수 있는 방법
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Coin ID를 갖는 Router */}
        <Route path="/:coinId">
          <Coin />
        </Route>
        {/* path(경로)를 가지고, 그건 home(/)이 됨 */}
        <Route path="/">
          {/* Coins 스크린을 렌더링 */}
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
