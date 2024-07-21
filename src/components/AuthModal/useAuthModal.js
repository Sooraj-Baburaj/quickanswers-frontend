import { useState } from "react"

export const useAuthModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentView, setCurrentView] = useState('login');
    const toggleModal = (view) => {
        setShowModal(prev => !prev)
        setCurrentView(view)
    }
    return {
        showModal,
        toggleModal,
        currentView
    }
}
