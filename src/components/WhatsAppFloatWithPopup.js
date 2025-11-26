// WhatsAppFloatWithPopup.jsx
import React, { useState } from "react";

export default function WhatsAppFloatWithPopup({
  phone = "+6281314565926",
  message = "Halo Simply Plus Education! Saya mau tanya nih 😊",
  size = 56,
  position = "bottom-right",
  showOnMobile = true,
}) {
  const [open, setOpen] = useState(false);

  const digits = phone.replace(/\D/g, "");
  const href = `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;

  const style = { width: `${size}px`, height: `${size}px` };
  const posClasses = position === "bottom-left" ? "left-4 md:left-8" : "right-4 md:right-8";
  const visClass = showOnMobile ? "" : "hidden sm:block";

  const openWA = () => {
    window.open(href, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <>
      <button
          onClick={() => setOpen(true)}
          aria-label="Chat via WhatsApp"
          className={`fixed z-50 ${posClasses} bottom-6 md:bottom-8 ${visClass} transition-transform transform hover:scale-105 flex items-center gap-3`}
        >
          <div
            style={style}
            className="rounded-full flex items-center justify-center shadow-lg bg-[#25D366] hover:bg-[#1DA851] text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-3/5 h-3/5"
            >
              <path
                fill="white"
                d="M16.001 3.2c-7.055 0-12.8 5.568-12.8 12.441 0 2.197.586 4.347 1.696 6.253L3.2 28.8l7.133-1.864a13.05 13.05 0 0 0 5.668 1.307h.001c7.056 0 12.8-5.568 12.8-12.441-.001-6.873-5.745-12.441-12.801-12.441zm7.538 17.738c-.322.908-1.873 1.784-2.583 1.905-.661.112-1.51.158-2.436-.153-.561-.184-1.281-.416-2.207-.814-3.887-1.675-6.419-5.571-6.614-5.834-.197-.263-1.58-2.102-1.58-4.016 0-1.914 1.003-2.855 1.36-3.246.357-.39.781-.488 1.04-.488.26 0 .52.003.748.014.241.012.561-.091.878.669.322.769 1.088 2.658 1.184 2.853.095.195.158.423.03.686-.125.263-.19.423-.38.651-.197.23-.41.513-.585.69-.195.195-.398.408-.171.8.225.39 1.002 1.65 2.151 2.668 1.48 1.284 2.725 1.687 3.115 1.882.39.195.617.163.842-.098.225-.263.97-1.135 1.228-1.523.259-.39.518-.33.878-.197.357.132 2.259 1.067 2.644 1.262.39.195.646.295.741.46.098.164.098.95-.224 1.858z"
              />
            </svg>
          </div>

          <span className="hidden md:block bg-white text-gray-900 dark:bg-gray-800 dark:text-white shadow-md px-4 py-2 rounded-xl font-medium whitespace-nowrap">
            WhatsApp
          </span>
        </button>


      {open && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-full max-w-sm shadow-xl">
            <h3 className="text-lg font-semibold text-center">Hubungi via WhatsApp?</h3>
            <p className="text-center text-sm opacity-80 mt-2">
              Anda akan dialihkan ke WhatsApp Web / aplikasi.
            </p>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setOpen(false)}
                className="flex-1 py-2 border rounded-xl bg-gray-100 hover:bg-gray-200"
              >
                Batal
              </button>
              <button
                onClick={openWA}
                className="flex-1 py-2 rounded-xl bg-[#25D366] hover:bg-[#1DA851] text-white font-medium"
              >
                Lanjutkan
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
