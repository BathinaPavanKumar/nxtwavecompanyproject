import React from 'react';
import './FailureView.css';

function FailureView({ onRetry }) {
  return (
    <div className="failure-view">
      <p>Failed to load lists. Please try again.</p>
      <button onClick={onRetry}>Retry</button>
    </div>
  );
}

export default FailureView;
