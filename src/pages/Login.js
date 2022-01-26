import React, { useEffect } from 'react'
import usePost from '../hooks/usePost'

const url =
  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAHvc0ac3U9O9A0iqSn49UjMN2i4S0A16g'

const Login = () => {
  const [postData, postLogin] = usePost(url)

  useEffect(() => {
    if (Object.keys(postData.data).length > 0) {
      localStorage.setItem('token', postData.data.idToken)
      console.log('logou')
    }
  }, [postData])

  const login = async () => {
    await postLogin({
      email: 'leonarbat8@gmail.com',
      password: '',
      returnSecureToken: true,
    })
  }
  return (
    <>
      <button onClick={login}>Login page</button>
      <p>{JSON.stringify(postData, null, 4)}</p>
    </>
  )
}

export default Login
