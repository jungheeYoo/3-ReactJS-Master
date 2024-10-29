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

// local state 는 모든 곳에 쓰이지는 않아야 한다
// 단 하나의 component 가 있고, prop 을 바로 아래에 전달해준다면
// 이것을 위해서 local state 가 필요하진 않다
// 두 단계 이상 내려갈 때에만 필요하다
