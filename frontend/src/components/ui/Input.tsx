import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
} from "lucide-react";
import {
  forwardRef,
  useState,
  type InputHTMLAttributes,
} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className = "", type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";

    const inputType =
      isPassword && showPassword ? "text" : type;

    const Icon =
      type === "email"
        ? Mail
        : isPassword
        ? Lock
        : User;

    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-medium text-slate-300">
            {label}
          </label>
        )}

        <div className="relative">
          <Icon
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            ref={ref}
            {...props}
            type={inputType}
            className={`
              w-full
              rounded-xl
              border
              border-white/10
              bg-white/5
              py-3
              pl-11
              ${isPassword ? "pr-12" : "pr-4"}
              text-white
              outline-none
              backdrop-blur-xl
              transition-all
              duration-300
              placeholder:text-slate-500
              hover:border-cyan-400/30
              focus:border-cyan-400
              focus:ring-4
              focus:ring-cyan-500/10
              ${className}
            `}
          />

          {isPassword && (
            <button
              type="button"
              onClick={() =>
                setShowPassword((prev) => !prev)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-cyan-400"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;