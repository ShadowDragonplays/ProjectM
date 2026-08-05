import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {toast} from "sonner"; 

import api from "../api/api";

import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Logo from "../components/ui/Logo";

const schema = z
  .object({
    name: z.string().min(2, "Name is too short"),
    email: z.email("Invalid email"),
    password: z.string().min(6, "Minimum 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterData = z.infer<typeof schema>;

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: RegisterData) => {
    try {
      const response = await api.post("/auth/register", {
        name: data.name,
        email: data.email,
        password: data.password,
      });

      console.log(response.data);

      toast.success("Account created successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Registration failed.");
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950">

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card>

          <Logo />

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >

            <Input
              placeholder="Full Name"
              {...register("name")}
            />
            <p className="text-sm text-red-400">{errors.name?.message}</p>

            <Input
              placeholder="Email"
              {...register("email")}
            />
            <p className="text-sm text-red-400">{errors.email?.message}</p>

            <Input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <p className="text-sm text-red-400">{errors.password?.message}</p>

            <Input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
            />
            <p className="text-sm text-red-400">
              {errors.confirmPassword?.message}
            </p>

            <Button
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating..." : "Create Account"}
            </Button>

          </form>

        </Card>
      </motion.div>

    </main>
  );
}