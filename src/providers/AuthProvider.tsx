import {
  useState,
  ReactNode,
  useEffect,
  useRef,
  FC,
  createContext,
} from "react";
import { TUser } from "../types/user.type";
import { getSessionData } from "../utils/localStorage.util";
import { authService } from "../services/auth.service";

interface AuthProvider {
  user: TUser | null;
  getCurrentUserNoRender: () => TUser | null;
}

// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext<AuthProvider | undefined>(undefined);

interface Props {
  children: React.ReactNode;
}
export const AuthProvider: FC<Props> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUser] = useState<TUser | null>(null);

  //Access the state value without causing a re-render
  const userRef = useRef<TUser | null>(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const getCurrentUserNoRender = () => userRef.current;
  
  const fetchUser = async () => {
    try {
      const uniqueId = getSessionData<string>("uniqueId");
      if (!uniqueId) return;
      const user = await authService.validateToken(uniqueId);
      setUser(user);
      userRef.current = user;
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  return (
    <authContext.Provider value={{ user, getCurrentUserNoRender }}>
      {children}
    </authContext.Provider>
  );
};
