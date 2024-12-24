import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { theme } from './Theme.tsx'
import { CssBaseline } from '@mui/material'
import App from './App.tsx'
import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom';
createRoot(document.getElementById('root')!)
.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
<Router>
  <Routes>
    <Route path="/"element={<App/>}/>
    <Route path="*"element={<Navigate to="/"/>}/>
  </Routes>
</Router>
</ThemeProvider>
  </StrictMode>,
)
