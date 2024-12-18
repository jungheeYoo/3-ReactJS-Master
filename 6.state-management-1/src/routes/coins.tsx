// // ✅ 6-0~1. Dark Mode part One
// // ✅ state management 사용하지 않고 다크 모드/라이트 모드 스위치 구현하기

// import { Helmet } from 'react-helmet';
// import { useQuery } from 'react-query';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import { fetchCoins } from '../api';

// const Container = styled.div`
//   padding: 0px 20px;
//   max-width: 480px;
//   margin: 0 auto;
// `;

// const Header = styled.header`
//   height: 15vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const CoinsList = styled.ul``;

// const Coin = styled.li`
//   background-color: ${(props) => props.theme.cardBgColor};
//   color: ${(props) => props.theme.textColor};
//   border-radius: 15px;
//   margin-bottom: 10px;
//   border: 1px solid white;
//   a {
//     display: flex;
//     align-items: center;
//     padding: 20px;
//     transition: color 0.2s ease-in;
//   }
//   &:hover {
//     a {
//       color: ${(props) => props.theme.accentColor};
//     }
//   }
// `;

// const Title = styled.h1`
//   font-size: 48px;
//   color: ${(props) => props.theme.accentColor};
// `;

// const Loader = styled.span`
//   text-align: center;
//   display: block;
// `;

// const Img = styled.img`
//   width: 35px;
//   height: 35px;
//   margin-right: 10px;
// `;

// interface ICoin {
//   id: string;
//   name: string;
//   symbol: string;
//   rank: number;
//   is_new: boolean;
//   is_active: boolean;
//   type: string;
// }

// interface ICoinsProps {
//   toggleDark: () => void;
// }

// function Coins({ toggleDark }: ICoinsProps) {
//   const { isLoading, data } = useQuery<ICoin[]>('allCoins', fetchCoins);
//   return (
//     <Container>
//       <Helmet>
//         <title>코인</title>
//       </Helmet>
//       <Header>
//         <Title>코인</Title>
//         <button onClick={toggleDark}>Toggle Dark Mode</button>
//       </Header>
//       {isLoading ? (
//         <Loader>Loading...</Loader>
//       ) : (
//         <CoinsList>
//           {data?.slice(0, 100).map((coin) => (
//             <Coin key={coin.id}>
//               <Link
//                 to={{
//                   pathname: `/${coin.id}`,
//                   state: { name: coin.name },
//                 }}
//               >
//                 <Img
//                   src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
//                 />
//                 {coin.name} &rarr;
//               </Link>
//             </Coin>
//           ))}
//         </CoinsList>
//       )}
//     </Container>
//   );
// }
// export default Coins;

// //////////////////////////////////////////////////
// // ✅ 6-2. Introduction to Recoil
// // ✅ atom 설치, 기본 설정

// import { Helmet } from 'react-helmet';
// import { useQuery } from 'react-query';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import { fetchCoins } from '../api';

// const Container = styled.div`
//   padding: 0px 20px;
//   max-width: 480px;
//   margin: 0 auto;
// `;

// const Header = styled.header`
//   height: 15vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const CoinsList = styled.ul``;

// const Coin = styled.li`
//   background-color: ${(props) => props.theme.cardBgColor};
//   color: ${(props) => props.theme.textColor};
//   border-radius: 15px;
//   margin-bottom: 10px;
//   border: 1px solid white;
//   a {
//     display: flex;
//     align-items: center;
//     padding: 20px;
//     transition: color 0.2s ease-in;
//   }
//   &:hover {
//     a {
//       color: ${(props) => props.theme.accentColor};
//     }
//   }
// `;

// const Title = styled.h1`
//   font-size: 48px;
//   color: ${(props) => props.theme.accentColor};
// `;

// const Loader = styled.span`
//   text-align: center;
//   display: block;
// `;

// const Img = styled.img`
//   width: 35px;
//   height: 35px;
//   margin-right: 10px;
// `;

// interface ICoin {
//   id: string;
//   name: string;
//   symbol: string;
//   rank: number;
//   is_new: boolean;
//   is_active: boolean;
//   type: string;
// }

// function Coins() {
//   const { isLoading, data } = useQuery<ICoin[]>('allCoins', fetchCoins);
//   return (
//     <Container>
//       <Helmet>
//         <title>코인</title>
//       </Helmet>
//       <Header>
//         <Title>코인</Title>
//       </Header>
//       {isLoading ? (
//         <Loader>Loading...</Loader>
//       ) : (
//         <CoinsList>
//           {data?.slice(0, 100).map((coin) => (
//             <Coin key={coin.id}>
//               <Link
//                 to={{
//                   pathname: `/${coin.id}`,
//                   state: { name: coin.name },
//                 }}
//               >
//                 <Img
//                   src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
//                 />
//                 {coin.name} &rarr;
//               </Link>
//             </Coin>
//           ))}
//         </CoinsList>
//       )}
//     </Container>
//   );
// }
// export default Coins;

//////////////////////////////////////////////////
// ✅ 6-3.  Introduction to Recoil part Two
// ✅ atom 의 value 수정하기

import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchCoins } from '../api';
import { useSetRecoilState } from 'recoil';
import { isDarkAtom } from '../atoms';

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  border: 1px solid white;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  // 🔷 setDarkAtom function 은 value 를 설정(set) 하는 function 이다
  // React 의 setState 와 같은 방식으로 작동 함
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  const { isLoading, data } = useQuery<ICoin[]>('allCoins', fetchCoins);
  return (
    <Container>
      <Helmet>
        <title>코인</title>
      </Helmet>
      <Header>
        <Title>코인</Title>
        <button onClick={toggleDarkAtom}>Toggle Mode</button>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                  state: { name: coin.name },
                }}
              >
                <Img
                  src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}
export default Coins;
