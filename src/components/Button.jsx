import React from 'react';

export default function Button({ children, handleClick }) {
  return (
    <div className="d-flex justify-content-start">
      <button
        className="btn btn-light btn-lg border"
        onClick={() => handleClick()}
      >
        {children}
      </button>
    </div>
  );
}

