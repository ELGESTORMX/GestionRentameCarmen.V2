import React, { createContext, useContext } from "react";
import axios from "axios";

const API_URL = "https://rentamebackdefinitivo-production.up.railway.app/api";

const apiInstance = axios.create({
	baseURL: API_URL,
});

export const ApiContext = createContext(apiInstance);

export const ApiProvider = ({ children }) => (
	<ApiContext.Provider value={apiInstance}>
		{children}
	</ApiContext.Provider>
);

export const useApi = () => useContext(ApiContext);