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

//////////////////////////////////////////////
// ✅ 8-6. Gestures part Two
// constraint(제약) : 드래그 가능 영역에 제약 조건을 적용

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  // overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { rotateZ: 90 },
  click: { borderRadius: '100px' },
};

// 🔶 dragConstraints
// 기본적으로 어떤 Box를 만들 수 있다. 제약있는 Box. 드래킹이 허용될 수 있는 영역

// 🔶 dragSnapToOrigin
// 중앙으로 오게 하는 방법 두 가지
// 원래 위치로 돌아감

// 🔶 dragElastic
// 당기는 힘
// 0과 1 사이의 값이어야 함
// 기본 값 0.5

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          /* dragConstraints={{ top: -200, bottom: 200, left: -200, right: 200 }} */
          dragConstraints={biggerBoxRef}
          dragSnapToOrigin
          dragElastic={0.5}
          variants={boxVariants}
          whileHover="hover"
          whileTap="click"
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
