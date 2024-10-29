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

// //////////////////////////////////////////////////
// // ✅ 6-6. Forms
// // ✅ react-hook-form

// // useForm 을 사용하기 위해서는 useForm 이라는 hook을 import 해야함
// // import { useState } from 'react';
// import { useForm } from 'react-hook-form';

// // function ToDoList() {
// //   const [toDo, setToDo] = useState('');
// //   const [toDoError, setToDoError] = useState('');
// //   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
// //     const {
// //       currentTarget: { value },
// //     } = event;
// //     setToDoError('');
// //     setToDo(value);
// //   };
// //   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
// //     event.preventDefault();
// //     if (toDo.length < 10) {
// //       return setToDoError('To do should be longer');
// //     }
// //     console.log('submit');
// //   };
// //   return (
// //     <div>
// //       <form onSubmit={onSubmit}>
// //         <input onChange={onChange} value={toDo} placeholder="Write a to do" />
// //         <button>Add</button>
// //         {toDoError !== '' ? toDoError : null}
// //       </form>
// //     </div>
// //   );
// // }

// // 🔶 useForm hook 사용
// // register 함수
// // 이것을 사용하면 onChange 이벤트 핸들러가 필요 없다
// // 관련된 props이나 setState도 필요 없다
// // useForm을 사용한 코드가 onChange 이벤트, value, useState 를 모두 대체함

// // useForm 함수는 많은 것을 제공하는데
// // watch 는 네가 form의 입력 값들의 변화를 관찰할 수 있게 해주는 함수

// function ToDoList() {
//   const { register, watch } = useForm();
//   console.log(watch());

//   return (
//     <div>
//       <form>
//         <input {...register('email')} placeholder="Email" />
//         <input {...register('firstName')} placeholder="First Name" />
//         <input {...register('lastName')} placeholder="Last Name" />
//         <input {...register('username')} placeholder="Username" />
//         <input {...register('password')} placeholder="Password" />
//         <input {...register('password1')} placeholder="Password1" />
//         <button>Add</button>
//       </form>
//     </div>
//   );
// }

// export default ToDoList;

//////////////////////////////////////////////////
// ✅ 6-7. Form Validation

// import { useState } from 'react';
import { useForm } from 'react-hook-form';

// 🔶  onSubmit() 대체
// 이전에는 직접 form 의 submit 이벤트를 가져다가, 직접 preventDefault 를 해주고, 직접 데이터를 받음

// 🔶 handleSubmit()
// handleSubmit() 함수를 받아오는 것이 다임
// handleSubmit 이 preventDefault 와 validation 을 담당하게 됨

// 🔹 쓰는 방법
// onSubmit 이벤트 안에 handleSubmit 을 호출하고,
// handleSubmit 은 2개의 인자를 받음
// 하나는 데이터가 유효할 때 호출되는 함수 *필수
// 하나는 데이터가 유효하지 않을 때 호출되는 함수
// onlnvalid 는 필수 아님, onValid 필수
// onValid 함수를 인자로 데이터를 받음
// handleSubmit 은 먼자 함수를 호출해야함, 그리고 나서 유저가 실제로 submit을 하면 handleSubmit 은 해야 하는 모든 validation이나, 다른 일들을 끝마친 후에 우리의 데이터가 유요할 때만 함수를 호출 할 것임

// 🔶 onValid()
// 데이터가 유효하지 않을 수도 있기 때문에, 만약 데이터가 유효하지 않다면, useForm 이 에러를 보여줌
// 이 함수는 react-hook-form 이 모든 validation 을 다 마쳤을 때만 호출 됨

function ToDoList() {
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  // 😊👍 type: "required", type: 'minLength', 필수 항목을 입력하지 않았다는 에러. 최소길이를 맞추지 않다는 에러. 자동으로 해주고 있음

  return (
    <div>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit(onValid)}
      >
        <input {...register('email', { required: true })} placeholder="Email" />
        <input
          {...register('firstName', { required: true })}
          placeholder="First Name"
        />
        <input
          {...register('lastName', { required: true })}
          placeholder="Last Name"
        />
        <input
          {...register('username', { required: true, minLength: 10 })}
          placeholder="Username"
        />
        <input
          {...register('password', { required: true, minLength: 5 })}
          placeholder="Password"
        />
        <input
          {...register('password1', {
            required: 'Passwrod is required',
            minLength: {
              value: 5,
              message: 'Passwrod is too short',
            },
          })}
          placeholder="Password1"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
