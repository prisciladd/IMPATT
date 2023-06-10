import React, { useEffect, useState } from 'react';
import DesktopTable from "../DesktopTable";
import MobileTable from "../MobileTable";

function Content() {
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  console.log(windowWidth);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 900px)');
    
    const handleResize = (e) => {
      setWindowWidth(window.innerWidth);      
      setIsMobile(e.matches);
    };
  
    handleResize(mediaQuery); // Verificar o estado inicial
  
    mediaQuery.addEventListener('change', handleResize);
  
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);
  

  return (
    
      <div>
        <div className="table-container">
          {isMobile ? <MobileTable /> : <DesktopTable />}
        </div>
      </div>
    
  );
}

export default Content;
