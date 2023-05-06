import React from 'react';
import { useState, useEffect, useRef } from 'react';

function MainImg() {
  // js 코딩 필요
  let banner_images = [
    [
      'https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/1e97c25c-b29e-4ae9-a3c6-281fdab06f39.jpg',
      1,
    ],
    [
      'https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/eb19db69-dd28-4d6d-b0ee-69e8bf05323d.jpg',
      2,
    ],
    [
      'https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/80ecd564-e0cd-4935-b7ed-5f0c4268adef.jpg',
      3,
    ],
  ];
  banner_images = [
    ...banner_images,
    [
      'https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/6dd20495-01e5-48c4-9d9e-ec71b066668e.jpg',
      4,
    ],
  ];

  const [image, setImage] = useState(0);
  const [mainImage, setMainImage] = useState(banner_images[0][0]);
  const [currentImageNum, setCurrentImageNum] = useState(1);
  const [totalImageNum, setTotalImageNum] = useState(banner_images.length);
  const slide = useRef();
  useEffect(() => {
    slide.current = setInterval(() => {
      setImage((image) => (image + 1) % 4);
    }, 1000);

    return () => {
      clearInterval(slide.current);
    };
  }, []);

  useEffect(() => {
    setMainImage(banner_images[image][0]);
    setCurrentImageNum(banner_images[image][1]);
  }, [image]);

  const imgLeft = () => {
    clearInterval(slide.current);
    if (image === 0) {
      setImage(totalImageNum - 1);
    } else {
      setImage((image - 1) % totalImageNum);
    }
    slide.current = setInterval(() => {
      setImage((image) => (image + 1) % totalImageNum);
    }, 1000);
  };

  const imgRight = () => {
    clearInterval(slide.current);
    if (image === totalImageNum - 1) {
      setImage(0);
    } else {
      setImage((image + 1) % totalImageNum);
    }
    slide.current = setInterval(() => {
      setImage((image) => (image + 1) % totalImageNum);
    }, 1000);
  };

  return (
    <div className='main-image'>
      <button className='main-image-btn left-btn' onClick={imgLeft}>
        {'<'}
      </button>
      <button className='main-image-btn right-btn' onClick={imgRight}>
        {'>'}
      </button>
      <a href='#' className='main-image-content'>
        <img alt='메인배너' id='main-image' src={mainImage} />
      </a>
      <div className='image-num'>
        <span className='current-image-num'>{currentImageNum}</span>/
        <span className='total-image-num'>{totalImageNum}</span>
      </div>
    </div>
  );
}

export default MainImg;
