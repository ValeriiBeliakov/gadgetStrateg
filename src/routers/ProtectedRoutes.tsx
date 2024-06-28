import { useNavigate } from "react-router";
import useAuth from "../custom-hooks/useAuth";
import React from "react";

interface ProtectedRoutesProps{
  children:React.ReactNode;
}
const ProtectedRoutes:React.FC<ProtectedRoutesProps> = ({ children }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  if (!currentUser) {
    navigate("/login");
    return null;
  }
  
  return children;
};

export default ProtectedRoutes;
