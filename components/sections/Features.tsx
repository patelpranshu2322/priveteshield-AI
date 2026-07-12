import {
  ShieldCheck,
  Mail,
  ImageIcon,
  FileText,
  QrCode,
  KeyRound,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "URL Shield",
    description: "Detect phishing websites and malicious links locally.",
  },
  {
    icon: Mail,
    title: "Email Shield",
    description: "Identify scam emails using on-device AI.",
  },
  {
    icon: ImageIcon,
    title: "Image Shield",
    description: "Analyze screenshots for fraud and fake payment proofs.",
  },
  {
    icon: FileText,
    title: "Document Shield",
    description: "Scan PDFs and documents for suspicious content.",
  },
  {
    icon: QrCode,
    title: "QR Shield",
    description: "Detect dangerous QR codes before opening them.",
  },
  {
    icon: KeyRound,
    title: "Password Shield",
    description: "Check password strength completely offline.",
  },
];

export default function Features() {
  return (
    <section className="bg-[#050816] py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-bold text-white">
          Powerful Security Features
        </h2>

        <p className="mt-4 text-center text-gray-400">
          Everything runs locally to keep your data private.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6 transition hover:border-cyan-400 hover:bg-cyan-500/5"
            >
              <feature.icon className="mb-4 h-10 w-10 text-cyan-400" />

              <h3 className="text-2xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
