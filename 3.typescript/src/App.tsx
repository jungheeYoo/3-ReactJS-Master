// 3-5. Forms
// ✅ event들에 타입을 추가하는 방법

// FormEvent 이런건 공식 문서 또는 구글링으로 필요할 때 찾아서 씀
// FormEvent React.FormEvent<T = Element>
// FormEvent 내에서 하나의 Element를 보낼 수 있다
// 이 상황에서 우리는 어떤 종류의 Element가 이 onChange 이벤트를 발생시킬지를 특정할 수 있다
// 타입스크립트는 이 onChange 함수가 InputElement에 의해서 실행될 것을 아는 것

// 셋팅
// input의 value를 state와 연결. useState 사용.
// onChange 함수는 input의 onChange event에 함수 onChange 연결
// 이 onChange 함수에서 원하는 것은, evnet 에 접근하는 것

import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    // console.log(event.currentTarget.value);
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('hello', value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
