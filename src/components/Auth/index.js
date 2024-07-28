"use client";
import React from "react";
import { useAuthModal } from "./useAuthModal";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import AuthSwitcher from "./AuthSwitcher";

const AuthModal = () => {
  const { showModal, toggleModal, currentView } = useAuthModal();
  return (
    <div className="w-auto flex space-x-lg ml-auto">
      <Button type="secondary" onClick={() => toggleModal("login")}>
        login
      </Button>
      <Button type="primary" onClick={() => toggleModal("sign_up")}>
        Sign Up
      </Button>
      <Modal show={showModal} handleClose={toggleModal}>
        <AuthSwitcher authView={currentView} />
      </Modal>
    </div>
  );
};

export default AuthModal;
