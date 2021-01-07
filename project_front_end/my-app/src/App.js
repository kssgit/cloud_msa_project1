import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <nav className="navbar navbar-light bg-light static-top">
      <div className="container">
        <a className="navbar-brand" href="#">Join US</a>
        <a className="btn btn-primary" href="#">Sign In</a>
      </div>
    </nav>
  );
}
// JSX는 class를 사용하기 때문에 
//태그안 class는 classname을 사용한다 (구분하기위해)
//useState는 변수를 저장하는 array같은 기능 
//ES6에서 추가된 문법
//let [a,b] =[10,100]
export default App;
