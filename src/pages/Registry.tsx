import { useEffect, useState } from "react";
import { useSearchParams, Navigate } from "react-router";

import { authService } from "../services/auth.service";
import { useUser } from "../hooks/useUser";

export default function Registry() {
  const [searchParams] = useSearchParams();
  const [redirect, setRedirect] = useState<string | null>(null);
  const { fetchUser } = useUser();

  useEffect(() => {
    onRegister();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRegister = async () => {
    try {
      const token = searchParams.get("token");
      if (!token) return;

      await authService.register(token);
      await fetchUser();
      setRedirect("/");
    } catch (error) {
      console.error(error);
      setRedirect("/error");
    }
  };

  if (!redirect) return <></>;
  return <Navigate to={redirect} />;
}
