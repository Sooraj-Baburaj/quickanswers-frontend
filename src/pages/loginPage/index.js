import AuthSwitch from '@/src/components/AuthSwitch'
import Input from '@/src/components/Input'
import AuthWidget from '@/src/widget/authWidget'
import React from 'react'

const LoginPage = () => {
    return (
        <AuthWidget>
            <AuthSwitch/>
            <div className="w-full relative flex flex-col">
                <Input label={'Email'} name={'emil'} type={'email'} placeholder={'Enter email address'} />
            </div>
            <div className="w-full relative flex flex-col">
                <Input label={'Password'} name={'password'} type={'password'} placeholder={'Enter email address'} />
            </div>

        </AuthWidget>
    )
}

export default LoginPage