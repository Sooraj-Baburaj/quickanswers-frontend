"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Portal from '../Portal';
import { useModal } from './useModal';

const Modal = ({ handleClose, show = false, children }) => {
    const { toggleAnim, animStatus } = useModal(show)
    return (
        <div>

            <Portal selector={'portal'} show={animStatus}>
                <AnimatePresence onExitComplete={toggleAnim}>

                    {show && (
                        <motion.div
                            initial={{ opacity: 0, scale: .92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: .92 }}
                            className="fixed left-[0px] top-[0px] w-full z-[99999] h-full pointer-events-none flex justify-center items-center p-[16px] lg:p-[20px]"
                        >

                            {children}
                        </motion.div>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {show && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={handleClose}
                            className="fixed left-[0px] top-[0px] w-full h-full bg-black opacity-1 z-[9999] bg-opacity-60"
                        ></motion.div>)}
                </AnimatePresence>

            </Portal>
        </div>
    )
}

export default Modal