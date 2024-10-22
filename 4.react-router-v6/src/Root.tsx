// // ✅ 4-1. BrowserRouter
// // 초기 셋팅
// // BrowserRouter (v5버전) vs createBrowserRouter

// import React from 'react';
// import Router from './Router';

// // Router를 import해줌, 파일에서 불러옴
// function App() {
//   return (
//     <div>
//       <Router />
//     </div>
//   );
// }

// export default App;

////////////////////////////////////////////////
// ✅ 4-2. createBrowserRouter
// BrowserRouter (v5버전) vs createBrowserRouter

// createBrowserRouter 는 JSX 컴포넌트를 사용하지 않고도 브라우저를 좀 더 선언적으로 바꿔준다
// App.tsx 더이상 우리의 Router 를 render 해주지 않는다

// => Root 폴더로 와서 <Outlet /> 컴포넌트를 넣어 줌

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

// Router를 import해줌, 파일에서 불러옴
function Root() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Root;

// 이렇게 하면 레이아웃을 잘 짤 수 있도록 해준다
// 그리고 너는 네 route가 어디서 바뀌는지 알 수 있고
// 네 route를 감싸는 무언가를 만들 수도 있다
// <footer><footer/> 를 만들 수도 있고, 사이드 네비게이션 같은 것도 만들 수 있고
// 너의 Route 들이 render 되는 Outlet 의 위치도 정할 수 있다

// 이 방법은
// 네비게이션을 object 로 표현할 수 있다
// Router 파일에서
// URL 을 '/' 의 자식들로 볼 수 있고, '/' 는 모두의 부모고
// '/' 에 아무것도 안 붙인 것은 Home 으로 가게 할것이고,
// 그리고 '/' 에 about 을 붙여서 보내면 Root 를 render 한다
// 그리고 그 안에 About 이 있다
// 우리가 어떻게 route 의 자식을 render 했는가? Outlet 을 사용!
