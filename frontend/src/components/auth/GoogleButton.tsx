import { GoogleLogin } from "@react-oauth/google";
import { toast } from "sonner";

import api from "../../api/api";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function GoogleButton() {
  const { login } = useAuth();
  const navigate = useNavigate();

  return (
    <GoogleLogin
      theme="filled_black"
      shape="pill"
      size="large"
      width="100%"
      onSuccess={async (credentialResponse) => {
        try {
          const response = await api.post("/auth/google", {
            credential: credentialResponse.credential,
          });

          login(response.data.access_token);

          toast.success("Welcome!");

          navigate("/dashboard");
        } catch (err) {
          console.error(err);
          toast.error("Google Sign-In failed.");
        }
      }}
      onError={() => {
        toast.error("Google Sign-In cancelled.");
      }}
    />
  );
}