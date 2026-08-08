export default function Disclaimer() {
  return (
    <div className="bg-gradient-to-r from-pink-500/10 to-orange-500/10 border border-pink-500/20 rounded-xl p-5 mb-8">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-500/30 flex items-center justify-center mt-0.5">
          <span className="text-pink-400 text-xs">!</span>
        </div>
        <div>
          <h3 className="text-white font-semibold text-sm mb-2">
            Peringatan &amp; Disclaimer (Wajib Baca)
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Fitur ini disediakan{" "}
            <strong className="text-gray-300">hanya untuk tujuan edukasi &amp; eksperimen</strong>
            , bukan merupakan layanan resmi dari Alight Motion. Segala risiko penggunaan menjadi
            tanggung jawab pribadi pengguna sepenuhnya.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mt-2">
            <strong className="text-gray-300">Keamanan Terjamin 100% Aman:</strong> Proses ini{" "}
            <strong className="text-gray-300">TIDAK AKAN</strong> membocorkan privasi kamu, tidak
            akan meminta password email, tidak dapat mengambil alih akun Google/Email kamu. Kami hanya
            memanfaatkan link <em className="text-gray-300">magic login</em> resmi yang di-generate
            via API. Data kamu aman dan tidak ada celah keamanan.
          </p>
        </div>
      </div>
    </div>
  );
}
