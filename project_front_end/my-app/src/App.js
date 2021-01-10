/*eslint-disable */
//터미널에 뜨는 warning 제거
import React, { useState } from 'react';
import { Fragment } from 'react';
import './App.css';

function App() {
  //popular-list
  let [모임이름, 모임게시판번호] = useState(['요리', '집사', '취업']);


  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">JOIN US</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto" id="sign">

              <li className="nav-item">
                <a className="nav-link" href="#">로그인</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">회원가입</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      {/* page content */}
      <div className="container">
        {/* row */}
        <div className="row">

          {/* category -left */}
          <div className="col-lg-3">

            <h1 className="my-4">Meeating Name</h1>
            <div className="list-group">
              <a href="#" className="list-group-item">Category 1</a>
              <a href="#" className="list-group-item">Category 2</a>
              <a href="#" className="list-group-item">Category 3</a>
            </div>
          </div>
          {/* category -left -end */}
          <div class="col-lg-9">

            <div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="First slide"></img>
                </div>
                <div className="carousel-item">
                  <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Second slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="Third slide"></img>
                </div>
              </div>
              {/*이전 버튼 */}
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              {/* 다음 버튼 */}
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>

            </div>

            <div class="row">

              <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                  <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="#">Item One</a>
                    </h4>
                    <h5>$24.99</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                  <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="#">Item One</a>
                    </h4>
                    <h5>$24.99</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                  <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="#">Item One</a>
                    </h4>
                    <h5>$24.99</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                  </div>
                </div>
              </div>

            </div>

          </div>
          {/* col-lg-9 end */}

        </div>
        {/* row-end */}
      </div>
      {/* page-content -end */}
    </>
  );
}
// JSX는 classNameName를 사용하기 때문에 
//태그안 classNameName는 classNameNamename을 사용한다 (js문법과 구분하기위해 )

//useState는 변수를 저장하는 array같은 기능 ( 쓰기위해서는 useState  임포트 해야 한다 )
//웹app처럼 동작하게 만들고 싶으면 쓰면됨 
//state 내용이 변경되면 html이 자동으로 재 랜더링 된다 (새로고침 (x))

//ES6에서 추가된 문법
//let [a,b] =[10,100]
// let [변수명 , ..] = useState('데이터 ', ...)
export default App;
