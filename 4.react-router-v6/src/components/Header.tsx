// // ✅ 4-1. BrowserRouter
// // 초기 셋팅
// // BrowserRouter (v5버전) vs createBrowserRouter

// // 이 Header 는 우리가 어떤 페이지로 가도 불러올 수 있게 될 것임
// // Home 페이지나 About 페이지나 Header가 페이지 맨 위에 있을 것임
// // Link 는 react-router-dom에서 옴

// // 📍 이 Header를 Router 파일에 BrowserRouter안에 넣을 것임
// // 📍 왜냐하면 Header는 Link를 사용하고 있음
// // 📍 Link를 사용하려면 Link를 Router 안에 넣어야 해
// // 📍 Router 밖에서는 Link를 render 할 수 없음

// import { Link } from 'react-router-dom';

// function Header() {
//   return (
//     <header>
//       <ul>
//         <li>
//           <Link to={'/'}>Home</Link>
//         </li>
//         <li>
//           <Link to={'/about'}>About</Link>
//         </li>
//       </ul>
//     </header>
//   );
// }

// export default Header;

//////////////////////////////////////////////
// ✅ 4-4. useNavigate

// useNavigate 는 유저를 어딘가로 보내는 기능이 있음
// 유저를 이동시키고 위치를 바꿔줌
// 다른 페이지로 이동시키는 방법은 두 가지

// 1️⃣ Link 이용
// Link 는 유저가 클릭을 해야 함

// 2️⃣ useNavigate
// 만약에 네가 유저를 로그인 시키거나 홈페이지로 이동시키고 싶다면
// 프로그램적으로 유저를 페이지에서 없애버리고 싶다면, 네 코드를 사용해 클릭을 기다리지 않고
// 이럴 때 useNavigate 사용

// 🤔 어떨 때 쓸까?
// 유저가 로그인해서 redirect 시키고 싶거나 (다른 페이지로 가게)
// 유저가 어떤 페이지로 갔는데 접근 권한이 없거나 했을 때

import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate(); // hook
  const onAboutClick = () => {
    navigate('/about');
  };
  return (
    <header>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <button onClick={onAboutClick}>About</button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
