// // ✅ 4-6. Outlet
// function Followers() {
//   return <h1>Followers</h1>;
// }
// export default Followers;

////////////////////////////////////////////////
// ✅ 4-7. useOuletContext

// Followers 화면에 데이터를 넘기고 싶다
// 만약 이 User 화면에서 Followers 화면과 공유하고 싶은 중요한 데이터가 있다면?

// 1️⃣ 첫 번째 방법은
// useParams 쓰는 방법
// import { useParams } from 'react-router-dom';

// function Followers() {
//   const { userId } = useParams();
//   console.log(userId);
//   return <h1>Followers</h1>;
// }
// export default Followers;

// 2️⃣ 두 번째 방법은
// URL을 참조하는 대신
// 자식 route들과 소통해 보는 방법도 있다 => User 파일로 이동

import { useOutletContext } from 'react-router-dom';

interface IFollowersContext {
  nameOfMyUser: string;
}

function Followers() {
  const { nameOfMyUser } = useOutletContext<IFollowersContext>();
  return <h1>Here are {nameOfMyUser}의 followers</h1>;
}
export default Followers;
