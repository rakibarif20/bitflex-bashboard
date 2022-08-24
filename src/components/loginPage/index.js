import React from 'react'

import loginLogo from '../../images/loginLogo.png';
import loginText from '../../images/loginWhiteText.png';

import './style.scss';

const Login = () => {
  return (
    <section className='login' id='login'>
        <div className='login__logoArea'>
            <a href='#'>
                <img src={loginLogo} alt='login logo' />
                <img src={loginText} alt='login text' />
            </a>
        </div>
        <div className='login__formArea'>
            <form>
                <h3>Login</h3>
                <p>Continue to Login</p>
                <div className='login__formArea__field'>
                    <label>Phone Number</label>
                    <input type='text' placeholder='Enter Phone Number'/>
                </div>
                <div className='login__formArea__field'>
                    <label>Password</label>
                    <input type='text' placeholder='*******'/>
                </div>
                <button>Login</button>
            </form>
        </div>
    </section>
  )
}

export default Login;