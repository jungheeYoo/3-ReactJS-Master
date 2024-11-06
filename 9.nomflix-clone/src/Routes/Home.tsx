// //////////////////////////////////////////////////
// // ✅ 9-1. Header part One
// // 라우터 만들기
// // 헤더 만들기

// function Home() {
//   return <div style={{ backgroundColor: 'whitesmoke', height: '200vh' }}></div>;
// }
// export default Home;

// //////////////////////////////////////////////////
// // ✅ 9-2. Header part Two

// function Home() {
//   return (
//     <div style={{ backgroundColor: 'whitesmoke', height: '200vh' }}>home</div>
//   );
// }
// export default Home;

// //////////////////////////////////////////////////
// // ✅ 9-5. Home Screen part One
// // 홈 화면 만들기 - api 가져오기

// import { useQuery } from 'react-query';
// import { getMovies } from '../api';

// // ✨ useQuery Hook 은 fetcher 를 사용해서 data 랑 아직 로딩중인지에 대한 알림을 전해준다
// function Home() {
//   const { data, isLoading } = useQuery(['movies', 'nowPlaying'], getMovies);
//   console.log(data, isLoading);

//   return (
//     <div style={{ backgroundColor: 'whitesmoke', height: '200vh' }}>Home</div>
//   );
// }

// export default Home;

// // useQuery(); 에 기본적으로 키를 제공해줘야 함
// // 문자열이 될 수도 있고, 배열이 될 수도 있음
// // ['movies', 'nowPlaying'] 이 안에 있는 것은 식별자에 불과

// // 🔶 TheMovieDB Image가져오기
// // 이미지 파일명 앞에 https://image.tmdb.org/t/p/original/ 붙이기

// //////////////////////////////////////////////////
// // ✅ 9-6. Home Screen part Two
// // 홈 배경 이미지 완성하기

// import { useQuery } from 'react-query';
// import { getMovies, IGetMoviesResult } from '../api';
// import styled from 'styled-components';
// import { makeImagePath } from '../utils';

// const Wrapper = styled.div`
//   background: black;
// `;

// const Loader = styled.div`
//   height: 20vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Banner = styled.div<{ bgPhoto: string }>`
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding: 60px;
//   background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
//     url(${(props) => props.bgPhoto}); // 두 개의 배경 rgba, 이미지
//   background-size: cover;
// `;
// const Title = styled.h2`
//   font-size: 68px;
//   margin-bottom: 20px;
// `;

// const Overview = styled.p`
//   font-size: 30px;
//   width: 50%;
// `;

// function Home() {
//   const { data, isLoading } = useQuery<IGetMoviesResult>(
//     ['movies', 'nowPlaying'],
//     getMovies
//   );
//   console.log(data, isLoading);

//   // Cannot read properties of undefined (reading '0')
//   // TypeError: Cannot read properties of undefined (reading '0')
//   // const hasMovies = data && data.results && data.results.length > 0;

//   return (
//     <Wrapper>
//       {isLoading ? (
//         <Loader>Loading...</Loader>
//       ) : (
//         // hasMovies && (
//         <>
//           {/* 배경 이미지를 Banner 컴포넌트(bgPhoto)에 넘김 */}
//           {/* bgPhoto 는 만들어진 utils에서 이미 경로여야함 */}
//           <Banner bgPhoto={makeImagePath(data?.results[0].backdrop_path || '')}>
//             <Title>{data?.results[0].title}</Title>
//             <Overview>{data?.results[0].overview}</Overview>
//           </Banner>
//         </>
//         // )
//       )}
//     </Wrapper>
//   );
// }

// export default Home;

// // 타입스크립트에게 useQuery 의 결과가 IGetMovieResult 타입이라고 알려줌
// // 그럼 타입스크립트는 data 안에 어떤 것들이 필요한지를 알고 있게 됨

//////////////////////////////////////////////////
// ✅ 9-7. Slider part One
// 슬라이더 만들기

import { useQuery } from 'react-query';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { getMovies, IGetMoviesResult } from '../api';
import { makeImagePath } from '../utils';
import { useState } from 'react';

const Wrapper = styled.div`
  background: black;
  overflow-x: hidden;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;
const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`;

const Overview = styled.p`
  font-size: 36px;
  width: 50%;
`;

const Slider = styled.div`
  position: relative;
  top: -100px;
`;

const Row = styled(motion.div)`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  width: 100%;
`;

const Box = styled(motion.div)`
  background-color: white;
  height: 200px;
  color: red;
  font-size: 66px;
`;

const rowVariants = {
  hidden: {
    x: window.outerWidth, // ✨ 사용자 화면의 크기 받아오기
  }, // 보이지 않을 때
  visible: {
    x: 0,
  }, // 보일 때
  exit: {
    x: -window.outerWidth,
  }, // 사라질 때
};

// 🔶 세 개의 열, 슬라이드 6개씩
// 첫 번째부터 여섯번째 영화까지만 보이게 함
// motion을 사용할 때는 모든 것을 한 번에 render 할 필요 없음
// 대신 key들만 바꾸면 됨
// 하나의 element만 render 하고 key를 바꾸면, react는 새로운 요소가 들어왔다고 생각

// 🔶 AnimatePresence import
// AnimatePresence 는 컴포넌트가 render 되거나 destroy 될 때 효과 줄 수 있음
// Row를 AnimatePresence 로 감쌈

function Home() {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ['movies', 'nowPlaying'],
    getMovies
  );
  console.log(data, isLoading);

  // 🔶 index 시스템 만들기
  // index 시스템이 있어야 어딘가를 클릭하면 계속 다음 페이지로 넘어가는 기능 만들 수 있음
  // index를 Row의 key로 넘겨줌
  // key가 변경되면, react는 새로운 Row가 만들어졌다고 생각
  // 그리고 react가 새 Row를 생성햐려고 할 때, 원래 있던 Row는 파괴 됨
  // 원래의 Row 가 파괴될 때, exit="exit" 실행
  // 새로운 Row 가 만들어지니까, initial="hidden" 시작해서 animate="visible" 실행됨
  // 그래서 Row를 세 개씩이나 render 하지 않아도 되는 것
  // 단 하나의 Row만 render 하고, key만 바꿔서 여러 Row가 서로의 옆에 붙어있는 것 같은 효과를 줄 수 있음

  const [index, setIndex] = useState(0);
  // 🔷 index를 증가시키는 함수
  // 전 index 를 1만큼 증가시키는 역할
  const increaseIndex = () => setIndex((prev) => prev + 1);
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          {/* 🔷 버튼 만들지 않았으니 일단 Banner 를 클릭하면 index 증가 */}
          <Banner
            onClick={increaseIndex}
            bgPhoto={makeImagePath(data?.results[2].backdrop_path || '')}
          >
            <Title>{data?.results[2].title}</Title>
            <Overview>{data?.results[2].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence>
              <Row
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: 'tween', duration: 1 }}
                key={index}
              >
                {/* <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box /> */}
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Box key={i}>{i}</Box>
                ))}
              </Row>
            </AnimatePresence>
          </Slider>
        </>
      )}
    </Wrapper>
  );
}

export default Home;
