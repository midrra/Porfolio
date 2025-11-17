import React, { useContext } from "react";
import { AppContext } from "../store/AuthProvider";

export const userContext = () => useContext(AppContext);
