import React, { useState } from 'react';
import InputField from './LoginInputField';
import { Link } from 'react-router-dom';

function RegisterForm({ onRegister }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePasswordLength = (password) => {
    return password.length >= 4
  }

  const validatePassword = (password, confirm) => {
    return password === confirm
  }

  const validateNameLength = (name) => {
    return name.length > 0
  }

  // 폼 제출시 실행할 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(credentials.email)) {
      alert('유효하지 않은 이메일 주소입니다.')
      return
    }
    if (!validatePasswordLength(credentials.password)) {
      alert('비밀번호의 길이는 적어도 4글자 이상이어야 합니다.')
      return
    }
    if (!validatePassword(credentials.password, credentials.confirmPassword)) {
      alert('비밀번호와 비밀번호 확인이 같지 않습니다.')
      return
    }
    if (!validateNameLength(credentials.name)) {
      alert('이름은 비워둘 수 없습니다.')
      return
    }
    onRegister({ [credentials.email]: {
      password: credentials.password,
      name: credentials.name
    }});
    alert('회원가입 성공!')
  };

  const inputFieldArgs = ['id', 'type', 'name', 'placeholder', 'value', 'onChange']
  const detailArgs = [
    ["email", "text", "email", "이메일", credentials.email, handleChange],
    ["password", "password", "password", "비밀번호", credentials.password, handleChange],
    ["confirmPassword", "password", "confirmPassword", "비밀번호확인", credentials.confirmPassword, handleChange],
    ["name", "text", "name", "이름", credentials.name, handleChange],
  ]
  const content = detailArgs.map(item => {
    let ret = {}
    for (let i = 0; i < inputFieldArgs.length; i++)
      ret[inputFieldArgs[i]] = item[i]
    return ret
  })

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>회원가입</h1>
      <form onSubmit={handleSubmit}>
        {content.map(item => (
          <InputField {...item}/>
        ))}
        <div className='centered-container'>
          <button
            type='submit'
            className='rounded-button'>
            회원가입
          </button>
        </div>
      </form>
      <div className='centered-container'>
        <Link to="/login" className='text-style'>
          계정이 있으신가요?
        </Link>
      </div>
    </div>
  );
}

export default RegisterForm;
