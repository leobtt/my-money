import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import usePost from '../hooks/usePost'

const url =
  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAHvc0ac3U9O9A0iqSn49UjMN2i4S0A16g'

const Login = () => {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  })
  const [postData, postLogin] = usePost(url)

  useEffect(() => {
    if (Object.keys(postData.data).length > 0) {
      localStorage.setItem('token', postData.data.idToken)
    }
  }, [postData])

  if (postData.data.idToken) {
    return <Navigate replace to="/" />
  }

  const handleChange = (evt) => {
    setLogin({
      ...login,
      [evt.target.name]: evt.target.value,
    })
  }

  const logIn = async () => {
    await postLogin({
      email: login.email,
      password: login.password,
      returnSecureToken: true,
    })
  }
  return (
    <>
      <input
        type="text"
        placeholder="e-mail"
        name="email"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Senha"
        name="password"
        onChange={handleChange}
      />
      <button type="button" onClick={logIn}>
        Login page
      </button>
      {postData.error === 'INVALID_PASSWORD' && <p>usuário inválido</p>}
      <p>{JSON.stringify(login, null, 4)}</p>
      <br></br>
      <p>{JSON.stringify(postData.error, null, 4)}</p>
    </>
  )
}

export default Login
