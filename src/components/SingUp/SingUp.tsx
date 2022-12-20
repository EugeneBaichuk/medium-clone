import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'components/Form/Form';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {setUser} from 'store/userSlice'
import { useAppDispatch } from 'hooks/redux-hooks';
import axios from 'axios';
import { request } from 'https';


interface Users {
    email: string,
    password: string,
    username: string,
    token: string,
}

const SingUp:React.FC = () => {


    const dispatch = useAppDispatch();
    const push = useNavigate();



    // const usersArr = localStorage.getItem('users') || [];
    const [userError, setUserError] = useState<string>('');
    const [userEmailError, setUserEmailError] = useState<string>('');

    const baseUrl = 'https://conduit.productionready.io/api/users'
    const registerUser = async (email: string, pass: string, name: string,) => {

        const user = {
            email: email,
            password: pass,
            username: name,
            token: '',
        }
       await axios
            .post(baseUrl, {
                user
            }).then((data) => {
                console.log(data)

                user.token = data.data.user.token
                // usersArr.push(user);
                localStorage.setItem('token',JSON.stringify(user))
                const tok = localStorage.getItem('token') || '{}'
                console.log(JSON.parse(tok))
                console.log(user)

            }).catch((err) => {
                console.log(err)
                setUserError(err.response.data.errors.email[0])
                setUserEmailError(err.response.data.errors.email[0])
                // console.log(userError)
            })
    }
    // const tok = localStorage.getItem('token') || "{}"
    // console.log(JSON.parse(tok))
    // const tik =  JSON.parse(tok)
    //             console.log(tik.token)
    return (
        <Form
        title='Register'
        error= 'email or password is invalid'
        titleButton='Register'
        subTitle='Have an account?'
        handlClick={registerUser}
        userError = {userError}
        userEmailError={userEmailError}
        />
    );
};

export default SingUp;

function RootState(arg0: { email: string | null; id: string; token: any; nameUser: string; }): any {
    throw new Error('Function not implemented.');
}
