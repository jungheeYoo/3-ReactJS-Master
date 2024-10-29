// //////////////////////////////////////////////////
// // ✅ 6-5. To Do Setup
// // ✅ From 만들기
// // input 을 state 로 관리하고, onChange 이벤트 업데이트

// import React, { useState } from 'react';

// function ToDoList() {
//   const [toDo, setToDo] = useState('');
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(toDo);
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//         <button>Add</button>
//       </form>
//     </div>
//   );
// }

// export default ToDoList;

//////////////////////////////////////////////////
// ✅ 6-6. Forms
// ✅ react-hook-form

// useForm 을 사용하기 위해서는 useForm 이라는 hook을 import 해야함
// import { useState } from 'react';
import { useForm } from 'react-hook-form';

// function ToDoList() {
//   const [toDo, setToDo] = useState('');
//   const [toDoError, setToDoError] = useState('');
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDoError('');
//     setToDo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (toDo.length < 10) {
//       return setToDoError('To do should be longer');
//     }
//     console.log('submit');
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//         <button>Add</button>
//         {toDoError !== '' ? toDoError : null}
//       </form>
//     </div>
//   );
// }

// 🔶 useForm hook 사용
// register 함수
// 이것을 사용하면 onChange 이벤트 핸들러가 필요 없다
// 관련된 props이나 setState도 필요 없다
// useForm을 사용한 코드가 onChange 이벤트, value, useState 를 모두 대체함

// useForm 함수는 많은 것을 제공하는데
// watch 는 네가 form의 입력 값들의 변화를 관찰할 수 있게 해주는 함수

function ToDoList() {
  const { register, watch } = useForm();
  console.log(watch());

  return (
    <div>
      <form>
        <input {...register('email')} placeholder="Email" />
        <input {...register('firstName')} placeholder="First Name" />
        <input {...register('lastName')} placeholder="Last Name" />
        <input {...register('username')} placeholder="Username" />
        <input {...register('password')} placeholder="Password" />
        <input {...register('password1')} placeholder="Password1" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
