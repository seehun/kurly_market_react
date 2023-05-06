import React from 'react';
import { useState, useEffect } from 'react';

function DailySpecilas() {
  const [hour, setHour] = useState('00');
  const [minute, setMinute] = useState('01');
  const [second, setSecond] = useState('05');

  let totalSecond =
    parseInt(hour) * 3600 + parseInt(minute) * 60 + parseInt(second);

  const timeExpression = (total) => {
    let total_hour = parseInt(total / 3600);
    total = total - total_hour * 3600;
    let total_minute = parseInt(total / 60);
    total = total - total_minute * 60;
    let total_second = total;

    if (total_hour < 10) {
      setHour(`0${total_hour}`);
    } else {
      setHour(`${total_hour}`);
    }

    if (total_minute < 10) {
      setMinute(`0${total_minute}`);
    } else {
      setMinute(`${total_minute}`);
    }

    if (total_second < 10) {
      setSecond(`0${total_second}`);
    } else {
      setSecond(`${total_second}`);
    }
  };

  const countDown = () => {
    totalSecond -= 1;
    timeExpression(totalSecond);
    if (totalSecond === 0) {
      clearInterval(timer);
      alert('마감!');
    }
  };
  let timer = setInterval(countDown, 1000);

  return (
    <div className='daily-specials'>
      <div className='sample-content'>
        <h2 className='daily-specials-title'>일일특가</h2>
        <h3 className='daily-specials-24hours'>24시간 한정 특가</h3>
        <div className='timer'>
          <div className='timer-icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 36 36'
              width='36'
              height='36'
              preserveAspectRatio='xMidYMid meet'
              style={{
                width: ' 100%',
                height: '100%',
                transform: 'translate3d(0px, 0px, 0px)',
              }}
            >
              <defs>
                <clipPath id='__lottie_element_2'>
                  <rect width='36' height='36' x='0' y='0'></rect>
                </clipPath>
              </defs>
              <g clip-path='url(#__lottie_element_2)'>
                <g
                  transform='matrix(1,0,0,1,3.75,3.75)'
                  opacity='1'
                  style={{ display: ' block;' }}
                >
                  <g opacity='1' transform='matrix(1,0,0,1,14.25,14.25)'>
                    <path
                      fill='rgb(189,118,255)'
                      fill-opacity='1'
                      d=' M14,0 C14,7.73199987411499 7.73199987411499,14 0,14 C-7.73199987411499,14 -14,7.73199987411499 -14,0 C-14,-7.73199987411499 -7.73199987411499,-14 0,-14 C7.73199987411499,-14 14,-7.73199987411499 14,0z'
                    ></path>
                  </g>
                  <g opacity='1' transform='matrix(1,0,0,1,0,0)'>
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      fill-opacity='0'
                      stroke='rgb(255,255,255)'
                      stroke-opacity='1'
                      stroke-width='2'
                      d=' M14.25,8.293999671936035 C14.25,8.293999671936035 14.25,14.293999671936035 14.25,14.293999671936035'
                    ></path>
                  </g>
                  <g opacity='1' transform='matrix(1,0,0,1,0,0)'>
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      fill-opacity='0'
                      stroke='rgb(255,255,255)'
                      stroke-opacity='1'
                      stroke-width='2'
                      d=' M20.25,14.293999671936035 C20.25,14.293999671936035 14.25,14.293999671936035 14.25,14.293999671936035'
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div className='timer-time'>
            <span className='timer-hour'>{hour}</span>
            <span className='timer-minute'>{minute}</span>
            <span className='timer-second'>{second}</span>
          </div>
        </div>
        <p className='daily-specials-comment'>망설이면 늦어요!</p>
      </div>

      <div className='sample-content'>
        <a href='#' className='item'>
          <div className='item-image'>
            <img
              alt='상품 이미지'
              src='https://product-image.kurly.com/product/image/a1232bee-42f3-4ede-b031-ae42d2ff2051.jpg'
            />
            <button className='item-cart'>
              <img
                alt='장바구니 아이콘'
                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=='
              />
            </button>
            <div className='daily-specials-card'>일일특가</div>
          </div>
          <div className='item-info'>
            <div className='item-name'>[금미옥] 국물 떡볶이 & 무침 군만두</div>
            <div className='item-price'>
              <span className='item-discount-rate'>30%</span>
              <span className='item-price'>4,060원</span>
            </div>
            <div className='item-before-price'>5800원</div>
          </div>
          <div className='item-review'>
            <svg
              width='15px'
              height='15px'
              viewBox='0 0 14 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <mask id='path-1-inside-1_1513_17755' fill='white'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M3 2C1.89543 2 1 2.89543 1 4V8.67201C1 9.77658 1.89543 10.672 3 10.672H5.11212L6.33682 12.7653C6.5299 13.0954 7.00688 13.0954 7.19995 12.7653L8.42465 10.672H10.5C11.6046 10.672 12.5 9.77658 12.5 8.67201V4C12.5 2.89543 11.6046 2 10.5 2H3Z'
                ></path>
              </mask>
              <path
                fill='#999'
                d='M5.11212 10.672L5.97526 10.167L5.68564 9.67201H5.11212V10.672ZM6.33682 12.7653L5.47369 13.2703L5.47369 13.2703L6.33682 12.7653ZM7.19995 12.7653L6.33682 12.2604L6.33682 12.2604L7.19995 12.7653ZM8.42465 10.672V9.67201H7.85113L7.56152 10.167L8.42465 10.672ZM2 4C2 3.44772 2.44772 3 3 3V1C1.34315 1 0 2.34315 0 4H2ZM2 8.67201V4H0V8.67201H2ZM3 9.67201C2.44772 9.67201 2 9.22429 2 8.67201H0C0 10.3289 1.34315 11.672 3 11.672V9.67201ZM5.11212 9.67201H3V11.672H5.11212V9.67201ZM7.19995 12.2604L5.97526 10.167L4.24899 11.177L5.47369 13.2703L7.19995 12.2604ZM6.33682 12.2604C6.5299 11.9304 7.00688 11.9304 7.19995 12.2604L5.47369 13.2703C6.05291 14.2604 7.48386 14.2604 8.06309 13.2703L6.33682 12.2604ZM7.56152 10.167L6.33682 12.2604L8.06309 13.2703L9.28779 11.177L7.56152 10.167ZM10.5 9.67201H8.42465V11.672H10.5V9.67201ZM11.5 8.67201C11.5 9.22429 11.0523 9.67201 10.5 9.67201V11.672C12.1569 11.672 13.5 10.3289 13.5 8.67201H11.5ZM11.5 4V8.67201H13.5V4H11.5ZM10.5 3C11.0523 3 11.5 3.44772 11.5 4H13.5C13.5 2.34315 12.1569 1 10.5 1V3ZM3 3H10.5V1H3V3Z'
                mask='url(#path-1-inside-1_1513_17755)'
              ></path>
              <circle fill='#999' cx='4.34998' cy='6.17871' r='0.75'></circle>
              <circle fill='#999' cx='6.75' cy='6.17871' r='0.75'></circle>
              <circle fill='#999' cx='9.15002' cy='6.17871' r='0.75'></circle>
            </svg>
            후기
            <span className='item-review-num'>9999+</span>
          </div>
        </a>
      </div>
      <div className='sample-content'>
        <a href='#' className='item'>
          <div className='item-image'>
            <img
              alt='상품 이미지'
              src='https://product-image.kurly.com/product/image/ecc1bb0f-9d27-4bc2-aa7a-6c9e88f6c119.jpg'
            />
            <button className='item-cart'>
              <img
                alt='장바구니 아이콘'
                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=='
              />
            </button>
            <div className='daily-specials-card'>일일특가</div>
          </div>
          <div className='item-info'>
            <div className='item-name'>
              [레오나르디] 모데나산 발사믹 4메달(레드)-8년숙성
            </div>
            <div className='item-price'>
              <span className='item-discount-rate'>40%</span>
              <span className='item-price'>35,400원</span>
            </div>
            <div className='item-before-price'>50000원</div>
          </div>
          <div className='item-review'>
            <svg
              width='15px'
              height='15px'
              viewBox='0 0 14 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <mask id='path-1-inside-1_1513_17755' fill='white'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M3 2C1.89543 2 1 2.89543 1 4V8.67201C1 9.77658 1.89543 10.672 3 10.672H5.11212L6.33682 12.7653C6.5299 13.0954 7.00688 13.0954 7.19995 12.7653L8.42465 10.672H10.5C11.6046 10.672 12.5 9.77658 12.5 8.67201V4C12.5 2.89543 11.6046 2 10.5 2H3Z'
                ></path>
              </mask>
              <path
                fill='#999'
                d='M5.11212 10.672L5.97526 10.167L5.68564 9.67201H5.11212V10.672ZM6.33682 12.7653L5.47369 13.2703L5.47369 13.2703L6.33682 12.7653ZM7.19995 12.7653L6.33682 12.2604L6.33682 12.2604L7.19995 12.7653ZM8.42465 10.672V9.67201H7.85113L7.56152 10.167L8.42465 10.672ZM2 4C2 3.44772 2.44772 3 3 3V1C1.34315 1 0 2.34315 0 4H2ZM2 8.67201V4H0V8.67201H2ZM3 9.67201C2.44772 9.67201 2 9.22429 2 8.67201H0C0 10.3289 1.34315 11.672 3 11.672V9.67201ZM5.11212 9.67201H3V11.672H5.11212V9.67201ZM7.19995 12.2604L5.97526 10.167L4.24899 11.177L5.47369 13.2703L7.19995 12.2604ZM6.33682 12.2604C6.5299 11.9304 7.00688 11.9304 7.19995 12.2604L5.47369 13.2703C6.05291 14.2604 7.48386 14.2604 8.06309 13.2703L6.33682 12.2604ZM7.56152 10.167L6.33682 12.2604L8.06309 13.2703L9.28779 11.177L7.56152 10.167ZM10.5 9.67201H8.42465V11.672H10.5V9.67201ZM11.5 8.67201C11.5 9.22429 11.0523 9.67201 10.5 9.67201V11.672C12.1569 11.672 13.5 10.3289 13.5 8.67201H11.5ZM11.5 4V8.67201H13.5V4H11.5ZM10.5 3C11.0523 3 11.5 3.44772 11.5 4H13.5C13.5 2.34315 12.1569 1 10.5 1V3ZM3 3H10.5V1H3V3Z'
                mask='url(#path-1-inside-1_1513_17755)'
              ></path>
              <circle fill='#999' cx='4.34998' cy='6.17871' r='0.75'></circle>
              <circle fill='#999' cx='6.75' cy='6.17871' r='0.75'></circle>
              <circle fill='#999' cx='9.15002' cy='6.17871' r='0.75'></circle>
            </svg>
            후기
            <span className='item-review-num'>999+</span>
          </div>
        </a>
      </div>
      <div className='sample-content'>
        <a href='#' className='item'>
          <div className='item-image'>
            <img
              alt='상품 이미지'
              src='https://product-image.kurly.com/product/image/e8f3cc15-424b-4f5a-80fe-79efaa7baf43.jpg'
            />
            <button className='item-cart'>
              <img
                alt='장바구니 아이콘'
                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=='
              />
            </button>
            <div className='daily-specials-card'>일일특가</div>
          </div>
          <div className='item-info'>
            <div className='item-name'>
              [아벤느] 미셀라 로션 클렌징 워터 200ml
            </div>
            <div className='item-price'>
              <span className='item-discount-rate'>60%</span>
              <span className='item-price'>7,900원</span>
            </div>
            <div className='item-before-price'>20000원</div>
          </div>
          <div className='item-review'>
            <svg
              width='15px'
              height='15px'
              viewBox='0 0 14 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <mask id='path-1-inside-1_1513_17755' fill='white'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M3 2C1.89543 2 1 2.89543 1 4V8.67201C1 9.77658 1.89543 10.672 3 10.672H5.11212L6.33682 12.7653C6.5299 13.0954 7.00688 13.0954 7.19995 12.7653L8.42465 10.672H10.5C11.6046 10.672 12.5 9.77658 12.5 8.67201V4C12.5 2.89543 11.6046 2 10.5 2H3Z'
                ></path>
              </mask>
              <path
                fill='#999'
                d='M5.11212 10.672L5.97526 10.167L5.68564 9.67201H5.11212V10.672ZM6.33682 12.7653L5.47369 13.2703L5.47369 13.2703L6.33682 12.7653ZM7.19995 12.7653L6.33682 12.2604L6.33682 12.2604L7.19995 12.7653ZM8.42465 10.672V9.67201H7.85113L7.56152 10.167L8.42465 10.672ZM2 4C2 3.44772 2.44772 3 3 3V1C1.34315 1 0 2.34315 0 4H2ZM2 8.67201V4H0V8.67201H2ZM3 9.67201C2.44772 9.67201 2 9.22429 2 8.67201H0C0 10.3289 1.34315 11.672 3 11.672V9.67201ZM5.11212 9.67201H3V11.672H5.11212V9.67201ZM7.19995 12.2604L5.97526 10.167L4.24899 11.177L5.47369 13.2703L7.19995 12.2604ZM6.33682 12.2604C6.5299 11.9304 7.00688 11.9304 7.19995 12.2604L5.47369 13.2703C6.05291 14.2604 7.48386 14.2604 8.06309 13.2703L6.33682 12.2604ZM7.56152 10.167L6.33682 12.2604L8.06309 13.2703L9.28779 11.177L7.56152 10.167ZM10.5 9.67201H8.42465V11.672H10.5V9.67201ZM11.5 8.67201C11.5 9.22429 11.0523 9.67201 10.5 9.67201V11.672C12.1569 11.672 13.5 10.3289 13.5 8.67201H11.5ZM11.5 4V8.67201H13.5V4H11.5ZM10.5 3C11.0523 3 11.5 3.44772 11.5 4H13.5C13.5 2.34315 12.1569 1 10.5 1V3ZM3 3H10.5V1H3V3Z'
                mask='url(#path-1-inside-1_1513_17755)'
              ></path>
              <circle fill='#999' cx='4.34998' cy='6.17871' r='0.75'></circle>
              <circle fill='#999' cx='6.75' cy='6.17871' r='0.75'></circle>
              <circle fill='#999' cx='9.15002' cy='6.17871' r='0.75'></circle>
            </svg>
            후기
            <span className='item-review-num'>128</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default DailySpecilas;
