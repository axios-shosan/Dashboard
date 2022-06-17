import React from 'react';

export default function Header({ title }) {
  return (
    <div>
      <h1
        style={{
          color: '#1C1F3E',
        }}
      >
        {title}
      </h1>
    </div>
  );
}
