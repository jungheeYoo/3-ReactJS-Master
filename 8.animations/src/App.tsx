// //////////////////////////////////////////////////
// // ✅ 8-0~1. Introduction, Installation

// import styled from 'styled-components';
// import { motion } from 'framer-motion';

// const Wrapper = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Box = styled(motion.div)`
//   width: 200px;
//   height: 200px;
//   background-color: white;
//   border-radius: 15px;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;

// // ✨ div 를 animate 하길 원한다면, motion.div 이렇게 써야함
// function App() {
//   return (
//     <Wrapper>
//       <Box />
//       <div></div>
//       <motion.div></motion.div>
//     </Wrapper>
//   );
// }

// export default App;

// //////////////////////////////////////////////////
// // ✅ 8-2. Basic Animations

// import styled from 'styled-components';
// import { motion } from 'framer-motion';

// // 🔶 어떻게 스타일 컴포넌트를 애니메이트 시킬 수 있을까?
// // const Box = styled(motion.div)``

// // 🔶 Motion Prop

// // 🔹 animate={{}}
// // Motion Prop 중 가장 중요함

// // 🔹 initial={{}}
// // 원하는 상태. Element의 초기 상태를 써주면 됨

// // 🔹 transition={{type: 'spring'}}
// // 모든 애니메이션에는 spring 이 기본적으로 되어 있다

// const Wrapper = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Box = styled(motion.div)`
//   width: 200px;
//   height: 200px;
//   background-color: white;
//   border-radius: 15px;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;

// function App() {
//   return (
//     <Wrapper>
//       <Box
//         transition={{ type: 'spring', delay: 0.5 }}
//         initial={{ scale: 0 }}
//         animate={{ scale: 1, rotateZ: 360 }}
//       />
//       {/* <motion.div></motion.div> */}
//     </Wrapper>
//   );
// }

// export default App;

// //////////////////////////////////////////////
// // ✅ 8-3. Variants part One

// import styled from 'styled-components';
// import { motion } from 'framer-motion';

// // 🔶 Variants
// // 코드 정리: 여러 상태의 애니메이션을 한 객체로 관리해 코드가 깔끔해짐
// // 많은 애니메이션들을 하나로 연결시켜줌
// // **다양한 상태(예: 초기 상태, 나타나는 상태, 사라지는 상태 등)**를 정의한 다음,
// // 해당 컴포넌트가 이 상태를 따라 애니메이션되도록 하는 것이다.
// // 이를 통해 애니메이션 스테이지를 하나로 연결하며, 각각의 상태가 연결되도록 만들어 코드를 보다 직관적이고 유지 보수하기 쉽게 해준다.

// const Wrapper = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Box = styled(motion.div)`
//   width: 200px;
//   height: 200px;
//   background-color: white;
//   border-radius: 15px;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;

// // ✨ 이름은 중요하지 않음. 단지 자바스크립트의 오브젝트이다
// // 설정을 분리된 오브젝트로 옮김
// // 두 개의 stage
// const myVars = {
//   start: { scale: 0 },
//   end: { scale: 1, rotateZ: 360, transition: { type: 'spring', delay: 0.5 } },
// };

// function App() {
//   return (
//     <Wrapper>
//       <Box variants={myVars} initial="start" animate="end" />
//     </Wrapper>
//   );
// }

// export default App;

// //////////////////////////////////////////////
// // ✅ 8-4. Variants part Two

// import styled from 'styled-components';
// import { motion } from 'framer-motion';

// // 🔶 부모가 자식에게 상속
// // 컴포넌트가 자식들을 갖고 있을 때, 기본 값으로 어떤 설정도 없을 때
// // 부모 컴포넌트가 variants랑 initial의 variant 이름, animate의 variant를 갖고 있을 때
// // 기본 동작으로, Motion은 initial="start" animate="end" 이것을 복사해서 자식들에게만 자동으로 붙여 줌
// // 이것은 부모가 언제 애니메이션을 끝낼지 알 수 있게 해주고
// // 자식의 애니메이션도 마칠 수 있게 해준다
// // 자식 애니메이션까지도 컨트롤할 수 있게 해준다

// const Wrapper = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Box = styled(motion.div)`
//   width: 200px;
//   height: 200px;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   background-color: rgba(255, 255, 255, 0.2);
//   border-radius: 40px;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;

// const Circle = styled(motion.div)`
//   background-color: white;
//   height: 70px;
//   width: 70px;
//   place-self: center;
//   border-radius: 35px;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;

// const boxVariants = {
//   start: {
//     opacity: 0,
//     scale: 0.5,
//   },
//   end: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       type: 'spring',
//       duration: 0.5,
//       bounce: 0.5,
//       delayChildren: 0.5, // 🌱 자식들에게 딜레이 주는 것
//       staggerChildren: 0.15, // 🌱 자동적으로 자식들에게 0.5초.. 1초..delay 줌
//     },
//   },
// };

// // ✨ 부모와 동일한 이름을 따름.
// // 왜냐하면 기본적으로 Motion 은 자식들 각각에 initial="start" animate="end" 복사 붙여넣기 해줌
// const circleVariants = {
//   start: {
//     opacity: 0,
//     y: 10, // 🌱 이건 Motion에서만 쓸 수 있음
//   },
//   end: {
//     opacity: 1,
//     y: 0,
//   },
// };

// // ✨ 부모의 initial 값과, animate 값을 상속 받는다
// // ✨ 그래서 start, end 이름 같게 함
// function App() {
//   return (
//     <Wrapper>
//       <Box variants={boxVariants} initial="start" animate="end">
//         <Circle variants={circleVariants} />
//         <Circle variants={circleVariants} />
//         <Circle variants={circleVariants} />
//         <Circle variants={circleVariants} />
//       </Box>
//     </Wrapper>
//   );
// }

// export default App;

// //////////////////////////////////////////////
// // ✅ 8-5. Gestures part One
// // 마우스 이벤트 listening

// import styled from 'styled-components';
// import { motion } from 'framer-motion';

// const Wrapper = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Box = styled(motion.div)`
//   width: 200px;
//   height: 200px;
//   background-color: rgba(255, 255, 255, 1);
//   border-radius: 40px;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;

// const boxVariants = {
//   hover: { scale: 1.5, rotateZ: 90 },
//   click: { scale: 1, borderRadius: '100px' },
//   drag: { backgroundColor: 'rgb(46, 204, 113)', transition: { duration: 10 } },
// };

// function App() {
//   return (
//     <Wrapper>
//       <Box
//         drag
//         variants={boxVariants}
//         whileHover="hover"
//         /* ✨ 색깔은 blue 이런식으로 하면 string 으로 인식 애니메이션 동작 안 됨. rgb, rgba 숫자로 된 코드여야지만 애니메이션 작동 됨. 서서히 바뀜. */
//         whileDrag="drag"
//         whileTap="click"
//       />
//     </Wrapper>
//   );
// }

// export default App;

// //////////////////////////////////////////////
// // ✅ 8-6. Gestures part Two
// // constraint(제약) : 드래그 가능 영역에 제약 조건을 적용

// import styled from 'styled-components';
// import { motion } from 'framer-motion';
// import { useRef } from 'react';

// const Wrapper = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const BiggerBox = styled.div`
//   width: 600px;
//   height: 600px;
//   background-color: rgba(255, 255, 255, 0.4);
//   border-radius: 40px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   // overflow: hidden;
// `;

// const Box = styled(motion.div)`
//   width: 200px;
//   height: 200px;
//   background-color: rgba(255, 255, 255, 1);
//   border-radius: 40px;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;

// const boxVariants = {
//   hover: { rotateZ: 90 },
//   click: { borderRadius: '100px' },
// };

// // 🔶 dragConstraints
// // 기본적으로 어떤 Box를 만들 수 있다. 제약있는 Box. 드래킹이 허용될 수 있는 영역

// // 🔶 dragSnapToOrigin
// // 중앙으로 오게 하는 방법 두 가지
// // 원래 위치로 돌아감

// // 🔶 dragElastic
// // 당기는 힘
// // 0과 1 사이의 값이어야 함
// // 기본 값 0.5

// function App() {
//   const biggerBoxRef = useRef<HTMLDivElement>(null);
//   return (
//     <Wrapper>
//       <BiggerBox ref={biggerBoxRef}>
//         <Box
//           drag
//           /* dragConstraints={{ top: -200, bottom: 200, left: -200, right: 200 }} */
//           dragConstraints={biggerBoxRef}
//           dragSnapToOrigin
//           dragElastic={0.5}
//           variants={boxVariants}
//           whileHover="hover"
//           whileTap="click"
//         />
//       </BiggerBox>
//     </Wrapper>
//   );
// }

// export default App;

// //////////////////////////////////////////////
// // ✅ 8-7. MotionValues part One
// // ✅ 나의 애니메이션 내의 수치를 트래킹할 때 필요

// import styled from 'styled-components';
// import { motion, useMotionValue } from 'framer-motion';
// import { useEffect } from 'react';

// // 🔶 useMotionValue
// // style의 x좌표가 바뀔 때마다, 이 MotionValue 업데이트 됨
// // MotionValue가 업데이트 될 때 React Rendering Cycle(랜더링 싸이클)을 발동시키지 않음
// // 이 말은 MotionValue가 React State(상태)로 살지 않는다는 것이다. State가 아님
// // 그래서 MotionValue가 바뀌어도, 컴포넌트는 다시 랜더링 되지 않는다
// // 사실 우리는 컴포넌트 값이 바뀐다고 매번 다시 랜더링하고 싶지는 않음
// // 그래서 Motion 이 하는 일은, x값을 계속해서 추적하는데,
// // 이 값은 ReactJS 세계에서 존재하지 않는 다는 것
// // 그래서 만약 이 값이 바뀌면, 우리 컴포넌트는 다시 랜더링 되지 않는다
// // Framer Motion 세계에서, MotionValue 값들은 ReactJS 세계에서 존재하지 않는다
// // MotionValue는 네가 계속 특정한 값을 추적할 수 있도록 해줌. x나 y 뭐든.
// // 그리고 네가 특정 값을 만들 때, const x = useMotionValue(0);
// // 그리고 네가 그 값을 style에 넣을 때, <Box style={{ x }} drag="x" dragSnapToOrigin />
// // 유저가 움직일 때 자동적으로, 예를 들면 유저가 드래그할 때 x 값이 업데이트 된다
// // 그리고 이것이 onChange 를 발동시킬 것이고 내 값을 console.log 할 수 있다
// // useMotionValue 를 기본 값 0으로 사용하고
// // 원하는 곳에 style을 넣는다. style이 변경될 때 그 값도 변경 됨.

// const Wrapper = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Box = styled(motion.div)`
//   width: 200px;
//   height: 200px;
//   background-color: rgba(255, 255, 255, 1);
//   border-radius: 40px;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;

// function App() {
//   const x = useMotionValue(0);
//   // ✨ x값 보는 방법 : useEffect 사용
//   useEffect(() => {
//     x.on('change', () => console.log(x.get));
//   }, [x]);

//   return (
//     <Wrapper>
//       <Box style={{ x }} drag="x" dragSnapToOrigin />
//     </Wrapper>
//   );
// }

// export default App;

// //////////////////////////////////////////////
// // ✅ 8-8. MotionValues part Two
// // ✅ useTransform - 한 값 범위에서 다른 값 범위로 매핑

// // 🔶 useTransform
// // useTransform 은 일단 값을 하나 받음
// // 그리고 그 값의 어떤 제한 값과 원하는 출력 값을 받을 것임

// import styled from 'styled-components';
// import { motion, useMotionValue, useTransform } from 'framer-motion';
// import { useEffect } from 'react';

// const Wrapper = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Box = styled(motion.div)`
//   width: 200px;
//   height: 200px;
//   background-color: rgba(255, 255, 255, 1);
//   border-radius: 40px;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;

// // x가 -800이라면 2를 얻고
// // x가 0이라면 1를 얻고
// // x가 800이라면 0.1를 얻고
// // 하나의 값, 원하는 입력 값, 얻길 원하는 출력 값

// function App() {
//   const x = useMotionValue(0);
//   const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
//   // x값 보는 방법
//   useEffect(() => {
//     // x.on('change', () => console.log(x.get));
//     scale.on('change', () => console.log(scale.get));
//   }, [x]);

//   return (
//     <Wrapper>
//       {/* <Box style={{ x, scale: scale }} drag="x" dragSnapToOrigin /> */}
//       {/* 이름을 같게 하면 shortcut으로 하나로 줄여서 쓸 수 있다 */}
//       <Box style={{ x, scale }} drag="x" dragSnapToOrigin />
//     </Wrapper>
//   );
// }

// export default App;

// //////////////////////////////////////////////
// // ✅ 8-9. MotionValues part Three
// // 배경색 바꾸기, 스크롤 애니메이션

// import styled from 'styled-components';
// import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion';
// // import { useEffect } from 'react';

// const Wrapper = styled(motion.div)`
//   height: 200vh;
//   width: 100vw;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: linear-gradient(135deg, rgb(0 159 238), rgb(238 171 0));
// `;

// const Box = styled(motion.div)`
//   width: 200px;
//   height: 200px;
//   background-color: rgba(255, 255, 255, 1);
//   border-radius: 40px;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;

// function App() {
//   const x = useMotionValue(0);
//   const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
//   const gradient = useTransform(
//     x,
//     [-800, 0, 800],
//     [
//       'linear-gradient(135deg, rgb(166 0 238), rgb(111 238 0))',
//       'linear-gradient(135deg, rgb(0 159 238), rgb(238 171 0))',
//       'linear-gradient(135deg, rgb(238 32 32), rgb(0 235 220))',
//     ]
//   );
//   const { scrollYProgress } = useScroll();
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
//   // useEffect(() => {
//   //   scrollY.on('change', () => {
//   //     console.log(scrollY.get(), scrollYProgress.get());
//   //   });
//   // }, [scrollY, scrollYProgress]);

//   return (
//     <Wrapper style={{ background: gradient }}>
//       <Box style={{ x, rotateZ, scale: scale }} drag="x" dragSnapToOrigin />
//     </Wrapper>
//   );
// }

// export default App;

// //////////////////////////////////////////////
// // ✅ 8-10. SVG Animation

// // 🔶 pathLength Line drawing 애니메이션
// // 🔶 fill 색상 채우기
// // 🔶 특정 property 의 animation duration 을 단독으로 변경하는 방법

// import styled from 'styled-components';
// import { motion } from 'framer-motion';

// const Wrapper = styled(motion.div)`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Svg = styled.svg`
//   width: 300px;
//   height: 300px;
//   path {
//     stroke: white;
//     stroke-width: 2;
//   }
// `;

// const svg = {
//   start: { pathLength: 0, fill: 'rgba(255, 255, 255, 0)' },
//   end: {
//     fill: 'rgba(255, 255, 255, 1)',
//     pathLength: 1,
//   },
//   // ✨ transition: { duration: 5 } : pathLength, fill 다 똑같은 duration을 가지게 됨
// };

// function App() {
//   return (
//     <Wrapper>
//       <Svg
//         focusable="false"
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 448 512"
//       >
//         <motion.path
//           variants={svg}
//           initial="start"
//           animate="end"
//           transition={{
//             // 🔶 특정 property 의 animation duration 을 단독으로 변경하는 방법
//             // ✨ 모든 속성에 적용 됨
//             // 모든 transition 의 default duration 을 5
//             default: { duration: 5 },
//             // ✨ fill만 적용
//             // fill transition 의 duration 은 2, delay 는 5
//             fill: { duration: 1, delay: 2.5 },
//           }}
//           d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z"
//         ></motion.path>
//       </Svg>
//     </Wrapper>
//   );
// }

// export default App;

// ////////////////////////////////////////////////
// // ✅ 8-11. AnimatePresence

// import styled from 'styled-components';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useState } from 'react';

// // ✅ click 했을 때 보이고 사라지기 animate로 만들기

// // 🔶 AnimatePresence
// // AnimatePresence 는 component 인데
// // React js App에서 사라지는 component 를 animate함

// // AnimatePresence 는 항상 visible 상태여야한다
// // AnimatePresence는 밖에 있어야함. 안에 있으면 안 됨
// // AnimatePresence 내부에는 condition(조건문)이 있어야 한다
// // AnimatePresence 는 무엇을 확인하냐면
// // 안쪽에 나타나거나 사라지는 것이 있다면 그것을 animate할 수 있도록 해줌

// const Wrapper = styled(motion.div)`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Box = styled(motion.div)`
//   width: 400px;
//   height: 200px;
//   background-color: rgba(255, 255, 255, 1);
//   border-radius: 40px;
//   position: absolute;
//   top: 100px;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;

// const boxVariants = {
//   initial: {
//     opacity: 0,
//     scale: 0,
//   },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     rotateZ: 360,
//   },
//   leaving: {
//     opacity: 0,
//     scale: 0,
//     y: 50,
//   },
// };

// function App() {
//   const [showing, setShowing] = useState(false);
//   const toggleShowing = () => setShowing((prev) => !prev);
//   return (
//     <Wrapper>
//       <button onClick={toggleShowing}>Click</button>
//       <AnimatePresence>
//         {showing ? (
//           <Box
//             variants={boxVariants}
//             initial="initial"
//             animate="visible"
//             exit="leaving"
//             // ✨ exit state :  여기서 style 을 설정할 수 있는데, 이 element 가 사라질 때 어떤 animation 을 발생시킬 지 정하는 것
//           />
//         ) : null}
//       </AnimatePresence>
//     </Wrapper>
//   );
// }

// export default App;

//////////////////////////////////////////////
// ✅ 8-12. Slider part One
// ✅ AnimatePresence 슬라이더 만들기 1

import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const box = {
  invisible: {
    x: 500,
    opacity: 0,
    scale: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    x: -500,
    opacity: 0,
    scale: 0,
    transition: { duration: 1 },
  },
};

function App() {
  // 🔶 한 번에 하나씩 보여주기
  const [visible, setVisible] = useState(1);
  const nextPlease = () => setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  const prevPlease = () => setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  return (
    // 🔷 각각의 박스 만듦
    // 이 list 를 render 한다면 i 가 visible 과 같은지 확인할거고 Box를 보여줄 것임
    // 1,2,3.. 같은 배열의 숫자가 visible state와 같을때만 보여줌
    <Wrapper>
      <AnimatePresence>
        {/* 만약 i 와 visible 같으면 Box 를 보여줄거고 아니면 보여주지 않음 */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
          i === visible ? (
            <Box
              variants={box}
              initial="invisible"
              animate="visible"
              exit="exit"
              key={i}
            >
              {i}
            </Box>
          ) : null
        )}
      </AnimatePresence>
      <button onClick={nextPlease}>next</button>
      <button onClick={prevPlease}>prev</button>
    </Wrapper>
  );
}

export default App;
