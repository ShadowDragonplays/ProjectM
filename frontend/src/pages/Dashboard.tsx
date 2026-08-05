import { useEffect, useState } from "react";
import api from "../api/api";

interface User {
  id: number;
  email: string;
}

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await api.get("/auth/me");
        setUser(res.data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchUser();
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-10 backdrop-blur-xl">

        <h1 className="mb-6 text-4xl font-bold">
          Welcome 👋
        </h1>

        <p>
          <strong>ID:</strong> {user?.id}
        </p>

        <p>
          <strong>Email:</strong> {user?.email}
        </p>

      </div>
    </main>
  );
}