export default function generateOrderId(): string {
    return Math.floor(10000 + Math.random() * 90000).toString();
  }
  