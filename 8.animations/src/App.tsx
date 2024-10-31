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

//////////////////////////////////////////////
// ✅ 8-3. Variants part One
//

import styled from 'styled-components';
import { motion } from 'framer-motion';

// 🔶 Variants
// 코드 정리: 여러 상태의 애니메이션을 한 객체로 관리해 코드가 깔끔해짐
// 많은 애니메이션들을 하나로 연결시켜줌
// **다양한 상태(예: 초기 상태, 나타나는 상태, 사라지는 상태 등)**를 정의한 다음,
// 해당 컴포넌트가 이 상태를 따라 애니메이션되도록 하는 것이다.
// 이를 통해 애니메이션 스테이지를 하나로 연결하며, 각각의 상태가 연결되도록 만들어 코드를 보다 직관적이고 유지 보수하기 쉽게 해준다.

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

// ✨ 이름은 중요하지 않음. 단지 자바스크립트의 오브젝트이다
// 설정을 분리된 오브젝트로 옮김
// 두 개의 stage
const myVars = {
  start: { scale: 0 },
  end: { scale: 1, rotateZ: 360, transition: { type: 'spring', delay: 0.5 } },
};

function App() {
  return (
    <Wrapper>
      <Box variants={myVars} initial="start" animate="end" />
    </Wrapper>
  );
}

export default App;
