
import { useState } from 'react';
import './App.css';
// import Content from './components/Content';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import NotPage from './pages/NotPage';
// import Styled from './components/Styled';


function App() {


//useState(변수값) - 변수값에 모든 문자열, 숫자, 배열 등 넣을 수 있음 <자주바뀌는변경값에 주로쓰임>
// let Name = "홍길동";

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/protfolio" element={<Portfolio/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/*" element={<NotPage/>}/>
      </Routes>
    </>


    //<div className="App">
      
      /* <h3 className={Name} style={{backgroundColor: "lightpink"}}>Hello React {Name}</h3> */
      //<div className='content'>
        //<Content arrayNum = "0" />
        //<Content arrayNum = "1" />
       // <Content arrayNum = "2" />
        //<Content arrayNum = "3" />
     // </div>
     // <div className='content'>
        //<Content title="내 제휴" desc="할인카드 조회 서비스" />
       // <Content title="편하고 여유롭게" desc="모바일 오더" />
       // <Content title="간편하고 편리하게" desc="모바일 기프트 카드" />
       // <Content title="스마트 줄서기" desc="이용가이드" />
     // </div>
      //<Styled />
   // </div>
  );
}

export default App;
