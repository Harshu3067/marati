import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

const ReferralModal = ({ open, handleClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log('Form submitted');
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Refer a Friend</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="referrerName"
            label="Your Name"
            type="text"
            fullWidth
            required
          />
          <TextField
            margin="dense"
            id="referrerEmail"
            label="Your Email Address"
            type="email"
            fullWidth
            required
          />
          <TextField
            margin="dense"
            id="friendName"
            label="Friend's Name"
            type="text"
            fullWidth
            required
          />
          <TextField
            margin="dense"
            id="friendEmail"
            label="Friend's Email Address"
            type="email"
            fullWidth
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};