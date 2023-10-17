import { useState } from 'react';
import { useEffect } from 'react';
import { Fragment } from 'react';
import './signUpPage.css'


function ErrorBox({props}){
    const [errorStates, setErrorStates] = useState({...props});
    useEffect(() => {
        setErrorStates({...props})
    }, [props])

    return (
    <>
        <div className='Signup-error-box'>
            <ul>
                <li><p className={errorStates.emailError ? "Signup-red-text" : "Signup-black-text"}>Email must be of valid syntax</p></li>
                <li><p className={errorStates.userNameError ? "Signup-red-text" : "Signup-black-text"}>Username must be three letters or greater</p></li>
                <li><p className={errorStates.passwordError ? "Signup-red-text" : "Signup-black-text"}>Password must be eight letters or greater</p></li>
                <li><p className={errorStates.verifyPassError ? "Signup-red-text" : "Signup-black-text"}>Passwords must match</p></li>
            </ul>
        </div>
    </>
    )
}

function SignUpPage (){
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPass, setVerifyPass] = useState('');
    const [showError, setShowError] = useState({
        emailError: true,
        emailErrorMsg: 'Invalid Format',
        passwordError:true,
        passwordErrorMsg: 'Min Length: 8',
        userNameError:true,
        userNameErrorMsg: 'Min Lenght: 3',
        verifyPassError: true,
        verifyPassErrorMsf: "Does not match password"
    });

    function validateEmail(e){
        var re = /\S+@\S+\.\S+/;
        if(e.target.value == ''){
            setShowError({...showError,emailError:false});
        }
        else if(re.test(e.target.value) == true){
            setShowError({...showError,emailError:false});
        }
        else{
            setShowError({...showError,emailError:true,emailErrorMsg: 'Invalid Format'});
        }

        setEmail(e.target.value);
    }

    function validateUserName(e){
        let val = e.target.value;
        if(val == ''){
            setShowError({...showError,userNameError:false});
        }
        else if(val.length < 3){
            setShowError({...showError,userNameError:true,userNameErrorMsg: 'Min Lenght: 3'});
        }
        else{
            setShowError({...showError,userNameError:false});
        }
        setUserName(val);
    }

    function validatePassword(e){
        let val = e.target.value;
        if(val == ''){
            setShowError({...showError,passwordError:true});
        }
        else if(val.length < 8){
            setShowError({...showError,passwordError:true, passwordErrorMsg: 'Min Length: 8'});
        }
        else {
            setShowError({...showError,passwordError:false});
        }
        setPassword(val);
    }

    function validateVerifyPassword(e){
        let val = e.target.value;
        if(val == ''){
            setShowError({...showError,verifyPassError:false});
        }
        else if(val !== password){
            setShowError({...showError,verifyPassError:true});
        }
        else if(val == password){
            setShowError({...showError,verifyPassError:false});
        }
        setVerifyPass(val);
    }

    return (
    <>
        <div className="Signup-main-container">
            <ErrorBox props={{...showError}}></ErrorBox>
            <div className='Signup-signup-container'>
                <div className='Signup-signup-main-content'> 
                    <p className='Signup-signup-title'>QwickChat</p> 
                    <div className='Signup-input-field-wrapper'>
                        <input type='text' className='Signup-text-input' required onChange={(e) => {validateEmail(e)}}></input>
                        <span class="Signup-input-title">Email</span>
                    </div>
                    <div className='Signup-input-field-wrapper'>
                        <input type='text' className='Signup-text-input' required onChange={(e) => {validateUserName(e)}}></input>
                        <span class="Signup-input-title">Username</span>
                    </div>
                    <div className='Signup-input-field-wrapper'>
                        <input type='text' className='Signup-text-input' required onChange={(e) => {validatePassword(e)}}></input>
                        <span class="Signup-input-title">Password</span>
                    </div>
                    <div className='Signup-input-field-wrapper'>
                        <input type='text' className='Signup-text-input' required onChange={(e) => {validateVerifyPassword(e)}}></input>
                        <span class="Signup-input-title">Verify Password</span>
                    </div> 
                    <input type="button" value={"Sign Up"} id="Signup-button" disabled={(showError.passwordError || showError.emailError || showError.userNameError || showError.verifyPassError)}></input>  
                </div>
            </div>
        </div>
    </>)

}

export default SignUpPage;