// ✅ 4-1. BrowserRouter
// 초기 셋팅
// BrowserRouter (v5버전) vs createBrowserRouter

// 📍 이 Header를 Router 파일에 BrowserRouter안에 넣을 것임
// 📍 왜냐하면 Header는 Link를 사용하고 있음
// 📍 Link를 사용하려면 Link를 Router 안에 넣어야 해
// 📍 Router 밖에서는 Link를 render 할 수 없음

// 🔶 routes 생성
// 우리는 Home과 About 페이지를 render 하려고 함
// Router안에서 Routes를 적어주면 됨. Routes는 react-router-dom에서 옴
// Routes안에서는 Route를 쓸 것임. 마찬가지로 Route 도 import 해 줌
// Route는 React 컴포넌트이고 path를 가짐
// Home, About element를 render 한다

// React Router의 Route 컴포넌트는 path 속성과 element 속성을 가지고 있습니다. path는 URL 경로를 지정하고, element는 해당 경로로 이동했을 때 보여줄 React 컴포넌트를 지정합니다.
// path 속성:
// 사용자가 브라우저의 주소 표시줄에 입력하거나 링크를 클릭하여 이동할 수 있는 URL 경로를 정의
// element 속성:
// 해당 경로로 이동했을 때 렌더링할 React 컴포넌트를 지정

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './screens/About';
import Home from './screens/Home';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
