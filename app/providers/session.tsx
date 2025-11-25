import { createContext, useContext, useState } from "react";

interface SessionUser {
    id: number;
    name: string;
}
interface Session {
  session: SessionUser | null;
  logIn: () => void;
  logOut: () => void;
}

const SessionContext = createContext<Session | null>(null);

export const SessionProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<SessionUser | null>(null);
  
  const logIn = () => {
    setSession({id: 1, name: "DemoUser"});
  }

  const logOut = () => {
    setSession(null);
  }

    return (
        <SessionContext.Provider value={{ session, logIn, logOut }}>
            {children}
        </SessionContext.Provider>
    );
}

export const useSession = () => useContext(SessionContext);