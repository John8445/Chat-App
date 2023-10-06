import { useState } from 'react';
import { useEffect } from 'react';
import { Fragment } from 'react';


function SignupPage (){
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassWord] = useState('');
    const [verifyPass, setVerifyPass] = useState('');
    const [showError, setShowError] = useState({
        emailError: false,
        emailErrorMsg: 'Invalid Format',
        passwordError:false,
        passwordErrorMsg: 'Min Length: 8',
        userNameError:false,
        userNameErrorMsg: 'Min Lenght: 3',
        verifyPassError: false,
        verifyPassErrorMsf: "Does not match password"
    });


    return (
    <>
        <div className="Signup-main-container">
            <div className='Signup-signup-container'>
                <div className='Signup-signup-main-content'> 
                    <p className='Signup-signup-title'>QwickChat</p> 
                    <div className='Signup-input-field-wrapper'>
                        <input type='text'></input>
                    </div>
                    <div className='Signup-input-field-wrapper'>
                        <input type='text'></input>
                    </div>
                    <div className='Signup-input-field-wrapper'>
                        <input type='text'></input>
                    </div>
                    <div className='Signup-input-field-wrapper'>
                        <input type='text'></input>
                    </div>   
                </div>
            </div>
        </div>
    </>)

}

export default SignupPage;