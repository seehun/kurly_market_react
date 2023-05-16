import { React, useState } from 'react';
import './login.css';
import { useDispatch } from 'react-redux';
import { loginUser } from '../_actions/user_action';
import { useNavigate } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const onIdHandler = (e) => {
    setId(e.currentTarget.value);
  };
  const onPwHandler = (e) => {
    setPw(e.currentTarget.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    let body = {
      id: id,
      pw: pw,
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        navigate('/');
      } else {
        alert('error');
      }
    });
  };

  return (
    <>
      <form className='login-form' onSubmit={onSubmitHandler}>
        <div>로그인</div>
        <input
          type='text'
          value={id}
          placeholder='아이디 입력'
          onChange={onIdHandler}
        />
        <input
          type='password'
          value={pw}
          placeholder='비밀번호 입력'
          onChange={onPwHandler}
        />
        <button>로그인</button>
        <a href='/register'>회원가입</a>
      </form>
    </>
  );
}

export default Login;
