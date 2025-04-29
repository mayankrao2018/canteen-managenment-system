import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const QRCodeCanvas = dynamic(() =>
  import('qrcode.react').then((mod) => mod.QRCodeCanvas),
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
    <div>
      <QRCodeCanvas value={url} />
    </div>
  );
}
