import React from 'react';
import styled from 'styled-components';
import './Register.css';

const SimpleButton = styled.button`
  border: 1px solid black;
  background-color: red;
  color: #fff;
`;

const LargeButton = styled(SimpleButton)`
  font-size: 50px;
`;

const ReactButton = (props) => {
  console.log(props);
  return <button className={props.className}>{props.children}</button>;
};

const ReactLargeButton = styled(ReactButton)`
  font-size: 50px;
`;

const PrimaryButton = styled.button`
  color: ${function (props) {
    //함수의 인자로 props를 받기를 약속되어있다
    if (props.primary) {
      return 'red';
    } else {
      return 'black';
    }
  }};
  background-color: ${(props) => (props.primary ? 'black' : 'white')};
`;

// function Register() {
//   return (
//     <>
//       <SimpleButton>simple</SimpleButton>
//       <LargeButton>large</LargeButton>
//       <ReactButton>reactButton</ReactButton>
//       <ReactLargeButton>reactLargeButton</ReactLargeButton>

//       <PrimaryButton>false</PrimaryButton>
//       <PrimaryButton primary>True</PrimaryButton>
//       {/* primary 속성을 주면 props.primary값이 true */}
//     </>
//   );
// }

const Inputinput = styled.input`
  flex-grow: 3;
  flex-basis: 0;
  height: 46px;
  padding: 0px 11px 1px 15px;
  border-radius: 4px;
  border: 1px solid rgb(221, 221, 221);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: rgb(51, 51, 51);
  outline: none;
  margin-right: 9px;
  &:focus {
    border: 1px solid black;
  }
`;

const DuplicationButton = styled.button`
  flex-grow: 1;
  flex-basis: 0;
  padding: 0 10px;
  height: 44px;
  border-radius: 3px;
  color: rgb(95, 0, 128);
  border: 1px solid rgb(95, 0, 128);
  font-weight: 600;
`;

const Gap = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  padding: 0 10px;
  height: 44px;
`;

const CertificationButton = styled.button`
  flex-grow: 1;
  flex-basis: 0;
  padding: 0 10px;
  height: 44px;
  border-radius: 3px;
  font-weight: 600;
  border-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
`;

const InputComponent = (props) => {
  let button;
  if (props.section_button === '중복확인') {
    button = <DuplicationButton>중복확인</DuplicationButton>;
  } else if (props.section_button === '') {
    button = <Gap></Gap>;
  } else if (props.section_button === '인증번호 받기') {
    button = <CertificationButton>인증번호 받기</CertificationButton>;
  }

  return (
    <div className={props.className}>
      <div className='input-content'>
        {props.section}
        <span className='star'>*</span>
      </div>
      <Inputinput type='text' placeholder={props.section_placeholder} />
      {button}
    </div>
  );
};
const InputTmp = styled(InputComponent)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  justify-content: space-around;
  font: 14px;
  color: #333;
`;

function Register() {
  return (
    <>
      <div className='contents'>
        <h2 className='register-title'>회원가입</h2>
        <div className='register-essential'>
          <span className='star'>*</span> 필수 입력사항
        </div>
        <InputTmp
          section='아이디'
          section_placeholder='아이디를 입력해주세요'
          section_button='중복확인'
        />
        <InputTmp
          section='비밀번호'
          section_placeholder='비밀번호를 입력해주세요'
          section_button=''
        />
        <InputTmp
          section='비밀번호확인'
          section_placeholder='비밀번호를 한번 더 입력해주세요'
          section_button=''
        />
        <InputTmp
          section='이름'
          section_placeholder='이름을 입력해주세요.'
          section_button=''
        />
        <InputTmp
          section='이메일'
          section_placeholder='예: shoon199@naver.com'
          section_button='중복확인'
        />
        <InputTmp
          section='휴대폰'
          section_placeholder='숫자만 입력해주세요'
          section_button='인증번호 받기'
        />
      </div>
    </>
  );
}

export default Register;
