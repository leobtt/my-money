import React from 'react'
import usePost from '../hooks/usePost'

// const baseURL = 'https://mymoney-l-default-rtdb.firebaseio.com/'
const url =
  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAHvc0ac3U9O9A0iqSn49UjMN2i4S0A16g'
console.log(process.env.LOGIN_URL, 'password', process.env.PASSWORD)

const Login = () => {
  const [postData, postLogin] = usePost(url)
  const login = async () => {
    await postLogin({
      email: 'leonarbat8@gmail.com',
      password: 'batista123',
      returnSecureToken: true,
    })
  }
  return (
    <>
      <button onClick={login}>Login page</button>
    </>
  )
}

export default Login
