import React, { useState } from 'react';
import InputField from './LoginInputField';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // 폼 제출시 실행할 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Credentials:', credentials);
  };

  const inputFieldArgs = ['id', 'type', 'name', 'placeholder', 'value', 'onChange']
  const detailArgs = [
    ["email", "text", "email", "이메일", credentials.email, handleChange],
    ["password", "password", "password", "비밀번호", credentials.password, handleChange],
  ]
  const content = detailArgs.map(item => {
    let ret = {}
    for (let i = 0; i < inputFieldArgs.length; i++)
      ret[inputFieldArgs[i]] = item[i]
    return ret
  })

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>로그인</h1>
      <form onSubmit={handleSubmit}>
        {content.map(item => (
          <InputField {...item}/>
        ))}
        <div className='centered-container'>
          <button
            type='submit'
            className='rounded-button'>
            로그인
          </button>
        </div>
      </form>
      <div className='centered-container'>
        <Link to="/register" className='text-style'>
          계정이 없으신가요?
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
