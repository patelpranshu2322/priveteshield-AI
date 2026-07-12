export default function Hero() {
  return (
    <section className="flex min-h-[85vh] items-center justify-center bg-[#050816] px-6">
      <div className="max-w-5xl text-center">
        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
          🔒 100% On-Device AI • Privacy First
        </span>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
          Protect Yourself From
          <span className="block text-cyan-400">
            Scams, Phishing & Fake Websites
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
          PrivateShield AI is an offline cybersecurity assistant that detects
          phishing links, scam emails, malicious QR codes, suspicious
          screenshots, and weak passwords — all without sending your data to the
          cloud.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black hover:bg-cyan-400">
            Launch Dashboard
          </button>

          <button className="rounded-xl border border-cyan-500 px-8 py-4 font-semibold text-cyan-400 hover:bg-cyan-500/10">
            View GitHub
          </button>
        </div>
      </div>
    </section>
  );
}
