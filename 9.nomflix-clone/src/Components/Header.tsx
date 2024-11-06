// //////////////////////////////////////////////////
// // ✅ 9-1. Header part One
// // 라우터 만들기
// // 헤더 만들기

// import styled from 'styled-components';

// const Nav = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: fixed;
//   width: 100%;
//   top: 0;
//   background-color: black;
//   height: 80px;
//   font-size: 12px;
//   color: white;
// `;

// const Col = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const Logo = styled.svg`
//   margin-right: 50px;
// `;

// const Items = styled.ul`
//   display: flex;
//   align-items: center;
// `;

// const Item = styled.li`
//   margin-right: 20px;
// `;

// function Header() {
//   return (
//     <Nav>
//       <Col>
//         <Logo />
//         <Items>
//           <Item>Home</Item>
//           <Item>Tv Shows</Item>
//         </Items>
//       </Col>
//       <Col>
//         <button>search</button>
//       </Col>
//     </Nav>
//   );
// }

// export default Header;

// //////////////////////////////////////////////////
// // ✅ 9-2. Header part Two
// // ✅ 9-3. Header part Three
// // 헤더 스타일 만들기
// // 네비게이션 이동 애니메이션
// // 검색 창 애니메이션

// import { Link, useRouteMatch } from 'react-router-dom';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';
// import { useState } from 'react';

// const Nav = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: fixed;
//   width: 100%;
//   top: 0;
//   background-color: black;
//   font-size: 14px;
//   padding: 20px 60px;
//   color: white;
// `;

// const Col = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const Logo = styled(motion.svg)`
//   margin-right: 50px;
//   width: 95px;
//   height: 25px;
//   fill: ${(props) => props.theme.red};
//   path {
//     stroke-width: 6px;
//     stroke: white;
//   }
// `;

// const Items = styled.ul`
//   display: flex;
//   align-items: center;
// `;

// const Item = styled.li`
//   margin-right: 20px;
//   color: ${(props) => props.theme.white.darker};
//   transition: color 0.3s ease-in-out;
//   position: relative; // ✨ 동그라미
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   &:hover {
//     color: ${(props) => props.theme.white.lighter};
//   }
// `;

// const Search = styled.span`
//   color: white;
//   display: flex;
//   align-items: center;
//   position: relative;
//   svg {
//     height: 25px;
//   }
// `;

// const Circle = styled(motion.span)`
//   position: absolute;
//   width: 5px;
//   height: 5px;
//   border-radius: 5px;
//   bottom: -5px;
//   left: 0;
//   right: 0;
//   margin: 0 auto;
//   background-color: ${(props) => props.theme.red};
// `;

// const Input = styled(motion.input)`
//   transform-origin: right center; // 변화가 시작하는 위치
//   position: absolute;
//   right: 0px;
//   padding: 5px 10px;
//   padding-left: 40px;
//   z-index: -1;
//   color: white;
//   font-size: 16px;
//   background-color: transparent;
//   border: 1px solid ${(props) => props.theme.white.lighter};
// `;

// // ✨ normal: 이름은 마음대로 붙임
// const logoVariants = {
//   normal: {
//     fillOpacity: 1,
//   },
//   active: {
//     // ✨ fillOpacity: 0, 하나의 값을 가질수도 있고
//     // 배열로도 만들 수 있음. 그리고 진행하고 싶은 모든 단계들을 명시할 수 있다
//     fillOpacity: [0, 1, 0],
//     transition: {
//       repeat: Infinity,
//     },
//   },
// };

// function Header() {
//   const [searchOpen, setSearchOpen] = useState(false);
//   const homeMatch = useRouteMatch('/');
//   const tvMatch = useRouteMatch('/tv');
//   // console.log(homeMatch, tvMatch);
//   const toggleSearch = () => setSearchOpen((prev) => !prev);

//   return (
//     <Nav>
//       <Col>
//         <Logo
//           variants={logoVariants}
//           whileHover="active"
//           initial="normal"
//           xmlns="http://www.w3.org/2000/svg"
//           width="1024"
//           height="276.742"
//           viewBox="0 0 1024 276.742"
//         >
//           <motion.path d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z" />
//         </Logo>
//         <Items>
//           <Item>
//             <Link to="/">
//               Home {homeMatch?.isExact && <Circle layoutId="circle" />}
//             </Link>
//           </Item>
//           <Item>
//             <Link to="/tv">
//               Tv Shows {tvMatch && <Circle layoutId="circle" />}
//             </Link>
//           </Item>
//         </Items>
//       </Col>
//       <Col>
//         <Search>
//           <motion.svg
//             onClick={toggleSearch}
//             animate={{ x: searchOpen ? -215 : 0 }}
//             transition={{ type: 'linear' }}
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fillRule="evenodd"
//               d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//               clipRule="evenodd"
//             ></path>
//           </motion.svg>
//           <Input
//             transition={{ type: 'linear' }}
//             // initial={{ scaleX: 0.1 }}
//             animate={{ scaleX: searchOpen ? 1 : 0 }}
//             placeholder="Search for movie or tv show.."
//           ></Input>
//         </Search>
//       </Col>
//     </Nav>
//   );
// }

// export default Header;

// // ✨ 정리
// // 9-2. Header part Two
// // 네비게이션 이동, 애니메이션

// // import { motion } from 'framer-motion'; 임포트하고
// // svg path => motion.path 변경
// // logo 는 motion svg로 변경
// // whileHover="active" prop 만들고 logoVariants 만듦
// // whileHover={{ scale: 1.5 }} 이렇게 직접 오브젝트를 넣어줄수도 있고, Variants 만들어서 넣을수도 있다
// // whileHover={ condition ? "active" : "hover" }
// // 조건문이 필요할 수도 있음
// // 이 Variants를 사용하든가 아니면 다른 Variants를 사용할 수 있음
// // Variants를 사용할 때는 string(문자열)을 넣으면 됨
// // 그럼 어딘가에 있는 모든 애니메이션의 설정을 가질 수 있다
// // variants={logoVariants} 넣어줌
// // initial="normal" 넣어줌

// // Home 을 클릭하면 Home 으로 이동하고, 밑에 동그라미가 나와야 함
// // 그리고 Tv Shows를 누르면 동그라미는 여기로 움직여야함
// // style 꾸며줌

// // Item li 들을 Home을 누르면 Home, Tv Shows 를 누르면 Tv Shows 로 가게 페이지 바꿈
// // Link 사용
// // Link 는 React Router에서부터 제공되어야 함
// // 그래서 Link 를 react-router로부터 import 함
// // a 앵커 태그 사용하면 안 됨. 왜냐면 우리는 같은 페이지로, 같은 웹사이트로 갈 계획임
// // 도메인이 같을 땐 쓰면 안됨.

// // 내가 어디에 있는지 확인. 왜냐하면 내가 어디에 있는지에 따라서
// // 원을 Home 또는 Tv Shows에 표시한다
// // route match 사용
// // react router 는 내가 찾고 있는 route 는 URL에 있는 것이라는 걸 말해줌
// // const homeMatch = useRouteMatch('/') 작성
// // 여기에 만약 내가 home('/') 에 있다면, react-router로부터 불러와야 함
// // useRouteMatch 는 우리에게 이 route 안에 있는지 다른 곳에 있는지를 알려줌
// // console.log(homeMatch, tvMatch); // 우리가 어디에 있는지 확인
// // Tv show로 이동해도 '/', '/tv' 둘 다 찍힘
// // 왜냐면 이건 항상 참이고, 우리가 항상 / 안에 있기 때문. / 안에서 /tv 이런식
// // homeMatch의 isEact는 true 이거나 false가 된다
// // home으로 가면 isEact는 true, tvMatch는 null
// // Tv show로 가면 isEact는 null, tvMatch는 존재함
// // 그래서 tvMatch 가 존재하는지 확인함
// // <Link to="/tv">Tv Shows {tvMatch && <Circle />}</Link>

// // 🔶 단축 평가 논리 연산자 정리
// // {homeMatch?.isExact && <Circle />}
// // 단축 평가는 논리 연산자(&&, ||)가 왼쪽 피연산자의 값에 따라 오른쪽 피연산자의 평가 여부를 결정하는 방식
// // 만약 homeMatch가 null 또는 undefined라면 homeMatch?.isExact는 false가 되고, 따라서 && 연산자 오른쪽의 <Circle />은 평가되지 않음.
// // 만약 homeMatch가 존재하고 homeMatch.isExact가 true라면 <Circle />가 렌더링됨
// // tvMatch가 true 값(예: 객체)일 경우에만 && 연산자 오른쪽의 <Circle />가 평가되고 렌더링 됨
// // 만약 tvMatch가 false(예: null 또는 undefined)라면 <Circle />는 평가되지 않음

// ////////////////////////////////////////////////////////////
// // ✨ 정리
// // 9-3. Header part Three
// // 네비게이션 이동 애니메이션
// // 검색 창 애니메이션

// // 🔶 Home 과 Tv Shows 애니메이션 추가
// // Home 과 Tv Shows 를 클릭할 때 옮겨다니도록 애니메이션 추가
// // Layout ID 사용
// // 우선 Circle 을 styled.span에서 motion.span 으로 바꿔줌
// // <Circle layoutId="circle" /> 레이아웃 연결

// // 🔶 검색창
// // 검색 아이콘 누르면 검색창 나오게 하기
// // state가 필요
// // const [searchOpen, setSearchOpen] = useState(false); 기본 값 false
// // Search 에 onClick 속성 만들기
// // searchOpen 을 여는 함수를 실행시킬 것임
// // 두 가지 옵션 있음
// // 1. 화살표 함수 사용
// // const openSearch = () => setSearchOpen(true)
// // <Search onClick={openSearch}>
// // 2. 익명 함수 사용
// // <Search onClick={() => setSearchOpen(true)}>
// // 입력창은 오른쪽에서 왼쪽으로 나타남
// // input 만듦. 소문자가 되어서는 안된다
// // 이건 Style Component, Motion Component 가 되어야 한다
// // const Input = styled(motion.input)``; 만듦
// // Input 수정 initial 최초에는 scaleX가 0.1이 되도록
// // initial={{ scaleX: 0 }} 쓰는 대신 animate로 바꿈 animate={{ scaleX: 0 }}
// // searchOpen이 현재 열려있는지 확인
// // animate={{ scaleX: searchOpen ? 1 : 0 }}
// // searchOpen 이 열려있다면, 비율을 1로 조정, 아니면 0으로
// // input 스타일로 가서  transform-origin: right center; 변화가 시작하는 위치 조정
// // 열렸냐 아니냐에 따라서 돋보기 움직임
// // animate={{ x: searchOpen ? -180 : 0 }}
// // 밖을 클릭하거나 돋보기 부분을 누르면 입력창 닫기
// // motion.svg에 onClick={toggleSearch} 넣어주고
// // toggleSearch로 바꿔줌. 이건 검색창을 열 뿐만 아니라 이전 값을 불러와서 반대 값을 돌려주는 역할
// // motion.svg 와 input에 애니메이션 효과 바꿈 transition={{ type: 'linear' }}

//////////////////////////////////////////////////
// ✅ 9-4. Header part Four
// useAnimation 사용 : 코드로 애니메이션 실행시키기
// 페이지의 스크롤을 내리면 네비게이션의 색 변경

import { Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { motion, useAnimation, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 14px;
  padding: 20px 60px;
  color: white;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(motion.svg)`
  margin-right: 50px;
  width: 95px;
  height: 25px;
  fill: ${(props) => props.theme.red};
  path {
    stroke-width: 6px;
    stroke: white;
  }
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  margin-right: 20px;
  color: ${(props) => props.theme.white.darker};
  transition: color 0.3s ease-in-out;
  position: relative; // 동그라미
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:hover {
    color: ${(props) => props.theme.white.lighter};
  }
`;

const Search = styled.span`
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  svg {
    height: 25px;
  }
`;

const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  bottom: -5px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.red};
`;

const Input = styled(motion.input)`
  transform-origin: right center;
  position: absolute;
  right: 0px;
  padding: 5px 10px;
  padding-left: 40px;
  z-index: -1;
  color: white;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.white.lighter};
`;

// ✨normal: 이름은 마음대로 붙임
const logoVariants = {
  normal: {
    fillOpacity: 1,
  },
  active: {
    // fillOpacity: 0, 하나의 값을 가질수도 있고
    // 배열로도 만들 수 있음. 그리고 진행하고 싶은 모든 단계들을 명시할 수 있다
    fillOpacity: [0, 1, 0],
    transition: {
      repeat: Infinity,
    },
  },
};

const navVariants = {
  top: {
    backgroundColor: 'rgba(0,0,0,0)',
  },
  scroll: {
    backgroundColor: 'rgba(0,0,0,1)',
  },
};

// 🔶 애니메이션 실행시키는 또 다른 방법
// animate={{ scaleX: searchOpen ? 1 : 0 }}
// 이런식으로 Input 속성에 animate 속성을 바로 주는 것이 아니라
// 애니메이션 속성이랑 커멘드를 코드로부터 만들어 줌

// 🔶 스크롤 내리면 네비게이션 색상 변경
// 이걸 위해서, framer-motion 이 제공하는 Hook 사용
// useScroll : 스크롤 감지
// 이것은 우리에게 모션 값을 줌
// 모션 값은 스크롤을 움직일 때 제일 밑에서부터 얼마나 멀리 있는지 알려줌
// 이것은 두 가지 값을 우리에게 줌
// 첫 번째는 scrollXProgress, scrollYProgress
// 여기서 x, y에 대한 스크롤 진행도를 0에서부터 1사이의 값으로 알 수 있음
// 이 값은 우리가 끝에서부터 얼마나 떨어져있는지를 0퍼센트부터 100퍼센트 사이의 값으로 나타내줌
// 두 번째는 scrollX, scrollY 다른건 얼마나 멀리 이동했는지를 픽셀 단위로 나타내는 것
// 네이게이션 모양 바꿔주기
// const Nav = styled(motion.nav)`` 변경
// 기본 배경값은 지워주고
// <Nav initial={{ backgroundColor: 'rgba(0,0,0,1)' }}>
// 최초 배경색을 설정해줌
// const navAnimation = useAnimation() 만들어주고
// <Nav animate={navAnimation} initial={{ backgroundColor: 'rgba(0,0,0,1)' }}>
// 애니메이트 속성 추가

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const homeMatch = useRouteMatch('/');
  const tvMatch = useRouteMatch('/tv');
  const inputAnimation = useAnimation();
  const navAnimation = useAnimation();
  const { scrollY } = useScroll();
  // ✨ 애니메이션을 실행시키는 또 하나의 방법
  // 애니메이션이 상태 변화에 의해서 실행되기 전에, 코드로부터 애니메이션을 실행 시킴
  // Component 의 props를 이용해서가 아니라, 코드에서 실행
  // 이건 애니메이션들을 동시에 실행시키고 싶을 때 유용
  const toggleSearch = () => {
    // 만약 검색창이 열려있으면
    if (searchOpen) {
      // trigger the close animation - 닫는 애니메이션 실행
      inputAnimation.start({ scaleX: 0 });
    } else {
      // trigger the open animation - 여는 애니메이션 실행
      inputAnimation.start({ scaleX: 1 });
    }
    setSearchOpen((prev) => !prev);
  };
  // ✅ 배경색을 바꾸기 위해서 이렇게 길게 할 필요는 없다
  useEffect(() => {
    scrollY.on('change', () => {
      // console.log(scrollY.get()); // scrollY 의 값을 알아보기 위함
      if (scrollY.get() > 80) {
        navAnimation.start(
          'scroll'
          // {backgroundColor: 'rgba(0,0,0,1)', } // 변수 만들어서 쓰기
        );
      } else {
        navAnimation.start(
          'top'
          // {backgroundColor: 'rgba(0,0,0,0)', } // 변수 만들어서 쓰기
        );
      }
    });
  }, [scrollY, navAnimation]);
  // [scrollY] 이 값을 읽어내야 함, 왜냐하면 이 값은 Component 를 새로고침하지는 않기 때문
  // 그니까 값이 바뀌어도 state(상태)는 변하지 않는다

  return (
    <Nav
      variants={navVariants}
      // ✅ ainimate={{backgroundColor: scrollY > 80 ? '' : ''}} // 이렇게 해도 됨
      animate={navAnimation}
      // initial={{ backgroundColor: 'rgba(0,0,0,0)' }} // 변수로 바꿈
      initial={'top'}
    >
      <Col>
        <Logo
          variants={logoVariants}
          whileHover="active"
          initial="normal"
          xmlns="http://www.w3.org/2000/svg"
          width="1024"
          height="276.742"
          viewBox="0 0 1024 276.742"
        >
          <motion.path d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z" />
        </Logo>
        <Items>
          <Item>
            <Link to="/">
              Home {homeMatch?.isExact && <Circle layoutId="circle" />}
            </Link>
          </Item>
          <Item>
            <Link to="/tv">
              Tv Shows {tvMatch && <Circle layoutId="circle" />}
            </Link>
          </Item>
        </Items>
      </Col>
      <Col>
        <Search>
          <motion.svg
            onClick={toggleSearch}
            animate={{ x: searchOpen ? -215 : 0 }}
            transition={{ type: 'linear' }}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </motion.svg>
          <Input
            animate={inputAnimation}
            initial={{ scaleX: 0 }}
            transition={{ type: 'linear' }}
            placeholder="Search for movie or tv show.."
          ></Input>
        </Search>
      </Col>
    </Nav>
  );
}

export default Header;
