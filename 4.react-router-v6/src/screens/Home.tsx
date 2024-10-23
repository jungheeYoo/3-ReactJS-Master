// // ✅ 4-1. BrowserRouter
// // 초기 셋팅
// // BrowserRouter (v5버전) vs createBrowserRouter

// function Home() {
//   return <h1>Home</h1>;
// }
// export default Home;

//////////////////////////////////////////////
// ✅ 4-3. errorElement

// 우리의 컴포넌트에 에러가 발생해서 충돌하거나
// 컴포넌트의 위치를 찾지 못할 때 쓰는 것
// 일부러 컴포넌트가 충돌하도록 만듦

// 에러 : users는 비어있는 array인데 첫 번째 아이템 불러와서 name에 접근

function Home() {
  // const users: any = [];
  // return <h1>{users[0].name}Home</h1>;
  return <h1>Home</h1>;
}
export default Home;
