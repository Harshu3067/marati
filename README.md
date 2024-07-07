import React from 'react';
import { Button, Container, Typography } from '@mui/material';

const App = () => {
  const handleReferNow = () => {
    // Implement logic to show modal here
    console.log('Refer Now clicked');
  };

  return (
    <Container maxWidth="md" style={{ paddingTop: '2rem' }}>
      <Typography variant="h3" align="center" gutterBottom>
        Refer & Earn
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Share our courses and earn rewards!
      </Typography>
      <Button variant="contained" color="primary" onClick={handleReferNow}>
        Refer Now
      </Button>
    </Container>
  );
};
