import type { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({
  label,
  className = "",
  ...props
}: Props) {
  return (
    <div className="space-y-2">

      {label && (
        <label className="text-sm font-medium text-slate-300">
          {label}
        </label>
      )}

      <input
        {...props}
        className={`
          w-full

          rounded-xl

          border
          border-white/10

          bg-white/[0.04]

          px-4
          py-3

          text-white

          backdrop-blur-xl

          transition-all
          duration-300

          placeholder:text-slate-500

          hover:border-cyan-400/40

          focus:border-cyan-400

          focus:ring-4
          focus:ring-cyan-500/10

          focus:bg-white/[0.06]

          outline-none

          ${className}
        `}
      />

    </div>
  );
}