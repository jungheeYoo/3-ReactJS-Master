//////////////////////////////////////////////////
// ✅ 9-6. Home Screen part Two
// 홈 배경 이미지 완성하기

// 이미지 경로를 만들어주는 함수
// export function makeImagePath(id: string, format?: string) {
//   return `https://image.tmdb.org/t/p/${format ? format : 'original'}/${id}`;
// }

export function makeImagePath(id: string, format: string = 'original'): string {
  return `https://image.tmdb.org/t/p/${format}/${id}`;
}

// 배경 이미지 가져오기
// 배경 이미지 지정하는 법
// backdrop_path 앞에다가 image로 시작하는 URL을 붙여주고,
// 그 뒤에 형식과 ID를 적어주면 됨
// 그래서 Help function이 필요함. utils.ts 파일 만듦
// makeImagePath 함수에 string 인 ID 와 format을 받는다
// 하지만 format은 안넘어올 수 있으니 format?: string 이런식으로 함
// format 이 있으면 쓰고, 없으면 original
// (id: string, format?: string)
// 이미지 id인 id를 받고, 만약 format이 제공된다면, format을 사용하고 없으면 원본 사용

// https://image.tmdb.org/t/p/original/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg
