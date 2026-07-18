export function calculateSubtotal(
  qty: number,
  cost: number
) {
  return qty * cost;
}

export function calculateGrandTotal(
  subtotal: number,
  discount: number,
  tax: number
) {
  return subtotal - discount + tax;
}