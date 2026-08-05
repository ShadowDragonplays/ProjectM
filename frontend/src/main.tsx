import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";
import "./index.css";

import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider
    clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
>
    <AuthProvider>
      <App />

      <Toaster
        position="top-right"
        richColors
      />
    </AuthProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
