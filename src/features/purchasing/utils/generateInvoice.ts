export function generateInvoiceNumber() {

  const now = new Date();

  const y = now.getFullYear();

  const m = String(
    now.getMonth() + 1
  ).padStart(2, "0");

  const d = String(
    now.getDate()
  ).padStart(2, "0");

  const h = String(
    now.getHours()
  ).padStart(2, "0");

  const i = String(
    now.getMinutes()
  ).padStart(2, "0");

  return `PO-${y}${m}${d}-${h}${i}`;

}