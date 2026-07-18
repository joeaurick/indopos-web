import { SaleItem } from "../types";

type PrintReceiptParams = {
  invoice: string;
  createdAt: string;
  total: number;
  paymentAmount: number;
  changeAmount: number;
  items: SaleItem[];
};

export function printReceipt({
  invoice,
  createdAt,
  total,
  paymentAmount,
  changeAmount,
  items,
}: PrintReceiptParams) {
  const totalItem = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const rows = items
    .map(
      (item) => `
<tr>
  <td colspan="2">
    <strong>${item.product_name}</strong><br/>
    <small>${item.sku}</small>
  </td>
</tr>

<tr>
  <td>
    ${item.quantity} x Rp ${item.price.toLocaleString(
        "id-ID"
      )}
  </td>

  <td style="text-align:right">
    Rp ${item.subtotal.toLocaleString(
      "id-ID"
    )}
  </td>
</tr>

<tr>
  <td colspan="2" style="height:8px"></td>
</tr>
`
    )
    .join("");

  const html = `
<!DOCTYPE html>
<html>

<head>

<meta charset="UTF-8">

<title>${invoice}</title>

<style>

*{
box-sizing:border-box;
}

body{
font-family:Arial,sans-serif;
width:300px;
margin:auto;
padding:14px;
font-size:13px;
color:#000;
}

h2{
margin:0;
text-align:center;
}

p{
margin:3px 0;
text-align:center;
}

table{
width:100%;
border-collapse:collapse;
margin-top:10px;
}

td{
padding:2px 0;
vertical-align:top;
}

hr{
border:none;
border-top:1px dashed #777;
margin:10px 0;
}

.total{
font-weight:bold;
font-size:15px;
}

.footer{
margin-top:16px;
text-align:center;
font-size:12px;
}

</style>

</head>

<body>

<h2>INDOPOS</h2>

<p>Smart Business System</p>

<hr>

<table>

<tr>
<td>Invoice</td>
<td style="text-align:right">
${invoice}
</td>
</tr>

<tr>
<td>Tanggal</td>
<td style="text-align:right">
${new Date(createdAt).toLocaleString(
  "id-ID"
)}
</td>
</tr>

</table>

<hr>

<table>

<tbody>

${rows}

</tbody>

</table>

<hr>

<table>

<tr>

<td>Total Item</td>

<td style="text-align:right">

${totalItem}

</td>

</tr>

<tr class="total">

<td>Total</td>

<td style="text-align:right">

Rp ${Number(total).toLocaleString(
    "id-ID"
  )}

</td>

</tr>

<tr>

<td>Tunai</td>

<td style="text-align:right">

Rp ${Number(
    paymentAmount
  ).toLocaleString("id-ID")}

</td>

</tr>

<tr>

<td>Kembalian</td>

<td style="text-align:right">

Rp ${Number(
    changeAmount
  ).toLocaleString("id-ID")}

</td>

</tr>

</table>

<hr>

<div class="footer">

<p>Terima kasih telah berbelanja</p>

<p>Sampai jumpa kembali</p>

</div>

<script>

window.onload=function(){

window.print();

setTimeout(function(){

window.close();

},300);

}

</script>

</body>

</html>
`;

  const win = window.open(
    "",
    "_blank",
    "width=420,height=700"
  );

  if (!win) return;

  win.document.open();

  win.document.write(html);

  win.document.close();
}