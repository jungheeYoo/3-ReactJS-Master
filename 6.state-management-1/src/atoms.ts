//////////////////////////////////////////////////
// ✅ 6-2. Introduction to Recoil
// ✅ atom 설치, 기본 설정

import { atom } from 'recoil';

// 🔶 atom 은 두 가지를 요구함
// 첫 번째는 key, 이름이 유일해야 함
// 두 번째는 기본 값이 필요함

export const isDarkAtom = atom({
  key: 'isDark',
  default: false,
});

//////////////////////////////////////////////////
// ✅ 6-3.  Introduction to Recoil part Two
// ✅ atom 의 value 수정하는 방법

// ✨ useRecoilValue() : atom 의 값을 얻으려 할 때
// 이 함수의 매개변수로 atom 을 넣음. atom 을 넣으면, atom 의 값을 줌

// ✨ useSetRecoilState() :
// 매개변수로 atom 을 받고, atom 값을 변경하는 함수를 반환함.
// React 의 setState 와 같은 방식으로 작동 함

// local state 는 모든 곳에 쓰이지는 않아야 한다
// 단 하나의 component 가 있고, prop 을 바로 아래에 전달해준다면
// 이것을 위해서 local state 가 필요하진 않다
// 두 단계 이상 내려갈 때에만 필요하다
