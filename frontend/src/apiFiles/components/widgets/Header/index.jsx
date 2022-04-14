import React from 'react';

import BypassBlocks from '../a11y';
import ModeButton from '../ModeButton';

export default function Header() {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between' }}>
      <BypassBlocks />
      <h1>Dog Facts!</h1>
      <ModeButton />
    </header>
  );
}
