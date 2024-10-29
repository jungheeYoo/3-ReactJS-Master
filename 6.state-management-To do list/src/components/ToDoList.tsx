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

// //////////////////////////////////////////////////
// // ✅ 6-7. Form Validation

// // import { useState } from 'react';
// import { useForm } from 'react-hook-form';

// // 🔶  onSubmit() 대체
// // 이전에는 직접 form 의 submit 이벤트를 가져다가, 직접 preventDefault 를 해주고, 직접 데이터를 받음

// // 🔶 handleSubmit()
// // handleSubmit() 함수를 받아오는 것이 다임
// // handleSubmit 이 preventDefault 와 validation 을 담당하게 됨

// // 🔹 쓰는 방법
// // onSubmit 이벤트 안에 handleSubmit 을 호출하고,
// // handleSubmit 은 2개의 인자를 받음
// // 하나는 데이터가 유효할 때 호출되는 함수 *필수
// // 하나는 데이터가 유효하지 않을 때 호출되는 함수
// // onlnvalid 는 필수 아님, onValid 필수
// // onValid 함수를 인자로 데이터를 받음
// // handleSubmit 은 먼자 함수를 호출해야함, 그리고 나서 유저가 실제로 submit을 하면 handleSubmit 은 해야 하는 모든 validation이나, 다른 일들을 끝마친 후에 우리의 데이터가 유요할 때만 함수를 호출 할 것임

// // 🔶 onValid()
// // 데이터가 유효하지 않을 수도 있기 때문에, 만약 데이터가 유효하지 않다면, useForm 이 에러를 보여줌
// // 이 함수는 react-hook-form 이 모든 validation 을 다 마쳤을 때만 호출 됨

// // 🔶 Form validation 방법 1
// // required 은 항목에 true 적거나, 메세지 적을 수 있고
// // minLength 은 5라는 값을 적거나, 값과 메세지를 갖는 객체를 줄 수도 있다

// function ToDoList() {
//   const { register, handleSubmit, formState } = useForm();
//   const onValid = (data: any) => {
//     console.log(data);
//   };
//   console.log(formState.errors);
//   // 😊👍 type: "required", type: 'minLength', 필수 항목을 입력하지 않았다는 에러. 최소길이를 맞추지 않다는 에러. 자동으로 해주고 있음

//   return (
//     <div>
//       <form
//         style={{ display: 'flex', flexDirection: 'column' }}
//         onSubmit={handleSubmit(onValid)}
//       >
//         <input {...register('email', { required: true })} placeholder="Email" />
//         <input
//           {...register('firstName', { required: true })}
//           placeholder="First Name"
//         />
//         <input
//           {...register('lastName', { required: true })}
//           placeholder="Last Name"
//         />
//         <input
//           {...register('username', { required: true, minLength: 10 })}
//           placeholder="Username"
//         />
//         <input
//           {...register('password', { required: true, minLength: 5 })}
//           placeholder="Password"
//         />
//         <input
//           {...register('password1', {
//             required: 'Passwrod is required',
//             minLength: {
//               value: 5,
//               message: 'Passwrod is too short',
//             },
//           })}
//           placeholder="Password1"
//         />
//         <button>Add</button>
//       </form>
//     </div>
//   );
// }

// export default ToDoList;

// /////////////////////////////////////////////////////////
// // ✅ 6-8. Form Errors

// import { useForm } from 'react-hook-form';

// // 🔶 Form validation 방법 1
// // required 은 항목에 true 적거나, 메세지 적을 수 있고
// // minLength 은 5라는 값을 적거나, 값과 메세지를 갖는 객체를 줄 수도 있다

// // 🔶 Form validation 방법 2 - 정규식
// // 또는 정규식 사용 : 바로 값을 보내거나, 객체에다가 넣어서 보냄

// // 🔹 정규표현식
// // ^ 문장의 시작
// // + 하나 또는 하나이상
// // ```
// // /^[A-Za-z0-9._%+-]+@naver.com$/
// // /^[A-Za-z0-9._%+-]+@naver.com/g
// // ```
// // https://www.regexpal.com

// interface IForm {
//   email: string;
//   firstName: string;
//   lastName: string;
//   username: string;
//   password: string;
//   password1: string;
// }

// function ToDoList() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<IForm>({
//     defaultValues: {
//       email: '@naver.com',
//     }, // 미리 옵션 설정할 수 있음
//   });
//   const onValid = (data: any) => {
//     console.log(data);
//   };

//   return (
//     <div>
//       <form
//         style={{ display: 'flex', flexDirection: 'column' }}
//         onSubmit={handleSubmit(onValid)}
//       >
//         <input
//           {...register('email', {
//             required: 'Email is required',
//             pattern: {
//               value: /^[A-Za-z0-9._%+-]+@naver.com$/,
//               message: 'Only naver.com emails allowed',
//             },
//           })}
//           placeholder="Email"
//         />
//         {/* ✨ 사용자 화면에 에러 보여주기 */}
//         {/* message 는 항상 똑같은 모양 내용은 바뀌겠지만 모양은 똑같다,
//         그래서 검사항목에 메세지를 넣었다면 타입을 체크할 필요가 없다
//         type은 항상 바뀜 minLength라던가 pattern 이라던가  */}
//         <span>{errors.email?.message as string}</span>
//         <input
//           {...register('firstName', { required: 'write here' })}
//           placeholder="First Name"
//         />
//         <span>{errors.firstName?.message as string}</span>
//         <input
//           {...register('lastName', { required: 'write here' })}
//           placeholder="Last Name"
//         />
//         <span>{errors.lastName?.message as string}</span>
//         <input
//           {...register('username', { required: 'write here', minLength: 10 })}
//           placeholder="Username"
//         />
//         <span>{errors.username?.message as string}</span>
//         <input
//           {...register('password', { required: 'write here', minLength: 5 })}
//           placeholder="Password"
//         />
//         <span>{errors.password?.message as string}</span>
//         <input
//           {...register('password1', {
//             required: 'Passwrod is required',
//             minLength: {
//               value: 5,
//               message: 'Passwrod is too short',
//             },
//           })}
//           placeholder="Password1"
//         />
//         <span>{errors.password1?.message as string}</span>
//         <button>Add</button>
//       </form>
//     </div>
//   );
// }

// export default ToDoList;

// /////////////////////////////////////////////////////////
// // ✅ 6-9. Custom Validation
// // ✅ form submit 상황을 가정해서 에러 설정해보기
// // ✅ 어떻게 에러를 발생시킬 수 있는지?
// // 커스텀 유효성 검사

// import { useForm } from 'react-hook-form';

// // 🔶 password 와 password1 이 같지 않을 경우 에러 발생시키기
// // 사용자 명이든 어떤 항목이든 내가 원하는 곳에 에러를 발생시킬 수 있다
// // 추가적인 에러가 필요하다면 항목의 이름을 새로 지어주고 사용할 수 있다
// // 뒤에 물음표? 붙이는 것이 중요 errors와 extraError 가 존재할 때만 message 찾아봄

// // 🔶 setError
// // setError 는 발생하는 문제에 따라 추가적으로 에러를 설정할 수 있게 도와줌
// // form에서 내가 고른 input 항목에 강제로 focus 시킬 수 있다

// // 🔶 shouldFocus
// // 에러가 있는 곳으로 자동으로 focus 됨

// // 내가 원하는 어떤 규칙이던 검사할 수 있다
// // 예를 들면 내 사이트에 이름이 nico인 사용자는 가입시키지를 원하지 않는다
// // validate 옵션 씀
// // validate 는 함수를 값으로 가질 건데, 이 함수는 인자로 항목에 현재 쓰여지고 있는 값을 받음
// // validate 를 인자로 받고, true 또는 false 를 리턴

// interface IForm {
//   email: string;
//   firstName: string;
//   lastName: string;
//   username: string;
//   password: string;
//   password1: string;
//   extraError?: string;
// }

// function ToDoList() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setError,
//   } = useForm<IForm>({
//     defaultValues: {
//       email: '@naver.com',
//     },
//   });
//   const onValid = (data: IForm) => {
//     if (data.password !== data.password1) {
//       // 🔶 직접 에러 설정하는 방법
//       setError(
//         'password1',
//         { message: 'Password are not the same' },
//         { shouldFocus: true } // 에러가 있는 곳으로 자동으로 focus 됨
//       );
//     }
//     // 특정한 항목에 해당되는 에러가 아니라, 전체 form에 해당되는 에러
//     // setError('extraError', { message: 'Server offline.' });
//   };

//   return (
//     <div>
//       <form
//         style={{ display: 'flex', flexDirection: 'column' }}
//         onSubmit={handleSubmit(onValid)}
//       >
//         <input
//           {...register('email', {
//             required: 'Email is required',
//             pattern: {
//               value: /^[A-Za-z0-9._%+-]+@naver.com$/,
//               message: 'Only naver.com emails allowed',
//             },
//           })}
//           placeholder="Email"
//         />
//         <span>{errors?.email?.message as string}</span>
//         <input
//           {...register('firstName', {
//             required: 'write here',
//             /* value 가 nico 를 포함하지 않는다면, true를 반환 */
//             validate: {
//               noNico: (value) =>
//                 value.includes('nico') ? 'no nicos allowed' : true,
//               noNick: (value) =>
//                 value.includes('nick') ? 'no nick allowed' : true,
//             },
//           })}
//           placeholder="First Name"
//         />
//         <span>{errors?.firstName?.message as string}</span>
//         <input
//           {...register('lastName', { required: 'write here' })}
//           placeholder="Last Name"
//         />
//         <span>{errors?.lastName?.message as string}</span>
//         <input
//           {...register('username', { required: 'write here', minLength: 10 })}
//           placeholder="Username"
//         />
//         <span>{errors?.username?.message as string}</span>
//         <input
//           {...register('password', { required: 'write here', minLength: 5 })}
//           placeholder="Password"
//         />
//         <span>{errors?.password?.message as string}</span>
//         <input
//           {...register('password1', {
//             required: 'Passwrod is required',
//             minLength: {
//               value: 5,
//               message: 'Passwrod is too short',
//             },
//           })}
//           placeholder="Password1"
//         />
//         <span>{errors?.password1?.message as string}</span>
//         <button>Add</button>
//         <span>{errors?.extraError?.message as string}</span>
//       </form>
//     </div>
//   );
// }

// export default ToDoList;

///////////////////////////////////////////////////////////
// ✅ 6-10. Recap

// 🔶 react-hook-form
// 모든 것은 register 함수에서 일어난다
// register 함수는 useForm hook 을 사용해서 가져올 수 있고,
// 해야 할 것은 이 함수를 내가 가진 모든 input에서 호출해주는 것
// 그리고 react-hook-form 이 알 수 있도록, input의 이름을 줘야 함
// 그래야 react-hook-form 이 data 객체에 input 값을 주고, 에러를 확인할 수 있다

import { useForm } from 'react-hook-form';

interface IForm {
  toDo: string;
}

function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    // data 가 유효하다면, setValue 값을 다시 설정
    // 데이터 잘 입력했다면 값을 비워주기 위해 사용
    // 이 함수들은 다 useForm에서 나옴
    console.log('add to do', data.toDo);
    setValue('toDo', '');
  };
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register('toDo', {
            required: 'Please write a To Do',
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
      <ul></ul>
    </div>
  );
}

export default ToDoList;

// handleSubmit 을 useForm 에서 가져온 다음에 이것을 호출해야함
// 그러면 이 함수가 data를 검사하고,
// data가 유효하다면 내가 만든 함수(handleValid)를 호출함
