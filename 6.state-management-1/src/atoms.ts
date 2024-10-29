import { atom } from 'recoil';

// atom 은 두 가지를 요구함
// 첫 번째는 key, 이름이 유일해야 함
// 두 번째는 기본 값이 필요함

export const isDarkAtom = atom({
  key: 'isDark',
  default: false,
});
