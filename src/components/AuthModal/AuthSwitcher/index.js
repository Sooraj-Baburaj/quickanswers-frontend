import React from 'react'
import LoginView from '../LoginView'
import { useAuthSwitcher } from './useAuthSwitcher'
import SignUpView from '../SignUpView'
import ForgetPasswordView from '../ForgetPasswordView'
import AuthSwitch from '../AuthSwitch'


const views = {
    'login': <LoginView />,
    'sign_up': <SignUpView />,
    'forget_password': <ForgetPasswordView />,
}

const AuthSwitcher = ({ authView = 'login' }) => {
    const { changeView, currentView } = useAuthSwitcher({ authView })

    return (
        <div className="w-full flex flex-col items-center bg-white max-w-[400px] p-[20px] rounded-md pointer-events-auto">
            <AuthSwitch changeView={changeView} activeTab={currentView} />
            {views[currentView]}
        </div>
    )
}

export default AuthSwitcher