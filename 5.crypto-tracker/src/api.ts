// ✅ 5-9. React Query part One

// 🔶 react query 를 사용하기 위한 방법
// 1️⃣ fetcher 함수 만들기 (모든 fetcher 함수 넣기)
// API 관련된 것들은 component 들과 멀리 떨어져 있도록 함
// 만든 컴포넌트들이 fetch 를 하지 않았으면 좋겠어서
// 그래서 이 코드들을 api.tsx 파일 안에 넣음
// fetcher 함수는 꼭 fetch promise 를 return 해줘야함
// 이 함수는 json data 의 promise 를 return 해야 함

export function fetchCoins() {
  return fetch('https://api.coinpaprika.com/v1/coins').then((response) =>
    response.json()
  );
}
