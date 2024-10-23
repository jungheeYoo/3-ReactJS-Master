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

// ////////////////////////////////////////////////
// // ✅ 4-2. createBrowserRouter
// // BrowserRouter (v5버전) vs createBrowserRouter

// // createBrowserRouter 는 JSX 컴포넌트를 사용하지 않고도 브라우저를 좀 더 선언적으로 바꿔준다
// // App.tsx 더이상 우리의 Router 를 render 해주지 않는다

// // => Root 폴더로 와서 <Outlet /> 컴포넌트를 넣어 줌

// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Header from './components/Header';

// // Router를 import해줌, 파일에서 불러옴
// function Root() {
//   return (
//     <div>
//       <Header />
//       <Outlet />
//     </div>
//   );
// }

// export default Root;

// // 이렇게 하면 레이아웃을 잘 짤 수 있도록 해준다
// // 그리고 너는 네 route가 어디서 바뀌는지 알 수 있고
// // 네 route를 감싸는 무언가를 만들 수도 있다
// // <footer><footer/> 를 만들 수도 있고, 사이드 네비게이션 같은 것도 만들 수 있고
// // 너의 Route 들이 render 되는 Outlet 의 위치도 정할 수 있다

// // 이 방법은
// // 네비게이션을 object 로 표현할 수 있다
// // Router 파일에서
// // URL 을 '/' 의 자식들로 볼 수 있고, '/' 는 모두의 부모고
// // '/' 에 아무것도 안 붙인 것은 Home 으로 가게 할것이고,
// // 그리고 '/' 에 about 을 붙여서 보내면 Root 를 render 한다
// // 그리고 그 안에 About 이 있다
// // 우리가 어떻게 route 의 자식을 render 했는가? Outlet 을 사용!

////////////////////////////////////////////////
// ✅ 4-7. useOuletContext

import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function Root() {
  return (
    <div>
      <Header />
      <Outlet context={{ darkMode: true }} />
    </div>
  );
}

export default Root;

// 만약 Root 에 뭔가가 있을 수도 있다
// 예를 들어, 다크모드를 활성화하는 true/false 하는 기능 같은 것
// 그리고 여기 Outlet 에 너의 모든 자식들에게 context 를 보낼 수도 있다
// context 는 예를 들어 darkMode : true 혹은 false 가 되는 이런식이 될거다
// Outlet 은 Root 화면의 자식들을 render 한다
// 이 말은 Home 이나 , About, User 모두가 우리가 다크모드인지 아닌지를 알게 된다는 것이다!
// Root 로부터 메세지를 받는다
// 결론은, 너의 Root 에 어떤 state 가 있을 수 있다
// 다크모드가 true 인지 false 인지에 대한 state 말이다
// 그 다음 너의 header 에 버튼이 있을 수 있다
// 그리고 그 header 는 state 를 바꿀 것이고 state 가 바뀌면
// 너의 Outlet 의 Context 를 바꿀 수 있고
// 그건 그 하위의 모든 화면과 다 소통하게 될 것이다. 모든 자식들 모두가 그 정보를 받게 됨
// 이것이 Outlet context 의 파워이다
