//////////////////////////////////////////////////
// ✅ 8-0~1. Introduction, Installation

import styled from 'styled-components';
import { motion } from 'framer-motion';

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

// ✨ div 를 animate 하길 원한다면, motion.div 이렇게 써야함
function App() {
  return (
    <Wrapper>
      <Box />
      <div></div>
      <motion.div></motion.div>
    </Wrapper>
  );
}

export default App;
