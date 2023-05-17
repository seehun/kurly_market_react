import React from 'react';
import styled from 'styled-components';

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

function Register() {
  return (
    <>
      <SimpleButton>simple</SimpleButton>
      <LargeButton>large</LargeButton>
      <ReactButton>reactButton</ReactButton>
      <ReactLargeButton>reactLargeButton</ReactLargeButton>

      <PrimaryButton>false</PrimaryButton>
      <PrimaryButton primary>True</PrimaryButton>
      {/* primary 속성을 주면 props.primary값이 true */}
    </>
  );
}

export default Register;
