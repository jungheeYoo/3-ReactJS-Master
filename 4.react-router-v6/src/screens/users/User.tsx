////////////////////////////////////////////////
// ✅ 4-5. useParams
// 유저 데이터베이스 만들기
// 유저의 자세한 정보가 나올 새로운 스크린 만들기

// 이 화면을 우리의 Router에 추가

import { useParams } from 'react-router-dom';
import { users } from '../../db';

function User() {
  const params = useParams();
  console.log(params);
  /* 콘솔 로그
  Object
    userId: "1"
  [[Prototype]]: Object
  */
  // 파라미터에서 id 꺼내기
  const { userId } = useParams();
  return (
    <h1>
      User with id {userId} is named: {users[Number(userId) - 1].name}
    </h1>
  );
}
export default User;

// URL 에서 userId 값이 뭔지 알아내야 함
// 유저 화면으로 와서 useParams 작성
// useParams 안에는 뭐든지 넣어도 됨. 여기서는 userId 필요함
// 이렇게 하면 유저 화면에서 URL 정보를 얻을 수 있음
// 라우터 페이지에서 :userId' 콜론(:) 이 들어가야 함
// 파라미터에서 id 꺼내기
