import { Sparkles } from "lucide-react";

export default function Logo() {
  return (
    <div className="mb-10 text-center">

      <div className="mb-3 flex justify-center">

        <div className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          border
          border-cyan-400/30
          bg-cyan-500/10
          backdrop-blur-xl
        ">

          <Sparkles className="text-cyan-400" />

        </div>

      </div>

      <h1 className="text-5xl font-black tracking-tight">

        <span className="text-white">
          Project
        </span>

        <span className="text-cyan-400">
          M
        </span>

      </h1>

      <p className="mt-3 text-sm tracking-wide text-slate-400">

        AI Powered Platform

      </p>

    </div>
  );
}