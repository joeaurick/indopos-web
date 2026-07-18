"use client";

import { useEffect, useState } from "react";

import { notify } from "@/lib/notify";

import {
  useBusinessStore,
} from "@/features/settings";

import { storageService } from "../services/storage.service";

export function BusinessForm() {
  const {
    business,
    fetchBusiness,
    saveBusiness,
  } = useBusinessStore();

  const [loading, setLoading] =
    useState(false);

  const [uploading, setUploading] =
    useState(false);

  const [form, setForm] = useState({
    name: "",

    business_type: "",

    email: "",

    phone: "",

    address: "",

    website: "",

    tax_number: "",

    receipt_footer: "",

    logo_url: "",
  });

  useEffect(() => {
    fetchBusiness();
  }, []);

  useEffect(() => {
    if (!business) return;

    setForm({
      name: business.name ?? "",

      business_type:
        business.business_type ?? "",

      email:
        business.email ?? "",

      phone:
        business.phone ?? "",

      address:
        business.address ?? "",

      website:
        business.website ?? "",

      tax_number:
        business.tax_number ?? "",

      receipt_footer:
        business.receipt_footer ??
        "Terima kasih telah berbelanja.",

      logo_url:
        business.logo_url ?? "",
    });
  }, [business]);

  async function handleSave() {
    try {
      setLoading(true);

      await saveBusiness(form);

      notify.success(
        "Data usaha berhasil disimpan."
      );
    } catch (e) {
      console.error(e);

      notify.error(
        "Gagal menyimpan data."
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleLogoUpload(
    file: File
  ) {
    try {
      setUploading(true);

      const url =
        await storageService.uploadLogo(
          file
        );

      update("logo_url", url);

      notify.success(
        "Logo berhasil diupload."
      );
    } catch (e) {
      console.error(e);

      notify.error(
        "Upload logo gagal."
      );
    } finally {
      setUploading(false);
    }
  }

  function update(
    key: keyof typeof form,
    value: string
  ) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  return (
    <div className="space-y-6">

      <div className="rounded-2xl bg-white p-6 shadow">

        <h2 className="mb-6 text-xl font-bold">
          Informasi Usaha
        </h2>

        <div className="grid gap-5 md:grid-cols-2">

          <Input
            label="Nama Usaha"
            value={form.name}
            onChange={(v) =>
              update("name", v)
            }
          />

          <Input
            label="Jenis Usaha"
            value={form.business_type}
            onChange={(v) =>
              update(
                "business_type",
                v
              )
            }
          />

          <Input
            label="Email"
            value={form.email}
            onChange={(v) =>
              update("email", v)
            }
          />

          <Input
            label="Telepon"
            value={form.phone}
            onChange={(v) =>
              update("phone", v)
            }
          />

          <Input
            label="Website"
            value={form.website}
            onChange={(v) =>
              update("website", v)
            }
          />

          <Input
            label="NPWP"
            value={form.tax_number}
            onChange={(v) =>
              update(
                "tax_number",
                v
              )
            }
          />

        </div>

        <div className="mt-5">

          <label className="mb-2 block text-sm font-medium">
            Alamat
          </label>

          <textarea
            rows={3}
            value={form.address}
            onChange={(e) =>
              update(
                "address",
                e.target.value
              )
            }
            className="w-full rounded-xl border p-3"
          />

        </div>

        <div className="mt-5">

          <label className="mb-2 block text-sm font-medium">
            Footer Struk
          </label>

          <textarea
            rows={3}
            value={form.receipt_footer}
            onChange={(e) =>
              update(
                "receipt_footer",
                e.target.value
              )
            }
            className="w-full rounded-xl border p-3"
          />

        </div>

        <div className="mt-5">

          <label className="mb-2 block text-sm font-medium">
            Logo Usaha
          </label>

          {form.logo_url ? (
            <img
              src={form.logo_url}
              alt="Logo"
              className="mb-4 h-28 w-28 rounded-xl border object-cover"
            />
          ) : (
            <div className="mb-4 flex h-28 w-28 items-center justify-center rounded-xl border border-dashed text-sm text-slate-400">
              Belum ada logo
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            disabled={uploading}
            onChange={(e) => {
              const file =
                e.target.files?.[0];

              if (file) {
                handleLogoUpload(file);
              }
            }}
            className="block w-full rounded-xl border p-3"
          />

          {uploading && (
            <p className="mt-2 text-sm text-slate-500">
              Mengupload logo...
            </p>
          )}

        </div>

        <button
          onClick={handleSave}
          disabled={loading || uploading}
          className="mt-8 rounded-xl bg-teal-600 px-8 py-3 font-semibold text-white hover:bg-teal-700 disabled:opacity-50"
        >
          {loading
            ? "Menyimpan..."
            : "Simpan Perubahan"}
        </button>

      </div>

    </div>
  );
}

type InputProps = {
  label: string;

  value: string;

  onChange: (
    value: string
  ) => void;
};

function Input({
  label,
  value,
  onChange,
}: InputProps) {
  return (
    <div>

      <label className="mb-2 block text-sm font-medium">
        {label}
      </label>

      <input
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="w-full rounded-xl border p-3"
      />

    </div>
  );
}