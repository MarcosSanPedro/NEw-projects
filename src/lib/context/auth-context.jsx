import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SignOutUser, userStateListener } from "../firebase";

export const AuthContext = createContext({
	currentUser: {},
	setCurrentUser: () => {},
	signOut: () => {},
});

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const unsubscribe = userStateListener((user) => {
			if (user) {
				setCurrentUser(user);
			} else {
				setCurrentUser(null);
			}
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const signOut = () => {
		SignOutUser();
		setCurrentUser(null);
		navigate("/");
	};

	const value = {
		currentUser,
		setCurrentUser,
		signOut,
	};

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
};