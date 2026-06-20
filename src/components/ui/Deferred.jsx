import { useState, useEffect } from 'react';

const rIC = typeof requestIdleCallback === 'function'
  ? (cb) => requestIdleCallback(cb, { timeout: 500 })
  : (cb) => setTimeout(cb, 200);

const cIC = typeof cancelIdleCallback === 'function'
  ? cancelIdleCallback
  : clearTimeout;

export default function Deferred({ children }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = rIC(() => setReady(true));
    return () => cIC(id);
  }, []);

  if (!ready) return null;

  return children;
}
