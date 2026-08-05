import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

import api from "../api/api";
import { useAuth } from "../context/AuthContext";

import GoogleButton from "../components/auth/GoogleButton";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Logo from "../components/ui/Logo";

type LoginData = {
  email: string;
  password: string;
};

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginData>();

  const onSubmit = async (data: LoginData) => {
    try {
      const formData = new URLSearchParams();

      formData.append("username", data.email);
      formData.append("password", data.password);

      const response = await api.post("/auth/token", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      login(response.data.access_token);

      toast.success("Welcome back!");

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Invalid email or password.");
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950">
      {/* Aurora Background */}
      <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="absolute -right-40 -bottom-40 h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <Logo />

          <h2 className="mb-6 text-center text-2xl font-bold text-white">
            Welcome Back
          </h2>

          {/* Google Login */}
          <div className="mb-6 flex justify-center">
            <GoogleButton />
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>

            <div className="relative flex justify-center">
              <span className="bg-slate-950 px-4 text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
                OR
              </span>
            </div>
          </div>

          {/* Login Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              {...register("email")}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              {...register("password")}
            />

            <Button loading={isSubmitting}>
              {isSubmitting ? "Signing In..." : "Sign In"}
            </Button>

            <p className="text-center text-sm text-slate-400">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-cyan-400 transition hover:text-cyan-300"
              >
                Register
              </Link>
            </p>
          </form>
        </Card>
      </motion.div>
    </main>
  );
}