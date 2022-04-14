import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material';

const BYPASS_CONFIG = [
  { link: '#content', description: 'skip to Content' },
  { link: '#footer', description: 'skip to Footer' },
];

const BypassLinks = (config) => {
  const { palette } = useTheme();

  return config.map(({ link, description }) => (
    <Link
      tabIndex={0}
      to={link}
      style={{ backgroundColor: palette.background.default }}
    >
      {description}
    </Link>
  ));
};

export default function BypassBlocks(props) {
  const { config = BYPASS_CONFIG } = props;
  return <p className="skips">{BypassLinks(config)}</p>;
}
