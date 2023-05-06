import React from 'react';

function Header() {
  return (
    <div>
      <header>
        <div className='regiser-login'>
          <div className='register-login-group'>
            <a href='#' className='reigster-login-item'>
              회원가입
            </a>
            <div className='register-login-line'></div>
            <a href='#' className='reigster-login-item'>
              로그인
            </a>
            <div className='register-login-line'></div>
            <a href='#' className='reigster-login-item'>
              고객센터
            </a>
          </div>
        </div>
        <div className='header-wrap'>
          <div className='header-content'>
            <img src='img/logo.svg' alt='마켓컬리 로고' />
            <button className='kurly-btn kurly-selected'>마켓컬리</button>
            <div className='register-login-line'></div>
            <button className='kurly-btn kurly-not-selected'>뷰티컬리</button>
          </div>
          <div className='header-content'>
            <div className='search'>
              <input type='text' placeholder='검색어를 입력해주세요' />
              <button type='submit' className='input-submit'></button>
            </div>
          </div>
          <div className='header-content'>
            <div className='icon'></div>
            <div className='icon'></div>
            <div className='icon'></div>
          </div>
        </div>
      </header>

      <nav>
        <div className='nav-wrap'>
          <div className='nav-content'>
            <div className='category'>
              <span className='category-img'></span>
              <span className='category-txt'>카테고리</span>
            </div>
          </div>
          <div className='nav-content'>
            <ul className='nav-menu'>
              <li className='menu-content'>신상품</li>
              <li className='menu-content'>베스트</li>
              <li className='menu-content'>알뜰쇼핑</li>
              <li className='menu-content'>특가/혜택</li>
            </ul>
          </div>
          <div className='nav-content'>
            <a href='#' className='delivery-guide'>
              <span style={{ color: 'rgb(95, 0, 128)' }}>샛별・택배</span>{' '}
              배송안내
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
