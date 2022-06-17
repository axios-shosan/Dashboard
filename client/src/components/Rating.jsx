import React from 'react';
import Card from '@mui/material/Card';

export default function Rating({ criteria, rating }) {
  const pStyle = {
    margin: '5px auto',
    color: '#0',
  };
  const overallStyle = {
    backgroundColor: '#1C1F3E',
    color: '#fff',
  };

  return (
    <Card
      sx={{
        width: 'fit-content',
        p: '12px 15px',
        color: '#1C1F3E',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
      }}
      className={overallStyle}
    >
      <h3 style={pStyle}>{criteria}</h3>
      <p style={pStyle}>Rating Value</p>
      <p
        style={{
          margin: '5px auto',
          backgroundColor: '#1C1F3E',
          color: '#fff',
          padding: '3px 7px',
          borderRadius: '5px',
        }}
      >
        {rating}
      </p>
    </Card>
  );
}
