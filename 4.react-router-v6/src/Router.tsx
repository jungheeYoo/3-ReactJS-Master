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

// ////////////////////////////////////////////////
// // ✅ 4-2. createBrowserRouter
// // BrowserRouter (v5버전) vs createBrowserRouter

// import { createBrowserRouter } from 'react-router-dom';
// import About from './screens/About';
// import Home from './screens/Home';
// import Root from './Root';

// // Router 역시 Header를 더 이상 render 하지 않으니까 없앰
// // 그리고 전체 컴포넌트도 없애줌. 그리고 const Router 생성
// // createBrowserRouter라는 함수를 import 해줌. 이건 react-router-dom 에서 옴. react-router-dom 입력

// // BrowserRouter 대신 createBrowserRouter 바꿔주면
// // 우리의 Router 를 array 형식으로 표현할 수 있게 해줌. 즉, JavaScript Object로부터

// // 🔶 첫 번재 route 만들기
// // 첫 번재 route 는 Home 페이지가 아님
// // 대신 전체 route 들의 컨테이너와 같은 것이 될 것임
// // 그래서 App.tsx 를 Root.tsx 로 바꿈

// // 1️⃣ 먼저 할 것은 path 정하기
// // 만약 유저가 path: '/', 이 URL로 이동한다면
// // 또는 만약 location이 그 URL과 일치한다면 우리는 element Root 를 render 할 것임

// // 2️⃣ Home, About 화면 render 하기
// // Home, About 화면 render 하려면 path: '/',를 부모로 생각해야함
// // Home이나 About은 '자식'으로 생각하면 된다
// // '/'는 URL 그 자체, '/about' 은 일종의 '/' 의 자식인 것이다
// // 이게 우리가 about을 '/' 경로의 children 안에 넣은 이유이다

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     children: [
//       {
//         path: '',
//         element: <Home />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//     ],
//   },
// ]);

// export default router;

// // ✨ http://localhost:3000/about 해도 hello 만 보임. 즉, 여전히 '/' 이것과 매치 됨.
// // 여전히 Root 를 render 하고 있음
// // 왜냐하면 아직도 '/' 안에 있고 그에 about 을 더해주고 있는 셈

// // 그래서 무엇을 해야 하냐면 react-router-dom 에게 Root 의 자식을 render 하길 원한다라고 알려줘야 함 => Root 폴더로 가서
// // Root의 자식을 render 하길 원한다면?

// // Root 안으로 가서 <Outlet /> 이라는 컴포넌트 적어준다
// // 이렇게 하면 예를 들어, /about 페이지로 가면 무슨 일이 일어나냐면
// // react router가 이 Root를 보고 Root를 render하고
// // 네가 /about으로 가려고 하는 상황이기 때문에
// // react router는 Oulet이라는을 About으로 대체하려고 한다

// // 📌 다시 한번 설명!
// // 네가 /about으로 가고자 하면, 넌 path: '/', 이 URL로 매치가 됨
// // 그러면 react router는 Root를 Render 하게 됨
// // 그런데 Root한테 자식이 있기 때문에
// // 우리는 Oulet이라는 컴포넌트를 사용함
// // react router는 이 Oulet 컴포넌트를 통해서 URL을 보게 되는데
// // 예를 들면, /about 이라면, Root를 render하고 About도 render하게 됨
// // 여기서 뭘하냐면, Oulet 을 네가 render 하고자 하는 route로 바꿔서 render 한 것
// // 그것이 자식 route이다

// //////////////////////////////////////////////
// // ✅ 4-3. errorElement

// // 라우터 버전 6는 route 들이 errorElement 를 가진다
// // 이것은 우리의 컴포넌트에 에러가 발생해서 충돌하거나
// // 컴포넌트의 위치를 찾지 못할 때 쓰는 것
// // 에러 컴포넌트를 쓰는 이유는 다른 컴포넌트들을 또 다른 컴포넌트에서
// // 발생하는 문제로부터 보호해주기 때문

// // Root element path 에 에러를 추가할 수 있다
// // 이것은 아무 자식도 발견되지 않았을 때 나타남 ex) http://localhost:3000/dfkj
// // 또한 컴포넌트가 충돌할 때도 작동함

// import { createBrowserRouter } from 'react-router-dom';
// import About from './screens/About';
// import Home from './screens/Home';
// import Root from './Root';
// import NotFound from './screens/NotFound';
// import ErrorComponent from './components/ErrorComponent';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     children: [
//       {
//         path: '',
//         element: <Home />,
//         errorElement: <ErrorComponent />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//     ],
//     errorElement: <NotFound />,
//   },
// ]);

// export default router;

// // 😥 ErrorElement가 없다면 Home elelment가 충돌했을 때
// // Unhandled Thrown Error! 화면에 나오면서 앱이 죽어버림
// // 이건 우리가 development 모드라서 보이는 에러이고
// // development 모드가 아니라면 그냥 빈 화면이 보일 것임
// // Home이든 About이든 볼 수 없음

// // 📍 이 ErrorComponent 가 멋진 이유는
// // 다른 컴포넌트들을 또 다른 컴포넌트에서 발행하는 문제로부터 보호해준다
// // 예를 들어 Home 이 충돌하는 것이 끝나면
// // 문제가 다른 곳으로 퍼져나가지 않도록 해서, About 페이지 보는 것을 막지 않음
// // 👍 이 errorElement 를 모든 route 들에 다 적용할 수 있다
// // 이 ErrorElement 는 버전 5 에서는 없었음

// ////////////////////////////////////////////////
// // ✅ 4-5. useParams
// // 유저 목록 가져와서 자세한 정보 페이지 연결

// // 이 화면을 우리의 Router에 추가
// // '/' 의 새로운 자식 만듦
// // path: 'users/:userId',
// // react router 에게 이 URL 이 동적 파라미터를 가질 수 있다는 것을 알려줌
// // URL 이 파라미터를 가진다는 것

// import { createBrowserRouter } from 'react-router-dom';
// import About from './screens/About';
// import Home from './screens/Home';
// import Root from './Root';
// import NotFound from './screens/NotFound';
// import ErrorComponent from './components/ErrorComponent';
// import User from './screens/users/User';

// // react-router한테 이 URL이 dynamic parameter를 가질 수 있다는 것을 알려줌
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     children: [
//       {
//         path: '',
//         element: <Home />,
//         errorElement: <ErrorComponent />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//       /*
//         // 😎 지금 우리는
//         // 여기서는 만약에 유저가 /users만 있는 경로로 간다면
//         // Not Found를 보여주고 싶음
//         // 다시 말해 여기에 유저를 위한 것은 없다 그냥 Not Found 페이지
//         // 우리의 경우 유저들이 /users로 갈 수 없고
//         // /users/2 같은 곳만 갈 수 있도록 연결 함
//       */
//       {
//         path: 'users/:userId',
//         element: <User />,
//       },
//       /* {
//         // 🤔 그런데 왜 이런식으로 하지 않았는지 ?
//         // 만약에 유저가 /users로 가서 뭔가를 볼 수 있다면 이런식으로 해야 함
//         // 왜냐하면 여기서 너는 element 하나를 render 할 수 있다
//         // 지금 /users 가면 아무것도 안나옴
//         // 만약에 유저가 /users 이쪽에 오면 뭔가 보여주고 싶다면
//         // 이 방법으로 해야함
//         // 그러면 /users에서 element를 redner 할 수 있다
//         // 그리고 /users/:userId도 render 할 수 있다
//         path: 'users',
//         element
//         children: [
//           {
//             path: ':userId',
//             element: <User />,
//           },
//         ],
//       }, */
//     ],
//     errorElement: <NotFound />,
//   },
// ]);

// export default router;

// // 🔶 /users/:userId 로 가면 세 가지가 매칭 됨
// // path: '/', 에 매칭되니 Root 를 render 함
// // 이것은 Outlet 을 render 함
// // 그 다음 그건 path: 'users/:userId', 를 찾게 되고, 그러면 userId 있다는 것을 포착함
// // http://localhost:3000/users/1 이렇게 매칭 됨
// // 그리고 유저를 render 하게 됨

////////////////////////////////////////////////
// ✅ 4-6. Outlet

// 모든 Outlet 컴포넌트는 만약 있다면 Route 의 자식들을 render 함
// react router 의 역할은 Root 를 render 하는건데
// Root 한테 자식이 있으니 Outlet 을 Root 의 자식으로 대체 시킴
// 예를 들면, Root 파일에 <Outlet /> 이 <About /> 바뀌어서 들어간다

import { createBrowserRouter } from 'react-router-dom';
import About from './screens/About';
import Home from './screens/Home';
import Root from './Root';
import NotFound from './screens/NotFound';
import ErrorComponent from './components/ErrorComponent';
import User from './screens/users/User';
import Followers from './screens/users/Followers';

// 🔶 Followers 을 user 스크린의 자식으로 추가
// 이러면 Outlet 이 활성화 된다는 뜻이다
// 이제 user 에 가서 Link 하나를 추가

// path: 'followers', 여기 있다는 것은 User 자식 안에 있다는 것이고
// User를 render하면서 followers도 User 화면 안의 Outlet에 넣을 것임
// 이렇게 하면 라우터가 두 개가 필요 없고 그냥 자식을 정의하면 됨
// 그리고 Outlet을 render하면 됨
// 그리고 위치도 컨드롤 할 수 있다

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'users/:userId',
        element: <User />,
        children: [
          {
            path: 'followers',
            element: <Followers />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
