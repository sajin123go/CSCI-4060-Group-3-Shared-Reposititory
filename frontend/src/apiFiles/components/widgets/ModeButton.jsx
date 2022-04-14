import React from 'react';

import { IconButton } from '@mui/material';
import DarkMode from '@mui/icons-material/DarkMode';
import LightMode from '@mui/icons-material/LightMode';

import { useThemeContext } from '../../app/ThemeWrapper';

export default function ModeButton() {
  const { mode, setMode } = useThemeContext();
  if (!mode) {
    return (
      <IconButton onClick={() => setMode(true)}>
        <DarkMode />
      </IconButton>
    );
  }
  return (
    <IconButton onClick={() => setMode(false)}>
      <LightMode />
    </IconButton>
  );
}
