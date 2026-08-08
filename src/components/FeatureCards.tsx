import { ShieldCheck, Clock, Sparkles } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Tanpa Password",
    description:
      "Tidak butuh password email atau Google kamu. Kami menggunakan sistem magic link verifikasi resmi dari pusat.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Clock,
    title: "Instan 1 Tahun",
    description:
      "Begitu sukses verifikasi, akun Alight Motion kamu langsung aktif status Premium selama 1 Tahun penuh.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Sparkles,
    title: "Sepenuhnya Gratis",
    description:
      "Tidak dipungut biaya apapun. Proses ini 100% gratis disediakan untuk eksperimen.",
    gradient: "from-orange-500 to-yellow-500",
  },
];

export default function FeatureCards() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-white text-center mb-10">
        Key Features
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors group"
          >
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
            >
              <feature.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
