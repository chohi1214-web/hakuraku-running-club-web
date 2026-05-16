export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-white">
      <div className="relative h-14 w-14">
        <span className="absolute inset-0 rounded-full border-2 border-accent-200" />
        <span className="absolute inset-0 rounded-full border-2 border-accent-500 border-t-transparent animate-spin" />
        <span className="absolute inset-4 rounded-full bg-accent-100 animate-pulse" />
      </div>
      <p className="text-sm tracking-[0.2em] text-slate-500">RUNNING READY...</p>
    </div>
  );
}
