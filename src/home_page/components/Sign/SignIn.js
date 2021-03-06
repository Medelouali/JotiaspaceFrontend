import React from 'react';
import SignUp from './SignUp';

function SignIn(){
    return(
        <SignUp args={["Log In", "Don't have an account !?"]}/>
    );
}

export default SignIn;