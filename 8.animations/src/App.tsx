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

//////////////////////////////////////////////////
// ✅ 8-2. Basic Animations

import styled from 'styled-components';
import { motion } from 'framer-motion';

// 🔶 어떻게 스타일 컴포넌트를 애니메이트 시킬 수 있을까?
// const Box = styled(motion.div)``

// 🔶 Motion Prop

// 🔹 animate={{}}
// Motion Prop 중 가장 중요함

// 🔹 initial={{}}
// 원하는 상태. Element의 초기 상태를 써주면 됨

// 🔹 transition={{type: 'spring'}}
// 모든 애니메이션에는 spring 이 기본적으로 되어 있다

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

function App() {
  return (
    <Wrapper>
      <Box
        transition={{ type: 'spring', delay: 0.5 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotateZ: 360 }}
      />
      {/* <motion.div></motion.div> */}
    </Wrapper>
  );
}

export default App;
