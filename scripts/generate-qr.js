import QRCode from 'qrcode';
import fs from 'fs';

const url = 'http://localhost:3001/';

QRCode.toFile('public/restaurant-qr.png', url, {
  color: {
    dark: '#000000',
    light: '#ffffff',
  },
}, function (err) {
  if (err) throw err;
  console.log('✅ QR code generated at public/restaurant-qr.png');
});
