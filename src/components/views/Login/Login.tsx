import React, { useState } from 'react'
import './Login.css'
import logo from '../../../assets/images/Logo.png'
import { ArrowLeft } from 'lucide-react';
import Input from '../../master-components/Input'
import Button from '../../master-components/Button'
import { Colors } from '../../common/commons'
import { useTranslation } from 'react-i18next'
import { GetAuthorized } from '../../controllers/Core/Authentication'

const Login = ({ checkAuth }: any) => {
  const [isResetPassword, setIsResetPassword] = useState(false)
  const { t } = useTranslation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  var authResult = GetAuthorized(username, password)

  const handleLogin = () => {
    checkAuth(authResult)
  }

  const handleResetClick = (event: any) => {
    event.preventDefault()
    setIsResetPassword(true)
  };

  const handleResetClickBack = () => {
    setIsResetPassword(false)
  };

  return (
    <div className='login__frame bg-no-repeat bg-cover bg-center h-screen fixed flex w-screen justify-center items-center'>
      <div className='w-full flex max-w-screen-xl h-full'>
        <div className='relative flex-1 text-center w-1/2 my-auto'>
          <div className='uppercase mb-7 text-2xl'>{t(`LoginPage.secondTitle`)}</div>
          <img className='mx-auto' src={logo} alt="logo" width={80} />
          <div className='uppercase mt-7 text-2xl logo'>{t(`General.logo`)}</div>
        </div>
        {isResetPassword ? (
          <div className='relative flex-1 text-center w-1/2 m-auto'>
            <div className='w-2/3 mx-auto'><ArrowLeft className='mb-10 cursor-pointer' onClick={handleResetClickBack} /></div>
            <div className='uppercase text-2xl mb-8 mt-10'>{t(`LoginPage.thirdTitle`)}</div>
            <div className='w-2/3 text-start mb-4 mx-auto' style={{ color: Colors.newgrowth }}>{t(`LoginPage.resetMessage`)}</div>
            <div className='mb-5 w-2/3 mx-auto'><Input placeholder={t(`InputPlaceholder.email`)} /></div>
            <div className='mt-3 w-2/3 mx-auto'><Button className='uppercase' variant='default'>{t(`ButtonLabel.confirm`)}</Button></div>
          </div>
        ) :
          (
            <div className='relative flex-1 text-center w-1/2 m-auto'>
              <div className='uppercase text-2xl mb-8'>{t(`LoginPage.firstTitle`)}</div>
              <div className='mb-5 w-2/3 mx-auto'><Input placeholder={t(`InputPlaceholder.username`)} onChange={handleUsernameChange} /></div>
              <div className='w-2/3 mx-auto'><Input placeholder={t(`InputPlaceholder.password`)} type='password' onChange={handlePasswordChange} /></div>
              <div className='w-2/3 text-right mt-3 mx-auto'><a style={{ color: Colors.newgrowth }} className='capitalize' href='/' onClick={handleResetClick}>{t(`LoginPage.forgotMessage`)}</a></div>
              <div className='mt-3 w-2/3 mx-auto'><Button className='uppercase' onClick={handleLogin} variant='default'>{t(`ButtonLabel.login`)}</Button></div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Login