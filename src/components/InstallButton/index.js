import React, { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 *
 * Componente que oferece o botão de download na tela iniciar
 */

const InstallButton = () => {
  const [installPromptEvent, setInstallPromptEvent] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setInstallPromptEvent(event);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = () => {
    if (installPromptEvent) {
      installPromptEvent.prompt();
      //se o app já foi instalado desativa botão
      //setInstallPromptEvent(null);
    }
  };

  const notify = () => {
    return toast.info(
      <>
        <button onClick={handleInstallClick}>Instale o IMPATT!</button>
      </>,
      {
        toastId: "customId",
        delay: 3500, //tempo para surgir na tela
      }
    );
  };

  return (
    <div>
      {installPromptEvent && (
        <>
          {notify()}
          );
          <ToastContainer autoClose={9000} />
        </>
      )}
    </div>
  );
};

export default InstallButton;
