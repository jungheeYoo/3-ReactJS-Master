//////////////////////////////////////////////////
// ✅ 9-1. Header part One
// 라우터 만들기
// 헤더 만들기

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Tv from './Routes/Tv';
import Search from './Routes/Search';
import Header from './Components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/tv">
          <Tv />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// router 순서 중요
// <Route path="/"> (/) 만 있는 경로는 처음에 넣으면 안되고 제일 마지막에 넣어야 함
// router 가 / 이 부분과 일치하는 부분을 찾아내는데 항상 이 부분에서 true를 반환한다
// 모든 경로가 (/) 이렇게 시작하니까 이 부분이 위에 있으면 어느곳을 가도 home으로 감
