// // ✅ 4-1. BrowserRouter
// // 초기 셋팅
// // BrowserRouter (v5버전) vs createBrowserRouter

// function Home() {
//   return <h1>Home</h1>;
// }
// export default Home;

// //////////////////////////////////////////////
// // ✅ 4-3. errorElement

// // 우리의 컴포넌트에 에러가 발생해서 충돌하거나
// // 컴포넌트의 위치를 찾지 못할 때 쓰는 것
// // 일부러 컴포넌트가 충돌하도록 만듦

// // 에러 : users는 비어있는 array인데 첫 번째 아이템 불러와서 name에 접근

// function Home() {
//   // const users: any = [];
//   // return <h1>{users[0].name}Home</h1>;
//   return <h1>Home</h1>;
// }
// export default Home;

////////////////////////////////////////////////
// ✅ 4-5. useParams
// 유저 목록 가져와서 자세한 정보 페이지 연결

import { Link } from 'react-router-dom';
import { users } from '../db';

// 🔶 유저 목록 가져오기
// ul 을 render 하고 db에서 users를 가져올것임
// map으로 각각의 user에 대해서 li 아이템을 생성해달라고 함

// 🔶  유저 디테일 보기
// 이제 이 유저에 대한 정보를 더 보게 하기 위해서 Link를 만듦
// 이 Link 에는 어떤 강의 코스로 이동할 지, 어떤 페이지로 이동할 지 그런 것들을 적으면 됨
// 실제로 URL의 dynamic parameter로 유저를 보낼 수 있다
function Home() {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Home;

// 이렇게 이동함
// http://localhost:3000/users/1

////////////////////////////////////////////////
// ✅ 4-8. Extras, useSearchParams

// 이 훅은 너의 search 파라미터를 수정하게 도와줌
// 또는 네 URL 에서 search 파라미터를 읽어내는 것을 도와줌
// 검색하거나, 필터하거나, pagination 하고 싶을 때 그런 정보들을 URL 에 넣음
// 그것들을 search 파라미터라고 함

// useSearchParams() 하면 array 를 하나 제공
// array 의 첫 번째 아이템은 search 파라미터를 읽기 위한 것
// 다른 것은 search 파라미터를 set 하기 위한 함수, 수정하는 것

// import { Link, useSearchParams } from 'react-router-dom';
// import { users } from '../db';

// function Home() {
//   const [readSearchParms, setSearchParams] = useSearchParams();
//   // console.log(readSearchParms.get('geo'));
//   setTimeout(() => {
//     setSearchParams({
//       day: 'today',
//       tomorrow: '123',
//     });
//   }, 3000);
//   return (
//     <div>
//       <h1>Users</h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             <Link to={`/users/${user.id}`}>{user.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default Home;
