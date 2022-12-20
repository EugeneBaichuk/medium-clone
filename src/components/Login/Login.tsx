import React, { useState } from 'react';
import Form from 'components/Form/Form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from 'store/userSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from 'hooks/redux-hooks';
import axios from 'axios';
import { request } from 'http';


const Login: React.FC = () => {

  const dispatch = useAppDispatch()
  const push = useNavigate()

  // const handleLogin = (email: string, password: string, name: string) => {

  //   const auth = getAuth()
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then(({ user }) => {
  //       // console.log(user);
  //       dispatch(
  //         setUser({
  //           email: user.email,
  //           id: user.uid,
  //           token: user.refreshToken,
  //           nameUser: name,
  //         }),
  //       )
  //       push('/')
  //     })
  //     .catch(() => '')
  // }

  const [userError, setUserError] = useState<string>('');
  const [userEmailError, setUserEmailError] = useState<string>('');

  const baseUrl = 'https://conduit.productionready.io/api/users/login'
  const registerUser = async () => {

    const userLoc = localStorage.getItem('token') || '{}'
    const user = JSON.parse(userLoc)
    console.log(user.token,user.email,
      user.password)

    await axios
      .post(baseUrl,{
        email: user.email ,
        // password:user.password,
        token: user.token,
        // username:user.username
      }).then((response) => console.log(response)
      ).catch((err) => {
        console.log(err)
      })
  }

  return (
    <Form
      title='Sign in'
      error='email or password is invalid'
      titleButton="Sign in"
      subTitle='Need an account?'
      handlClick={registerUser}
      userError={userError}
      userEmailError={userEmailError}
    />
  )
}

export default Login
