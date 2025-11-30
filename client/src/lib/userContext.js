import React, { useContext } from "react";
import { AppContext } from "../store/AuthProvider";

export const useUserContext = () => useContext(AppContext);
