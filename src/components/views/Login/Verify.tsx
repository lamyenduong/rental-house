import React from 'react'
import './Login.css'
import logo from '../../../assets/images/Logo.png'
import Input from '../../master-components/Input'
import Button from '../../master-components/Button'
import { Colors } from '../../common/commons'
import { useTranslation } from 'react-i18next'

const Verify = () => {
    const { t } = useTranslation();

    return (
        <div className='login__frame bg-no-repeat bg-cover bg-center h-screen fixed flex w-screen justify-center items-center'>
            <div className='w-full flex max-w-screen-xl'>
                <div className='relative flex-1 text-center w-1/2 my-auto'>
                    <div className='uppercase mb-7 text-2xl'>{t(`LoginPage.secondTitle`)}</div>
                    <img className='mx-auto' src={logo} alt="logo" width={80} />
                    <div className='uppercase mt-7 text-2xl logo'>{t(`General.logo`)}</div>
                </div>
                <div className='relative flex-1 text-center w-1/2 '>
                    <div className='uppercase text-2xl mb-8'>{t(`LoginPage.fourthTitle`)}</div>
                    <div className='w-2/3 text-start mb-4 mx-auto' style={{ color: Colors.newgrowth }}>{t(`LoginPage.verifyMessage`)}</div>
                    <div className='mb-5 w-2/3 mx-auto'><Input placeholder={t(`InputPlaceholder.code`)} /></div>
                    <div className='mt-3 w-2/3 mx-auto'><Button className='uppercase' variant='default'>{t(`ButtonLabel.confirm`)}</Button></div>
                </div>
            </div>
        </div>
    )
}

export default Verify