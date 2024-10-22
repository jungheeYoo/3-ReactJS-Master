// // 3-2
// // ✅ Typing the Props

// import Circle from './Circle';

// function App() {
//   return (
//     <div>
//       <Circle bgColor="teal" />
//       <Circle bgColor="tomato" />
//     </div>
//   );
// }

// export default App;

//////////////////////////////////////////////
// 3-3
// ✅ Optional Props
// ✅ default props

import Circle from './Circle';

function AppCircle() {
  return (
    <div>
      <Circle borderColor="yellow" bgColor="teal" />
      <Circle text="im here" bgColor="tomato" />
    </div>
  );
}

export default AppCircle;
