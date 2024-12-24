
import Loginform from './login';
import { AppBar, Container, Toolbar, Typography } from "@mui/material";



function App() {
  return (
    <>
   
     <div>
     <Container fixed> 
    <AppBar position="static">
      <Toolbar>
        <Typography >
          landing page
        </Typography>
      </Toolbar>
      </AppBar>
      
      </Container>
      </div>
      <div>
    <Loginform/>
     </div>
    
    </>
  )
}


export default App ;

