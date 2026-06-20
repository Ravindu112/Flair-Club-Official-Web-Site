import { useState, useEffect } from 'react';

export default function Deferred({ children }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    requestIdleCallback(() => setReady(true), { timeout: 500 });
  }, []);

  if (!ready) return null;

  return children;
}
