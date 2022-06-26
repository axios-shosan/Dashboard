import React from 'react';
import Slide from '@mui/material/Slide';

export default function Header({ title }) {
  return (
    <Slide direction="right" mountOnEnter unmountOnExit in timeout={1000}>
      <div>
        <h1
          style={{
            color: '#1C1F3E',
          }}
        >
          {title}
        </h1>
      </div>
    </Slide>
  );
}
