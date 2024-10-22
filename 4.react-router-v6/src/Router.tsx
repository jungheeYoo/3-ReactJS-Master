// // ✅ 4-1. BrowserRouter
// // 초기 셋팅
// // BrowserRouter (v5버전) vs createBrowserRouter

// // 📍 이 Header를 Router 파일에 BrowserRouter안에 넣을 것임
// // 📍 왜냐하면 Header는 Link를 사용하고 있음
// // 📍 Link를 사용하려면 Link를 Router 안에 넣어야 해
// // 📍 Router 밖에서는 Link를 render 할 수 없음

// // 🔶 routes 생성
// // 우리는 Home과 About 페이지를 render 하려고 함
// // Router안에서 Routes를 적어주면 됨. Routes는 react-router-dom에서 옴
// // Routes안에서는 Route를 쓸 것임. 마찬가지로 Route 도 import 해 줌
// // Route는 React 컴포넌트이고 path를 가짐
// // Home, About element를 render 한다

// // React Router의 Route 컴포넌트는 path 속성과 element 속성을 가지고 있습니다. path는 URL 경로를 지정하고, element는 해당 경로로 이동했을 때 보여줄 React 컴포넌트를 지정합니다.
// // path 속성:
// // 사용자가 브라우저의 주소 표시줄에 입력하거나 링크를 클릭하여 이동할 수 있는 URL 경로를 정의
// // element 속성:
// // 해당 경로로 이동했을 때 렌더링할 React 컴포넌트를 지정

// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import About from './screens/About';
// import Home from './screens/Home';

// function Router() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default Router;

////////////////////////////////////////////////
// ✅ 4-2. createBrowserRouter
// BrowserRouter (v5버전) vs createBrowserRouter

import { createBrowserRouter } from 'react-router-dom';
import About from './screens/About';
import Home from './screens/Home';
import Root from './Root';

// Router 역시 Header를 더 이상 render 하지 않으니까 없앰
// 그리고 전체 컴포넌트도 없애줌. 그리고 const Router 생성
// createBrowserRouter라는 함수를 import 해줌. 이건 react-router-dom 에서 옴. react-router-dom 입력

// BrowserRouter 대신 createBrowserRouter 바꿔주면
// 우리의 Router 를 array 형식으로 표현할 수 있게 해줌. 즉, JavaScript Object로부터

// 🔶 첫 번재 route 만들기
// 첫 번재 route 는 Home 페이지가 아님
// 대신 전체 route 들의 컨테이너와 같은 것이 될 것임
// 그래서 App.tsx 를 Root.tsx 로 바꿈

// 1️⃣ 먼저 할 것은 path 정하기
// 만약 유저가 path: '/', 이 URL로 이동한다면
// 또는 만약 location이 그 URL과 일치한다면 우리는 element Root 를 render 할 것임

// 2️⃣ Home, About 화면 render 하기
// Home, About 화면 render 하려면 path: '/',를 부모로 생각해야함
// Home이나 About은 '자식'으로 생각하면 된다
// '/'는 URL 그 자체, '/about' 은 일종의 '/' 의 자식인 것이다
// 이게 우리가 about을 '/' 경로의 children 안에 넣은 이유이다

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

export default router;

// ✨ http://localhost:3000/about 해도 hello 만 보임. 즉, 여전히 '/' 이것과 매치 됨.
// 여전히 Root 를 render 하고 있음
// 왜냐하면 아직도 '/' 안에 있고 그에 about 을 더해주고 있는 셈

// 그래서 무엇을 해야 하냐면 react-router-dom 에게 Root 의 자식을 render 하길 원한다라고 알려줘야 함 => Root 폴더로 가서
// Root의 자식을 render 하길 원한다면?

// Root 안으로 가서 <Outlet /> 이라는 컴포넌트 적어준다
// 이렇게 하면 예를 들어, /about 페이지로 가면 무슨 일이 일어나냐면
// react router가 이 Root를 보고 Root를 render하고
// 네가 /about으로 가려고 하는 상황이기 때문에
// react router는 Oulet이라는을 About으로 대체하려고 한다

// 📌 다시 한번 설명!
// 네가 /about으로 가고자 하면, 넌 path: '/', 이 URL로 매치가 됨
// 그러면 react router는 Root를 Render 하게 됨
// 그런데 Root한테 자식이 있기 때문에
// 우리는 Oulet이라는 컴포넌트를 사용함
// react router는 이 Oulet 컴포넌트를 통해서 URL을 보게 되는데
// 예를 들면, /about 이라면, Root를 render하고 About도 render하게 됨
// 여기서 뭘하냐면, Oulet 을 네가 render 하고자 하는 route로 바꿔서 render 한 것
// 그것이 자식 route이다
