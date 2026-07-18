type Item = {
  id: string;
  name: string;
  sku?: string;
  qty: number;
  price: number;
  subtotal?: number;
};

type Business = {
  name: string;
  address: string;
  phone: string;
  logo_url: string | null;
  receipt_footer: string;
};

type Props = {
  invoice: string;
  createdAt: string;
  total: number;
  paymentMethod: string;
  paymentAmount: number;
  changeAmount: number;
  business: Business;
  items: Item[];
};

export function Receipt({
  invoice,
  createdAt,
  total,
  paymentMethod,
  paymentAmount,
  changeAmount,
  business,
  items,
}: Props) {
  const totalItem = items.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  return (
    <div
      className="bg-white text-black"
      style={{
        width: 320,
        padding: 20,
        fontFamily:
          '"Courier New", monospace',
        fontSize: 13,
        lineHeight: 1.4,
      }}
    >
      {/* ================= HEADER ================= */}

      <div className="text-center">

        {business.logo_url ? (

          <img
            src={business.logo_url}
            alt={business.name}
            className="mx-auto mb-3 h-16 w-16 object-contain"
          />

        ) : (

          <div
            className="
              mx-auto
              mb-3
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border-2
              border-black
              text-2xl
              font-bold
            "
          >
            {business.name.charAt(0)}
          </div>

        )}

        <h1 className="text-lg font-bold uppercase tracking-wide">
          {business.name}
        </h1>

        {business.address && (
          <div className="mt-1 text-xs">
            {business.address}
          </div>
        )}

        {business.phone && (
          <div className="text-xs">
            Tel. {business.phone}
          </div>
        )}

      </div>

      <div className="my-4 border-t border-dashed border-black" />

      {/* ================= INFO ================= */}

      <div className="space-y-1 text-xs">

        <div className="flex justify-between">
          <span>Invoice</span>
          <strong>{invoice}</strong>
        </div>

        <div className="flex justify-between">
          <span>Tanggal</span>

          <span>
            {new Date(
              createdAt
            ).toLocaleString("id-ID")}
          </span>

        </div>

        <div className="flex justify-between">
          <span>Pembayaran</span>
          <span>{paymentMethod}</span>
        </div>

      </div>

      <div className="my-4 border-t border-dashed border-black" />

      {/* ================= ITEMS ================= */}

      <div>

        {items.map((item) => (

          <div
            key={item.id}
            className="mb-3"
          >

            <div className="font-bold">
              {item.name}
            </div>

            {item.sku && (

              <div className="text-[11px]">
                {item.sku}
              </div>

            )}

            <div className="mt-1 flex justify-between">

              <span>
                {item.qty} x Rp{" "}
                {item.price.toLocaleString(
                  "id-ID"
                )}
              </span>

              <strong>
                Rp{" "}
                {(
                  item.subtotal ??
                  item.qty * item.price
                ).toLocaleString("id-ID")}
              </strong>

            </div>

          </div>

        ))}

      </div>

      <div className="my-4 border-t border-dashed border-black" />
      {/* ================= TOTAL ================= */}

      <div className="space-y-2 text-sm">

        <div className="flex justify-between">
          <span>Total Item</span>

          <span>{totalItem}</span>
        </div>

        <div className="flex justify-between">
          <span>Subtotal</span>

          <span>
            Rp{" "}
            {total.toLocaleString("id-ID")}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Bayar</span>

          <span>
            Rp{" "}
            {paymentAmount.toLocaleString(
              "id-ID"
            )}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Kembalian</span>

          <span>
            Rp{" "}
            {changeAmount.toLocaleString(
              "id-ID"
            )}
          </span>
        </div>

      </div>

      <div className="my-4 border-t-2 border-black" />

      <div className="flex items-center justify-between text-lg font-bold">

        <span>TOTAL</span>

        <span>
          Rp{" "}
          {total.toLocaleString("id-ID")}
        </span>

      </div>

      <div className="my-5 border-t border-dashed border-black" />

      {/* ================= FOOTER ================= */}

      <div className="space-y-3 text-center">

        <div className="text-xs">
          Barang yang sudah dibeli
          tidak dapat ditukar atau
          dikembalikan.
        </div>

        <div className="text-xs whitespace-pre-line">
          {business.receipt_footer ||
            "Terima kasih telah berbelanja di IndoPOS"}
        </div>

        <div className="pt-2 text-[11px] text-slate-500">
          Powered by IndoPOS
        </div>

      </div>

    </div>
  );
}