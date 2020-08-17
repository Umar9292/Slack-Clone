import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

const Login = () => {
    const [state, dispatch] = useStateValue();

    const signIn = async (e) => {
        try {
            const result = await auth.signInWithPopup(provider);
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        }
        catch (error) {
            alert(error.message)
        }  
    };

    return (
        <div className="login">
            <div className="login__container">
                <img
                  src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
                  alt=""
                />
                <h1>Sign in to Slack</h1>
                <p>slack.com</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login;
