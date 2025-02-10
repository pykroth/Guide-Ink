import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
   
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function App() {


  return (
    <Stack spacing={2} direction="row">
    <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
  </Stack>
    
  )
}

export default App
