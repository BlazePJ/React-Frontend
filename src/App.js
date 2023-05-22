import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/TopBar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Dashboard from './scenes/dashboard/index'
import SideBar from './scenes/global/SideBar'
import { ProSidebarProvider } from "react-pro-sidebar";
import FormPage from "./scenes/form/FormPage";
import ContactInformation from "./scenes/contact/ContactInformation";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>
        <div className="app">
        <SideBar  />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path='/form' element={<FormPage />} />
              <Route path='/contact-information' element={<ContactInformation />} />
             
            </Routes>
          </main>
        </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}


export default App;