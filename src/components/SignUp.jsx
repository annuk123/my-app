import React, { useState } from 'react';
import { TextField, Button, Typography, Box, IconButton } from '@mui/material';
import { Email, Lock, Person } from '@mui/icons-material';

const SignUp = () => {
    const [action, setAction] = useState('Sign Up');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await fetch('https://mockapi.io/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    // <Container maxWidth="sm">
    //   <Box mt={5}>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ mt: 8, width: '100%', maxWidth: 400,  mx: 'auto', p: 3, bgcolor: 
          'background.paper', borderRadius: 1, boxShadow: 3, textAlign: 'center'}}
    >
        <Typography variant="h4" component="h1" gutterBottom>
          {action}
        </Typography>

        <Box display="flex" gap={2} mt={4}>
        <Button
          variant="contained"
          color={action === "Sign In" ? "secondary" : "primary"}
          onClick={() => setAction("Sign Up")}
          sx={{ width: 120, height: 40, borderRadius: '50px', fontWeight: 700 }}
        >
          Sign Up
        </Button>
        <Button
          variant="contained"
          color={action === "Sign Up" ? "secondary" : "primary"}
          onClick={() => setAction("Sign In")}
          sx={{ width: 120, height: 40, borderRadius: '50px', fontWeight: 700 }}
        >
          Sign In
        </Button>
    </Box>
        <form onSubmit={handleSignUp}>
<Box display="flex" flexDirection="column" gap={2} width="100%" textAlign="center">
  {action === "Sign Up" ? null : (
    <Box display="flex" alignItems="center" gap={1}>
      <IconButton>
        <Person />
      </IconButton>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </Box>
  )}

        <Box display="flex" alignItems="center" gap={1}>
          <IconButton>
            <Email />
          </IconButton>
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>

        <Box display="flex" alignItems="center" gap={2}>
          <IconButton>
            <Lock />
          </IconButton>
          <TextField
            label="Confirm Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Box>
        </Box>

        {action === "Sign In" ? null : (
        <Typography variant="body2" color="textSecondary" align="left" sx={{ mt: 2, cursor: 'pointer' }}>
          Forgot Password? <span style={{ color: '#4c00b4' }}>Click here</span>
        </Typography>
        )}


{action === "Sign Up" ? null : (
        <Typography variant="body2" color="textSecondary" align="left" sx={{ mt: 2, cursor: 'pointer' }}>
          Already have account <span style={{ color: '#4c00b4' }}  onClick={() => setAction("Sign Up")}>Click here </span>
        </Typography>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          sx={{ borderRadius: '50px', fontWeight: 700 }}
        >
            {action}
        </Button>
        </form>
    
</Box>
    // </Container>
  );
};

export default SignUp;



