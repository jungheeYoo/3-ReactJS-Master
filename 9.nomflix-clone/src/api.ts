// //////////////////////////////////////////////////
// // ✅ 9-5. Home Screen part One
// // 홈 화면 만들기 - api 가져오기

// const API_KEY = '0a06d67ddbfb0da39994d1abc5bc457a';
// const BASE_PATH = 'https://api.themoviedb.org/3';

// // 🔶 fetcher 함수 만들기
// // fetcher 는 데이터를 받아오고 JSON을 리턴하는 함수에 불과하다
// export function getMovies() {
//   return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
//     (response) => response.json()
//   );
// }

// // api.ts 파일 만들어서
// // API_KEY 만들기

// // https://api.themoviedb.org/3/movie/now_playing?api_key=0a06d67ddbfb0da39994d1abc5bc457a&language=en-US&page=1&region=kr
// // URL로 요청 보내기
// // URL을 가져올 도구 만들기. 영화 목록 가져오는 도구

// // TheMovieDB API Key
// // https://www.themoviedb.org/settings/api?language=ko

// // TheMovieDB API Document
// // https://developers.themoviedb.org/3/movies/get-now-playing

//////////////////////////////////////////////////
// ✅ 9-6. Home Screen part Two
// 홈 배경 이미지 완성하기

// ✨ 타입스크립트를 사용하기 위해 API 응답의 타입을 지정해줘야 함
// 그러면 내가 원하는 자동완성을 사용할 수 있다

// ✨ result는 내가 movie라고 부를 타입의 배열이 될 건데, 이것을 IMovie 인터페이스로 만듦
interface IMovie {
  id: number; // 아이디 넘버를 클릭했을 때 어디로 가고 싶은지 알고 있어야해서 ID 필요
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

// ✨ getMovies 의 결과를 나타냄
export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

const API_KEY = '0a06d67ddbfb0da39994d1abc5bc457a';
const BASE_PATH = 'https://api.themoviedb.org/3';

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
