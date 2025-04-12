import React, { useState, useEffect } from 'react';
import '../styles.css';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.className = isDark ? 'dark-mode' : 'light-mode';
  }, [isDark]);

  return (
    <button className="theme-toggle" onClick={() => setIsDark(!isDark)}>
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

export default ThemeToggle;