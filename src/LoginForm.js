import React, { useState } from 'react';
import InputField from './LoginInputField';
import { Link } from 'react-router-dom';

function LoginForm({ accounts }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    name: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let password = accounts[credentials.email]
    if (!password) {
      alert('존재하지 않는 이메일입니다.')
      return
    }
    if (password['password'] !== credentials.password) {
      alert('비밀번호가 틀렸습니다.')
      return
    }
    alert("로그인 성공!")
  }

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
