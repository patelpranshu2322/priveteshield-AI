const stats = [
  {
    number: "100%",
    label: "Offline AI Processing",
  },
  {
    number: "6+",
    label: "Security Modules",
  },
  {
    number: "<1s",
    label: "Average Scan Time",
  },
  {
    number: "0",
    label: "Cloud Data Uploads",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#050816] py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-cyan-500/20 bg-white/5 p-8 text-center hover:border-cyan-400 transition"
            >
              <h3 className="text-5xl font-bold text-cyan-400">
                {stat.number}
              </h3>

              <p className="mt-3 text-gray-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
