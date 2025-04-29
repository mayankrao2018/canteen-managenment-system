import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const QRCodeCanvas = dynamic(
  () => import('qrcode.react').then((mod) => mod.QRCodeCanvas),
  { ssr: false }
);

export default function QRPage() {
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrl(`${window.location.origin}/home`);
    }
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f9f9f9',
      fontFamily: 'Arial, sans-serif',
    }}>
      <h1 style={{ marginBottom: '20px' }}>Scan to Visit Home Page</h1>
      <QRCodeCanvas value={url} size={256} />
      <Link href="/home">
        <a style={{
          marginTop: '20px',
          color: '#0070f3',
          textDecoration: 'underline',
          fontSize: '16px'
        }}>
          Go to Home
        </a>
      </Link>
    </div>
  );
}
