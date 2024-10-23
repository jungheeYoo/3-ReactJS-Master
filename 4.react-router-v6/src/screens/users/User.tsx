// ////////////////////////////////////////////////
// // ✅ 4-5. useParams
// // 유저 데이터베이스 만들기
// // 유저의 자세한 정보가 나올 새로운 스크린 만들기

// // 이 화면을 우리의 Router에 추가

// import { useParams } from 'react-router-dom';
// import { users } from '../../db';

// function User() {
//   const params = useParams();
//   console.log(params);
//   /* 콘솔 로그
//   Object
//     userId: "1"
//   [[Prototype]]: Object
//   */
//   // 파라미터에서 id 꺼내기
//   const { userId } = useParams();
//   return (
//     <h1>
//       User with id {userId} is named: {users[Number(userId) - 1].name}
//     </h1>
//   );
// }
// export default User;

// // URL 에서 userId 값이 뭔지 알아내야 함
// // 유저 화면으로 와서 useParams 작성
// // useParams 안에는 뭐든지 넣어도 됨. 여기서는 userId 필요함
// // 이렇게 하면 유저 화면에서 URL 정보를 얻을 수 있음
// // 라우터 페이지에서 :userId' 콜론(:) 이 들어가야 함
// // 파라미터에서 id 꺼내기

// ////////////////////////////////////////////////
// // ✅ 4-6. Outlet

// // 🔶 또 다른 <Outlet /> 을 render 함
// // 규칙은?
// // 이 Route, 즉, 이 screens 에 자식이 있다면
// // 그 경우가 바로 Outlet 이 사용되는 경우이다
// // Outlet이 이 스크린의 자식을 render하게 되는 것

// // ✨ Outlet 은 위치를 체크 해야하거나,
// // 새로운 router 를 만들어야 하거나 이런것들을 하지 않아도 됨
// // 오직 Outlet 만 render 하면 된다

// // 즉, User 를 render 하면서 followers 도 User 화면 안의 Outlet 에 넣을 것임
// // 라우터가 두 개나 필요하지 않고, 그냥 자식을 정의하면 된다

// import { Link, Outlet, useParams } from 'react-router-dom';
// import { users } from '../../db';

// function User() {
//   const { userId } = useParams();
//   return (
//     <div>
//       {/* 위치 컨트롤 가능 */}
//       {/* <Outlet /> */}
//       <h1>
//         User with id {userId} is named: {users[Number(userId) - 1].name}
//       </h1>
//       <hr />
//       {/*
//       // ❌ 여기서는 /followers 라고 하지 않음
//       // 만약 /followers 를 하면 말 그대로 /followers 로 데리고 갈 것임
//       // http://localhost:3000/Followers 로 데려감
//       // 이것을 원하는 것이 아니다
//       // '/'를 쓰면 절대 경로 : root 다음 바로부터 시작하는 경로를 말함
//       // 그래서 여기서는 안씀. 상대 경로 URL로 씀
//       // '/' 빼고 쓰면, 지금 네가 현재 있는 그 경로 다음에 경로가 추가 됨
//       // http://localhost:3000/users/2/followers
//       // 이렇게 하면 자식을 바로 이 Route <User /> 안에서 render 할 수 있다
//       // 그리고 이 Route 는 Root 컴포넌트의 자식이다
//       */}
//       <Link to="followers">See followers</Link>
//       <Outlet />
//     </div>
//   );
// }
// export default User;

////////////////////////////////////////////////
// ✅ 4-7. useOuletContext

// Followers 화면에 데이터를 넘기고 싶다
// 만약 이 User 화면에서 Followers 화면과 공유하고 싶은 중요한 데이터가 있다면?

// 2️⃣ 두 번째 방법은
// URL을 참조하는 대신
// 자식 route들과 소통해 보는 방법도 있다

// 🔶 어떻게 하느냐?
// Outlet을 render 할 거고 context라는 것도 send 할거야
// context={} 안에는 원하는 것 무엇이든지 보낼 수 있다
// array가 될 수도, text, true, false, number, object...
// ✨ 중요!! Followers는 여기서 render 되는 것이다
// react router가 너의 route 설정을 읽고서
// Outlet을 네 URL과 매치되는 자식으로 대체시킬 것이다
// 그럼 Followers 쪽에서는 context를 어떻게 받지? => Followers 파일로 이동

import { Link, Outlet, useOutletContext, useParams } from 'react-router-dom';
import { users } from '../../db';

function User() {
  console.log(useOutletContext()); // {darkMode: true}
  // 다크모드인지 아닌지를 알게 된다
  // Root로부터 메시지를 받는다
  const { userId } = useParams();
  return (
    <div>
      <h1>
        User with id {userId} is named: {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to="followers">See followers</Link>
      <Outlet
        context={{
          nameOfMyUser: users[Number(userId) - 1].name,
        }}
      />
    </div>
  );
}
export default User;

// ❓ 그럼 왜 URL 로 이런 것을 할까?
// 예를 들어 왜 버튼을 만들지 않고 state 만 바꾼건지
// followers 를 숨김 할 수도 있고, 클릭하면 followers 가 보이도록 할 수도 있고 state 를 이용해서
// 이유는 새로고침 하면 유저는 곧바로 followers 로 가게 된다
//  http://localhost:3000/users/2/followers
// state 를 사용하면 URL 에 state 를 넣을 수 없다
// 이렇게 하면 이 state 와 싱크를 맞추기 어렵다
