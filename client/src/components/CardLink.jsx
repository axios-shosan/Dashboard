import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Paper, Link } from '@mui/material';

export default function CardLink({ link, picture, cardName }) {
  const navigate = useNavigate();
  const [elevate, setElevate] = useState(2);
  function hoverLink(e) {
    e.target.style.color = '#88A3A6';
  }
  function leaveLink(e) {
    e.target.style.color = '#1C1F3E';
  }
  function goTo() {
    console.log(`going to ${link}`);
    navigate(link, { replace: true });
  }

  return (
    <Paper
      onClick={() => goTo()}
      onMouseOver={() => {
        setElevate(20);
      }}
      onMouseLeave={() => {
        setElevate(1);
      }}
      variant="elevation"
      sx={{
        width: 'fit-content',
        minWidth: '25vw',
        maxWidth: '27vw',
        p: '2em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      elevation={elevate}
    >
      <img src={picture} alt="autoencoder" />
      <Link
        underline="hover"
        style={{
          color: '#1C1F3E',
          fontSize: '1.25em',
        }}
      >
        {cardName}
      </Link>
    </Paper>
  );
}
