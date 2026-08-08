export default function Disclaimer() {
  return (
    <div className="mb-10 p-6 border-3 border-brutal-ink rounded-xl bg-[#ff9999] shadow-[6px_6px_0px_rgba(15,23,42,1)] hover:-translate-y-1 transition-transform">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 border-2 border-brutal-ink">
          <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-black text-brutal-ink uppercase mb-2 tracking-wide">Peringatan & Disclaimer (Wajib Baca)</h3>
          <p className="text-brutal-ink font-medium leading-relaxed">
            Fitur ini disediakan <strong>hanya untuk tujuan edukasi & eksperimen</strong>, bukan merupakan layanan resmi dari Alight Motion. Segala risiko penggunaan menjadi tanggung jawab pribadi pengguna sepenuhnya.
            <br /><br />
            <strong>Keamanan Terjamin 100% Aman:</strong> Proses ini <strong>TIDAK AKAN</strong> membocorkan privasi kamu, tidak akan meminta password email, tidak dapat mengambil alih akun Google/Email kamu. Kami hanya memanfaatkan link <em>magic login</em> resmi yang di-generate via API. Data kamu aman dan tidak ada celah keamanan.
          </p>
        </div>
      </div>
    </div>
  );
}
