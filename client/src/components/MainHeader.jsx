import styled from 'styled-components'

const Header=styled.div`
  height:85px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color:white;
`;

const Logo=styled.a`
  fontFamily: 'KoHo';
  font-weight: 700;
  font-size: 35px;
  text-align: center;
  color: #000000;
  text-decoration: none;
`;

const NavUl=styled.ul`
  display: flex;
  list-style: none;
`;

const NavA=styled.a`
  margin-inline: 40px;

  fontFamily: 'Inter';
  font-style: normal;
  font-size: 23px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;

  color:#000000;
  text-decoration: none;
`;

const LoginUl=styled.ul`
  display: flex;
  padding: 15px;
  list-style: none;
`;

const LoginA=styled.a`
  margin-inline: 5px;
  fontFamily: 'Inter';
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;

  color: #818181;
  text-decoration: none;
`;

function LogoFunc(){
  return <Logo href="/main">EX-MAP</Logo>
}

function Nav(){
  return <NavUl>
    <li><NavA href="/exhibition">전시</NavA></li>
    <li><NavA href="/map">지도</NavA></li>
    <li><NavA href="/promotion">홍보</NavA></li>
    <li><NavA href="/review">후기</NavA></li>
    <li><NavA href="/qna">지식인</NavA></li>
  </NavUl>
}
function Login(){
  return <login>
    <LoginUl>
      <li><LoginA href="/login">로그인</LoginA></li>
      <li>|</li>
      <li><LoginA href="/signup">회원가입</LoginA></li>
    </LoginUl>
  </login>
}

function MainHeader() {
  return (
    <>
    <Header>
    <LogoFunc></LogoFunc>
    <Nav></Nav>
    <Login></Login>
    </Header>
    </>
  );
}

export default MainHeader;