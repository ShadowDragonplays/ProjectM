import type { ButtonHTMLAttributes, ReactNode } from "react";
import { LoaderCircle } from "lucide-react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: ReactNode;
}

export default function Button({
  children,
  loading = false,
  className = "",
  ...props
}: Props) {
  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={`
        group
        relative
        flex
        w-full
        items-center
        justify-center
        gap-2

        overflow-hidden

        rounded-xl

        bg-gradient-to-r
        from-cyan-500
        to-blue-500

        py-3

        font-semibold

        text-white

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-[0_0_35px_rgba(6,182,212,.45)]

        disabled:cursor-not-allowed
        disabled:opacity-70

        ${className}
      `}
    >
      <div className="absolute inset-0 translate-y-full bg-white/10 transition group-hover:translate-y-0" />

      <span className="relative flex items-center gap-2">

        {loading && (
          <LoaderCircle
            className="animate-spin"
            size={18}
          />
        )}

        {children}

      </span>
    </button>
  );
}