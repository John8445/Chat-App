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
                        <span class="Signup-input-title">Email</span>
                    </div>
                    <div className='Signup-input-field-wrapper'>
                        <input type='text'></input>
                        <span class="Signup-input-title">Username</span>
                    </div>
                    <div className='Signup-input-field-wrapper'>
                        <input type='text'></input>
                        <span class="Signup-input-title">Password</span>
                    </div>
                    <div className='Signup-input-field-wrapper'>
                        <input type='text'></input>
                        <span class="Signup-input-title">Verify Password</span>
                    </div>
                </div>
                <div className='Signup-error-box'>

                </div>
            </div>
            <div className='Signup-error-msg-container'>

            </div>
        </div>
    </>)

}

export default SignupPage;