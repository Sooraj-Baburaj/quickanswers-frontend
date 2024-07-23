import React, { useEffect, useState } from 'react'

export const useModal = (show) => {
    const [animStatus, setAnimStatus] = useState(false);
    const toggleAnim = () => setAnimStatus(prev => !prev)
    useEffect(() => { show && toggleAnim(); }, [show]);
    return {
        toggleAnim,
        animStatus
    }
}
