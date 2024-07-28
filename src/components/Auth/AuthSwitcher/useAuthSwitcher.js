import { useState } from "react";

export const useAuthSwitcher = ({ authView }) => {
  const [currentView, setCurrentView] = useState(authView);
  const changeView = (view) => setCurrentView(view);
  return {
    currentView,
    changeView,
  };
};
