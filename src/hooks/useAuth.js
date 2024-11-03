/* eslint-disable unicorn/no-null */
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { auth } from '../../firebase/firebase';

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsAuthenticated(!!user);
            setUser(user);
        });
        return unsubscribe;
    }, []);

    // eslint-disable-next-line unicorn/consistent-function-scoping
    const logout = async () => {
        await signOut(auth);
    };

    return { isAuthenticated, user, logout };
};

export default useAuth;
