import React, { useState } from 'react';

function ErrorBoundary({ children, fallback }) {
  const [hasError, setHasError] = useState(false);

  ErrorBoundary.getDerivedStateFromError = (error) => {  // Static method on the function
    console.error("Error caught by ErrorBoundary:", error); // Log the error
    return { hasError: true };
  };

  const componentDidCatch = (error, errorInfo) => { // Regular function for side effects
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  };

  if (hasError) {
    return fallback;
  }

  return children;
}

export default ErrorBoundary;