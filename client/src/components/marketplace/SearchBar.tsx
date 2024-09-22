// components/SearchBar.js
import React from 'react';
import { TextField, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const SearchBar = ({ open, onClose }: any) => {
  if (!open) return null;

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 10,
        left: 500,
        right: 0,
        backgroundColor: 'white',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        width: 800,
      }}
    >
      <TextField
        fullWidth
        placeholder="Search..."
        variant="outlined"
        size="small" 
        sx={{ backgroundColor: 'white', flexGrow: 1 }}
      />

      <IconButton onClick={onClose} sx={{ ":hover": { cursor: "pointer", color: "#F54D42" } }}>
        <CloseIcon />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
