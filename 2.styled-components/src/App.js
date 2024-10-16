import styled from 'styled-components';

// 2.1
// ✅ 스타일
const Father = styled.div`
  display: flex;
`;

const BoxOne = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;
const BoxTwo = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;
const Text = styled.span`
  color: white;
`;

// ✅ 구현
function App() {
  return (
    // css 파일 만들 필요 없어서 편하지만,
    // 괄호도 열어줘야 하고 javascript 방식으로 적어줘야 하기 때문
    // <div>
    //   <div style={{ backgroundColor: 'teal', width: 100, height: 100 }}></div>
    //   <div style={{ backgroundColor: 'tomato', width: 100, height: 100 }}></div>
    // </div>
    <Father>
      <BoxOne>
        <Text>Hello</Text>
      </BoxOne>
      <BoxTwo />
    </Father>
  );
}

export default App;
