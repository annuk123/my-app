// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import SignUp from './components/SignUp';
// import { AppBar, Toolbar, Typography, Button } from '@mui/material';

// function App() {
//   return (
//     <Router>
//       <div>
//         <AppBar position="static">
//           <Toolbar>
//             <Typography variant="h5" style={{ flexGrow: 1 }}>
//               Housrr3
//             </Typography>
//             {/* <Button color="inherit" component={Link} to="/signin">
//               Sign In
//             </Button> */}
//             <Button color="inherit" component={Link} to="/signup">
//               Sign Up
//             </Button>
//           </Toolbar>
//         </AppBar>
//         <Routes>
//           {/* <Route path="/signin" element={<SignIn />} /> */}
//           <Route path="/signup" element={<SignUp />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignUp from './components/SignUp';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import HomeIcon from '@mui/icons-material/Home';

const StyledButton = styled(Button)({
  color: 'inherit',
  fontWeight: 'bold',
  marginLeft: '15px',
});

const App = () => {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: '#3c009d', p: 1 }}>
          <Toolbar>
            <HomeIcon fontSize="large" />
            <Typography variant="h5" sx={{ flexGrow: 1, ml: 2, fontWeight: 'bold' }}>
              Housrr3
            </Typography>
            {/* <StyledButton component={Link} to="/signin">
              Sign In
            </StyledButton> */}
            <StyledButton component={Link} to="/signup">
              Sign Up
            </StyledButton>
          </Toolbar>
        </AppBar>
        <Routes>
          {/* <Route path="/signin" element={<SignIn />} /> */}
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;

