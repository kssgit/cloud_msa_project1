import React, { useState } from 'react';
import { Fragment } from 'react';
import './App.css';

function App() {
  let [모임이름, 모임게시판번호] = useState(['요리', '집사', '취업']);
  return (
    <>
      <nav className="navbar navbar-light bg-light static-top">
        <div className="container">
          <a className="navbar-brand" href="#">Join US</a>
          <a className="btn btn-primary" href="#">Sign In</a>
        </div>
      </nav>
      <header>
        <h1>가장 인기 있는 모임 게시판</h1>
        <div className='popular' >
          <h2>{모임이름[0]}</h2>
        </div>
        <div className='popular' >
          <h2>{모임이름[1]}</h2>
        </div>
        <div className='popular' >
          <h2>{모임이름[2]}</h2>
        </div>
      </header>
    </>
  );
}
// JSX는 class를 사용하기 때문에 
//태그안 class는 classname을 사용한다 (js문법과 구분하기위해 )

//useState는 변수를 저장하는 array같은 기능 ( 쓰기위해서는 useState  임포트 해야 한다 )
//웹app처럼 동작하게 만들고 싶으면 쓰면됨 
//state 내용이 변경되면 html이 자동으로 재 랜더링 된다 (새로고침 (x))

//ES6에서 추가된 문법
//let [a,b] =[10,100]
// let [변수명 , ..] = useState('데이터 ', ...)
export default App;
