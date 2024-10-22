// ✅ 4-1. BrowserRouter
// 초기 셋팅
// BrowserRouter (v5버전) vs createBrowserRouter

// 이 Header 는 우리가 어떤 페이지로 가도 불러올 수 있게 될 것임
// Home 페이지나 About 페이지나 Header가 페이지 맨 위에 있을 것임
// Link 는 react-router-dom에서 옴

// 📍 이 Header를 Router 파일에 BrowserRouter안에 넣을 것임
// 📍 왜냐하면 Header는 Link를 사용하고 있음
// 📍 Link를 사용하려면 Link를 Router 안에 넣어야 해
// 📍 Router 밖에서는 Link를 render 할 수 없음

import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
