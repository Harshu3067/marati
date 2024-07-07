import React, { useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import ReferralModal from './ReferralModal';

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleReferNow = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
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
      <ReferralModal open={openModal} handleClose={handleCloseModal} />
    </Container>
  );
};