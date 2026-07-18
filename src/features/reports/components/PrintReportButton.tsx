"use client";

import { useReportStore } from "../store/report.store";

export function PrintReportButton() {
  const history = useReportStore(
    (state) => state.data.history
  );

  const summary = useReportStore(
    (state) => state.data.summary
  );

  function printReport() {
    const win = window.open(
      "",
      "_blank",
      "width=1000,height=700"
    );

    if (!win) return;

    const rows = history
      .map(
        (item) => `
<tr>
<td>${new Date(
          item.created_at
        ).toLocaleDateString("id-ID")}</td>
<td>${item.type}</td>
<td>${item.invoice}</td>
<td>${item.status}</td>
<td style="text-align:right">
Rp ${item.total.toLocaleString("id-ID")}
</td>
</tr>
`
      )
      .join("");

    win.document.write(`
<html>
<head>
<title>Laporan</title>

<style>

body{
font-family:Arial;
padding:40px;
}

table{
width:100%;
border-collapse:collapse;
margin-top:20px;
}

th,td{
border:1px solid #ccc;
padding:8px;
font-size:12px;
}

th{
background:#eee;
}

.summary{
margin-top:20px;
line-height:1.8;
}

@media print{

button{
display:none;
}

}

</style>

</head>

<body>

<h1>DONARA DONAT</h1>

<h3>Laporan Transaksi</h3>

<div class="summary">

<div>Total Income :
Rp ${summary.totalIncome.toLocaleString("id-ID")}</div>

<div>Total Expense :
Rp ${summary.totalExpense.toLocaleString("id-ID")}</div>

<div>Gross Profit :
Rp ${summary.grossProfit.toLocaleString("id-ID")}</div>

<div>Net Profit :
Rp ${summary.netProfit.toLocaleString("id-ID")}</div>

</div>

<table>

<thead>

<tr>

<th>Tanggal</th>

<th>Jenis</th>

<th>Invoice</th>

<th>Status</th>

<th>Total</th>

</tr>

</thead>

<tbody>

${rows}

</tbody>

</table>

<script>

window.onload=function(){

window.print();

}

</script>

</body>

</html>
`);

    win.document.close();
  }

  return (
    <button
      onClick={printReport}
      className="rounded-xl bg-slate-700 px-5 py-3 font-semibold text-white hover:bg-slate-800"
    >
      Print
    </button>
  );
}