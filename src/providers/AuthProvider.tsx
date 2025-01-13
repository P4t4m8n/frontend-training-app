import {
  useState,
  ReactNode,
  useEffect,
  useRef,
  FC,
  createContext,
} from "react";
import { TFullUser } from "../types/user.type";
import { getSessionData } from "../utils/localStorage.util";
import { authService } from "../services/auth.service";

interface AuthProvider {
  user: TFullUser | null;
  getCurrentUserNoRender: () => TFullUser | null;
  fetchUser: () => Promise<void>;
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
  const [user, setUser] = useState<TFullUser | null>(null);

  //Access the state value without causing a re-render
  const userRef = useRef<TFullUser | null>(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const getCurrentUserNoRender = () => userRef.current;

  const fetchUser = async () => {
    try {
      const uniqueId = getSessionData<string>("uniqueId");
      if (!uniqueId) return;
      const user = await authService.validateToken(uniqueId);
      console.info("Hello:", user.firstName);
      setUser(user);
      userRef.current = user;
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  return (
    <authContext.Provider value={{ user, getCurrentUserNoRender, fetchUser }}>
      {children}
    </authContext.Provider>
  );
};
