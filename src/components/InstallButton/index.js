import React, { useEffect, useState } from "react";

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
      setInstallPromptEvent(null);
    }
  };
  console.log(installPromptEvent);
  return (
    <div>
      {installPromptEvent && (
        <button onClick={handleInstallClick}>Instalar</button>
      )}
    </div>
  );
};

export default InstallButton;
