import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const QRCode = dynamic(() => import('qrcode.react'), { ssr: false });

export default function QRPage() {
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrl(`${window.location.origin}/home`);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <h1 className="text-2xl font-bold mb-4">Scan to View Menu</h1>

      {url && (
        <div className="bg-gray-100 p-6 rounded-xl shadow-md">
          <QRCode value={url} size={256} />
        </div>
      )}

      <p className="mt-4 text-sm text-gray-600">
        For developer access:&nbsp;
        <Link href="/home" className="text-blue-600 underline">
          Go to Home Page
        </Link>
      </p>
    </div>
  );
}
