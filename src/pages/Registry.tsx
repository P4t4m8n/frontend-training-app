import { useEffect, useState } from "react";
import { useSearchParams, Navigate } from "react-router";

import { authService } from "../services/auth.service";

export default function Registry() {
  const [searchParams] = useSearchParams();
  const [redirect, setRedirect] = useState<string | null>(null);

  useEffect(() => {
    onRegister();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRegister = async () => {
    try {
      const token = searchParams.get("token");
      if (!token) return;

      await authService.register(token);
      setRedirect("/");
    } catch (error) {
      console.error(error);
      setRedirect("/error");
    }
  };

  if (!redirect) return <></>;
  return <Navigate to={redirect} />;
}
