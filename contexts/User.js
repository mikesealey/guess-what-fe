"use client";
import { createContext, useState } from "react";

export const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const [userOne, setUserOne] = useState("");

  return (
    <UserContext.Provider value={{ userOne, setUserOne }}>
      {children}
    </UserContext.Provider>
  );
}
